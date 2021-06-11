import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiChat1Line, RiEyeLine, RiHeart2Line } from "react-icons/ri";
import { useAuthState } from "../../../context/AuthProvider";
import PostHeader from "./PostHeader";
const GET_USER_POSTS_QUERY = gql`
  query Posts($username: String!) {
    posts(filter: { author: { username: $username } }) {
      pagination {
        total
      }

      posts {
        id
        slug
        title

        publishedAt
        createdAt

        _count {
          hearts
          unicorns
          bookmarks
        }
      }
    }
  }
`;

function Posts() {
  const { user, userLoading } = useAuthState();
  const { data, loading, error } = useQuery(GET_USER_POSTS_QUERY, {
    variables: {
      username: user?.username,
    },
  });

  if (userLoading) {
    return <p>Loading...</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <PostHeader />
      <Box my="6">
        {data.posts.posts.map((post) => (
          <SimpleGrid columns={[1, 1, 2]} spacing="4" my="4">
            <Box>
              <VStack alignItems="flex-start">
                <Heading size="md">{post.title}</Heading>
                <Text>{post.createdAt}</Text>
              </VStack>
            </Box>
            <HStack justifyContent={["flex-start","flex-start","flex-end"]}>
              <HStack>
                <HStack>
                  <Icon fontSize="20px" as={RiHeart2Line} />
                  <Text>
                    {post._count.hearts +
                      post._count.unicorns +
                      post._count.bookmarks}
                  </Text>
                </HStack>
                <HStack>
                  <Icon fontSize="20px" as={RiChat1Line} />
                  <Text>0</Text>
                </HStack>

                <HStack>
                  <Icon fontSize="20px" as={RiEyeLine} />
                  <Text>0</Text>
                </HStack>
              </HStack>
              <HStack>
                <Button size="sm">manage</Button>
                <Button size="sm">edit</Button>
              </HStack>
            </HStack>
          </SimpleGrid>
        ))}
      </Box>
    </Box>
  );
}

export default Posts;
