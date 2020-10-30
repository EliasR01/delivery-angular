import gql from 'graphql-tag';

export const UPDATE_ORDER = gql`
  mutation updateOrder($where: OrderWhereUniqueData!, $orderData: OrderData!) {
    updateOrder(where: $where, orderData: $orderData) {
      _id
      emited
      status
    }
  }
`;
