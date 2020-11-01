import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation updateUser(
    $where: UserWhereUniqueData!
    $userData: UserData!
    $currentPassword: String!
  ) {
    updateUser(
      where: $where
      userData: $userData
      currentPassword: $currentPassword
    ) {
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
