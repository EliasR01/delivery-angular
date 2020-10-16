import gql from 'graphql-tag';

export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!) {
    resetPassword(token: $token)
  }
`;
