import gql from 'graphql-tag';

export const DELETE_SERVICE = gql`
  mutation deleteService($serviceId: ServiceWhereData) {
    deleteService(where: $serviceId) {
      _id
    }
  }
`;
