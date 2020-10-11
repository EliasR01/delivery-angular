import gql from 'graphql-tag';

export const CREATE_SERVICE = gql`
  mutation createService($serviceData: ServiceData!) {
    createService(serviceData: $serviceData) {
      _id
    }
  }
`;
