import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import client from "../../../apollo-client";
import { gql } from "@apollo/client";
import PostActions from "../../../components/Post/PostActions";
import PostDetail from "../../../components/Post/PostDetail";
import PostAuthorProfile from "../../../components/Post/PostAuthorProfile";
import PostAuthorMorePosts from "../../../components/Post/PostAuthorMorePosts";
function Post({ post }) {
  console.log(post);
  return (
    <Stack direction={["column", "column", "column","row"]} maxW="container.xl" m="auto" py={["0","0","0","10"]}>
      <VStack d={["none", "none", "none","flex"]} w="16" position="relative" h="full" mt="5%">
        <PostActions post={post} />
      </VStack>
      <HStack
        display={["flex", "flex", "flex","none"]}
        p="2"
        position="fixed"
        zIndex="modal"
        bottom="0"
        w="full"
        bg="gray.900"
        justifyContent="space-between"
      >
        <PostActions post={post} />
      </HStack>

      <Box
        flex={1}
        flexGrow="1"
        borderWidth={["0","0","0","1px"]}
        borderTopRadius={["none", "none", "none","lg"]}
        p={["2", "2", "10"]}
      >
        <PostDetail post={post} />
      </Box>

      <Box w={["full", "full", "full","80"]}>
        <PostAuthorProfile author={post.author} />
        <PostAuthorMorePosts author={post.author} />
      </Box>
    </Stack>
  );
}

const GET_POST_QUERY = gql`
  query Post($slug: String!) {
    post(slug: $slug, include: [author, tags]) {
      id
      title
      poster
      tags {
        id
        name
        slug
      }
      author {
        id
        name
        avatar
        username
        createdAt
        location
      }

      createdAt
      readTime
      content
      _count {
        hearts
        unicorns
        bookmarks
      }
    }
  }
`;

export async function getServerSideProps(ctx) {
  try {
    const slug = ctx.query.slug;

    const { data } = await client.query({
      query: GET_POST_QUERY,
      variables: { slug },
    });

    return {
      props: {
        post: data.post,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Post;
