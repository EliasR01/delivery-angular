import gql from 'graphql-tag';

export const GET_TYPE_SERVICE = gql`
  query getTypeOfService {
    getTypeOfService {
      name
    }
  }
`;
