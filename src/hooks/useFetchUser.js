import { gql, useQuery } from "@apollo/client";

const GET_AUTH_USER = gql`
  {
    me {
      id
      name
      email
      avatar
      username
    }
  }
`;
const useFetchUser = () => {
  const { data, error, loading } = useQuery(GET_AUTH_USER);

  return {
    error,
    loading,
    data,
  };
};

export default useFetchUser;
