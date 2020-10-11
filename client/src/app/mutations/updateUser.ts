import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation updateUser($where: UserWhereUniqueData!, $userData: UserData!) {
    updateUser(where: $where, userData: $userData) {
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
