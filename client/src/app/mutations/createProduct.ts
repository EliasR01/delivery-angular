import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation createProduct($productData: [ProductData!]!) {
    createProduct(productData: $productData) {
      _id
      name
    }
  }
`;
