import gql from 'graphql-tag';

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ProductWhereData!) {
    deleteProduct(where: $productId) {
      _id
    }
  }
`;
