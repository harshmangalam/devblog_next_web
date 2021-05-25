import { gql } from "@apollo/client";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import client from "../../apollo-client";
import TagCard from "../../components/Tag/TagCard";
function index({ tags }) {
  return (
    <Box maxW="container.xl" m="auto" py={["2", "2", "4"]}>
      <Heading size="xl">Top Tags</Heading>

      <SimpleGrid columns={[1,2,3]} spacing={6} my={4}>
        {tags.map((tag) => (
          <TagCard tag={tag} key={tag.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const GET_TAGS_QUERY = gql`
  {
    tags {
      id
      name
      description
      poster
      slug

      _count {
        posts
      }
    }
  }
`;
export async function getServerSideProps(ctx) {
  try {
    const { data } = await client.query({
      query: GET_TAGS_QUERY,
    });

    return {
      props: {
        tags: data.tags,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default index;
