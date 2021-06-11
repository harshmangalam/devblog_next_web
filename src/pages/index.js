import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import SiteMenus from "../components/LeftSidebar/SiteMenus";
import TagLists from "../components/LeftSidebar/TagLists";
import PostHeader from "../components/Post/PostHeader";
import { gql, useQuery } from "@apollo/client";
import { useAuthState } from "../context/AuthProvider";
import Post from "../components/Post/Post";

const GetPostsQuery = gql`
  {
    posts(include: [author, tags], orderBy: createdAt) {
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

function Home() {
  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
  } = useQuery(GetPostsQuery);
  const { isAuthenticated } = useAuthState();

  if (postsLoading) {
    return <p>Loading...</p>;
  }
  if (isAuthenticated && postsError) {
    return <p>Error</p>;
  }

  return (
    <Box maxW="container.xl" m="auto" py={["2", "2", "10"]}>
      <Box display="flex" flexDirection={["column", "column", "row"]}>
        <Box display={["none", "none", "block"]} width={["md"]} marginRight="4">
          <SiteMenus />
          <TagLists />
        </Box>

        <Box flexGrow="1" width="full">
          <PostHeader />

          <Box>
            <VStack>
              {postsData?.posts.posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
