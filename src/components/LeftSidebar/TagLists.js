import { Box, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { gql, useQuery } from "@apollo/client";

import { RiSettingsLine } from "react-icons/ri";
import HashTags from "./HashTags";

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
  const { data, loading, error } = useQuery(GetTagsQuery);

  if (error) {
    return <p>Error</p>;
  }
  return (
    <Box mt={6}>
      <HStack justify="space-between" px={4}>
        <Heading as="h4" size="md">
          Popular Tags
        </Heading>
        <Icon as={RiSettingsLine} w={7} h={7} />
      </HStack>
      <Box mt={4}>
        {loading && <p>Loading...</p>}
        {data && <HashTags tags={data.tags} />}
      </Box>
    </Box>
  );
}

export default TagLists;
