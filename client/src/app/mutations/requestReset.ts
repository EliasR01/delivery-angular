import gql from 'graphql-tag';

export const REQUEST_RESET = gql`
  mutation requestReset($email: String!) {
    requestReset(email: $email) {
      user {
        _id
        name
        username
        password
        address
        email
        type
        country
        fileUrl
      }
    }
  }
`;
