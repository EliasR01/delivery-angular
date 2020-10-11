import gql from 'graphql-tag';

export const GET_SERVICES_BY_TYPE = gql`
  query getServiceByType($type: String!) {
    getServiceByType(type: $type) {
      _id
      name
      description
      user
      type
      products
    }
  }
`;
