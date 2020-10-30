import gql from 'graphql-tag';

export const GET_SERVICES = gql`
  query getServiceByUser($userID: String!) {
    getServiceByUser(userID: $userID) {
      _id
      name
      description
      user
      type
      products
    }
  }
`;
