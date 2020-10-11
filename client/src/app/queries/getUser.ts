import gql from 'graphql-tag';

export const GET_USER = gql`
  query getUser($data: UserWhereData!) {
    getUser(data: $data) {
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
