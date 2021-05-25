import { gql, useQuery } from "@apollo/client";
import { Box, Heading, HStack, VStack, Text, Divider, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";

const GET_USER_POSTS_QUERY = gql`
  query Posts($username: String!) {
    posts(filter: { author: { username: $username } }, include: [tags]) {
      posts {
        id
        title
        slug

        tags {
          id
          name
          slug
        }
      }
    }
  }
`;
function PostAuthorMorePosts({ author }) {
  const { data, error } = useQuery(GET_USER_POSTS_QUERY, {
    variables: {
      username: author.username,
    },
  });

  if (error) return <p>Error loading more posts</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <Box
      mt="5"
      alignItems="flex-start"
      rounded="lg"
      mb={["10", null]}
      borderWidth="1px"
      borderTopRadius="lg"
    >
      <Box p={4}>
        <Heading size="md" d="flex" alignItems="center">
          More From
          <Link href={`/${author.username}`}>
            <a>
              <Text ml="3" color="blue.500">
                {author.username}
              </Text>
            </a>
          </Link>
        </Heading>
      </Box>

      {data.posts.posts.map((post) => (
        <Fragment key={post.id}>
          <Box p="2" cursor="pointer" w="full" borderWidth="1px">
            <Link href={`/${author.username}/${post.slug}`}>
              <a>
                <Text px={4}>{post.title}</Text>
              </a>
            </Link>
            <HStack px={4} my="2">
              {post.tags.map((tag) => (
                <Link href={`/t/${tag.slug}`} passHref>
                  <a>
                    <Tag># {tag.name}</Tag>
                  </a>
                </Link>
              ))}
            </HStack>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
}

export default PostAuthorMorePosts;
