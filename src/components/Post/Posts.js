import { gql, useQuery } from "@apollo/client";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

import Post from "./Post";

const GetPostsQuery = gql`
  {
    posts(include: [author, tags]) {
      posts {
        id
        poster
        createdAt
        slug
        title

        publishedAt
        tags {
          id
          name
          slug
        }
        author {
          name
          username
          avatar
        }

        _count {
          hearts
          unicorns
          bookmarks
        }
        readTime
      }
    }
  }
`;
function Posts() {
  const { data, loading, error } = useQuery(GetPostsQuery);

  if (error) {
    return <p>Error</p>;
  }
  return (
    <Box>
      <VStack>
        {loading && <p>Loading...</p>}
        {data?.posts.posts.map((post) => (
          <Post post={post} />
        ))}
      </VStack>
    </Box>
  );
}

export default Posts;
