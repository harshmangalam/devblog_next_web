import { gql } from "@apollo/client";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import client from "../../apollo-client";
import ProfileCard from "../../components/Profile/ProfileCard";
import Post from "../../components/Post/Post";
import { RiArticleLine } from "react-icons/ri";
function index({ user, posts }) {
  return (
    <Box>
      <Box bg="pink.500" w="full" h="32" />
      <Box maxW="container.lg" m="auto">
        <Box position="relative" top="-14">
          <ProfileCard user={user} />
        </Box>

        <Box>
          <Stack direction={["column", "column", "row"]} spacing="4">
            <VStack borderWidth="1px" p="4" rounded="lg" height="36" w={["full","full","64"]} alignItems="flex-start">
              <HStack>
                <RiArticleLine />
                <Text>{user._count.posts} posts published</Text>
              </HStack>
              <HStack>
                <RiArticleLine />
                <Text>{user._count.posts} posts published</Text>
              </HStack>
              <HStack>
                <RiArticleLine />
                <Text>{user._count.posts} posts published</Text>
              </HStack>
            </VStack>

            <VStack flexGrow="1">
              {posts.posts.map((post) => (
                <Post post={post} />
              ))}
            </VStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

const GET_USER_QUERY = gql`
  query User($username: String!) {
    user(username: $username) {
      id
      name
      email
      username
      avatar
      location
      createdAt
      _count {
        posts
      }
    }
  }
`;

const GET_USER_POSTS_QUERY = gql`
  query Posts($username: String!) {
    posts(
      filter: { author: { username: $username } }
      include: [author, tags]
    ) {
      pagination {
        total
      }

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

export async function getServerSideProps(ctx) {
  try {
    const username = ctx.query.username;

    const { data: userData } = await client.query({
      query: GET_USER_QUERY,
      variables: { username },
    });

    const { data: postsData } = await client.query({
      query: GET_USER_POSTS_QUERY,
      variables: { username },
    });

    return {
      props: {
        user: userData.user,
        posts: postsData.posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default index;
