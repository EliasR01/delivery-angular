import gql from 'graphql-tag';

export const DELETE_PRODUCT = gql`
  mutation deleteProduct(
    $data: ProductWhereUniqueData!
    $service: ProductWhereServiceData!
  ) {
    deleteProduct(where: $data, service: $service)
  }
`;
