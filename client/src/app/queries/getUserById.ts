import gql from 'graphql-tag';

export const GET_USER_BY_ID = gql`
  query getUserById($data: UserWhereUniqueData!) {
    getUserById(data: $data) {
      _id
      username
      name
      email
      address
      type
      country
      fileUrl
    }
  }
`;
