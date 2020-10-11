import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
  mutation createOrder($orderData: OrderData!) {
    createOrder(orderData: $orderData) {
      _id
      emited
    }
  }
`;
