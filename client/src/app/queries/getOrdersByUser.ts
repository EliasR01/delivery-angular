import gql from 'graphql-tag';

export const GET_ORDERS_BY_USER = gql`
  query getOrdersByUser($userID: String!) {
    getOrdersByUser(userID: $userID) {
      _id
      address
      emited
      service
      price
      status
      products
      user
      bussiness
    }
  }
`;
