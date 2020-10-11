import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser($userData: UserData!) {
    createUser(userData: $userData) {
      _id
      name
      username
      email
      password
      type
      address
      country
      fileUrl
    }
  }
`;
