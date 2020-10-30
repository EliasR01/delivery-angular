import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloLink, from, fromPromise, Observable, concat } from 'apollo-link';
import { onError } from 'apollo-link-error';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getAccessToken, setAccessToken } from './utils';
//import { TokenRefreshLink } from 'apollo-link-token-refresh';
//import jwtDecode from 'jwt-decode';

export function createApollo(httpLink: HttpLink) {
  let isRefreshedToken = false;
  let pendingRequests = [];

  const uri = 'http://localhost:4000'; // <-- add the URL of the GraphQL server here
  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          if (err.extensions.code === 'UNAUTHENTICATED') {
            let forward$: any;
            if (!isRefreshedToken) {
              isRefreshedToken = true;
              forward$ = fromPromise(
                fetch(`${uri}/refresh_token_id`, {
                  method: 'POST',
                  credentials: 'include',
                })
                  .then((res) => {
                    res.json().then(({ accessToken }) => {
                      //Should set the accessToken in dashboard.serice with the value returned from response.
                      setAccessToken(accessToken);
                    });
                  })
                  .catch((Error) => {
                    pendingRequests = [];
                    return Error;
                  })
                  .finally(() => {
                    isRefreshedToken = false;
                  })
              ).filter((value) => Boolean(value));
            } else {
              forward$ = fromPromise(
                new Promise((resolve) => {
                  pendingRequests.push(() => resolve);
                })
              );
            }

            return forward$.flatMap(() => forward(operation));
          } else {
            const templateParams = {
              from_name: 'eliasalejo01@gmail.com',
              to_name: 'eliasalejo01@gmail.com',
              subject: 'Error in delivery app',
              message_html: `There is a GraphQL error in delivery application: ${err.message}, location: ${err.locations} - ${err.path}`,
            };

            emailjs
              .send(
                'delivery-app-service',
                'template_smXCjRxC',
                templateParams,
                'user_eJv2ZcvYpPAAY03vAk0sV'
              )
              .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
              }),
              (error: any) => {
                console.log(error.text);
              };
          }
        }
      }
      if (networkError) {
        const templateParams = {
          from_name: 'eliasalejo01@gmail.com',
          to_name: 'eliasalejo01@gmail.com',
          subject: 'Error in delivery app',
          message_html: `There is a network error: ${networkError.message}`,
        };

        emailjs
          .send(
            'delivery-app-service',
            'template_smXCjRxC',
            templateParams,
            'user_eJv2ZcvYpPAAY03vAk0sV'
          )
          .then((result: EmailJSResponseStatus) => {
            console.log(result.text);
          }),
          (error: any) => {
            console.log(error.text);
          };
      }
    }
  );

  const authMiddleware = new ApolloLink((operation: any, forward: any) => {
    // const op = new Observable((observer: any) => {
    // let handle: any;
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          authentication: `bearer ${accessToken}`,
        },
      });
    }
    /*Promise.resolve(operation)
        .then((operation) => {
          const accessToken = this.service.getAccessToken();
          if (accessToken) {
            operation.setContext({
              headers: {
                authentication: `bearer ${accessToken}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };*/
    // })
    return forward(operation);
  });

  const endpoint = httpLink.create({
    uri,
    withCredentials: true,
  });

  return {
    link: from([authMiddleware, errorLink, endpoint]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
  constructor() {}
}
