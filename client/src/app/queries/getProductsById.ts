import gql from 'graphql-tag';

export const GET_PRODUCTS_BY_IDS = gql`
  query getProducts($products: ProductWhereUniqueData!) {
    getProductsById(data: $products) {
      _id
      name
      description
      stock
      price
    }
  }
`;
