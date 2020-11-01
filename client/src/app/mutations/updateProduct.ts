import gql from 'graphql-tag';

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productData: ProductData!) {
    updateProduct(productData: $productData)
  }
`;
