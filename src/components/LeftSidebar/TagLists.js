import { Box, Button, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { RiSettingsLine } from "react-icons/ri";
import HashTags from "./HashTags";
import { useAuthState } from "../../context/AuthProvider";

const GetTagsQuery = gql`
  {
    tags {
      id
      slug
      name
    }
  }
`;
function TagLists() {
  const { isAuthenticated } = useAuthState();
  const { data, loading, error } = useQuery(GetTagsQuery);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated && error) {
    <p>Error</p>;
  }
  return (
    <Box>
      <Box mt="6">
        <HStack justify="space-between" px={4}>
          <Heading as="h4" size="md">
            {isAuthenticated ? "My Tags" : "Popular Tags"}
          </Heading>
          {isAuthenticated && <Icon as={RiSettingsLine} w={7} h={7} />}
        </HStack>
        <Box mt={4}>
          {loading && <p>Loading...</p>}
          {data && <HashTags tags={data.tags} />}
        </Box>
      </Box>
    </Box>
  );
}

export default TagLists;
