import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getAccessToken } from './utils';

export function createApollo(httpLink: HttpLink) {
  const uri = 'http://localhost:4000'; // <-- add the URL of the GraphQL server here
  // const uri = 'http://172.17.0.2:4000';
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.message.split(':')[1].split(' ')[1] !== 'Invalid') {
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
  });

  const authMiddleware = new ApolloLink((operation: any, forward: any) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          authentication: `bearer ${accessToken}`,
        },
      });
    }
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
