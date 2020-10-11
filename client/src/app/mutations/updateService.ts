import gql from 'graphql-tag';

export const UPDATE_SERVICE = gql`
  mutation updateService(
    $where: ServiceWhereUniqueData!
    $serviceData: ServiceData!
  ) {
    updateService(where: $where, serviceData: $serviceData) {
      _id
    }
  }
`;
