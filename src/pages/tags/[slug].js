import React, { Fragment } from "react";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import TagDetailCard from "../../components/Tag/TagDetailCard";
import PostHeader from "../../components/Post/PostHeader";
import Post from "../../components/Post/Post";
function Tag({ tag, posts }) {
  console.log(posts);
  console.log(tag);
  
  return (
    <Box maxW="container.xl" m="auto" py={["2", "2", "4"]}>
      <TagDetailCard tag={tag} />

      <Grid
        my="10"
        h="500px"
        templateColumns={["repeat(5, 1fr)", "repeat(5, 1fr)", "repeat(9, 1fr)"]}
        gap={4}
      >
        <GridItem display={["none", "none", "block"]} colSpan={2}>
          <VStack alignItems="flex-start">
            <VStack alignItems="flex-start" p="6">
              <Heading size="sm">submission guidelines</Heading>
              <Text>{tag.submissionGuideline}</Text>
              <Button size="sm">Write a Post</Button>
            </VStack>

            <Divider />

            <VStack alignItems="flex-start" p="6">
              <Heading size="sm">about #{tag.name}</Heading>
              <Text>{tag.about}</Text>
            </VStack>

            <Divider />

            <VStack p="6">
              <Heading size="sm">tag moderators</Heading>
            </VStack>
          </VStack>
        </GridItem>

        <GridItem colSpan={5}>
          <PostHeader />
          <Box>
            <VStack>
              {posts.posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </VStack>
          </Box>
        </GridItem>

        <GridItem display={["none", "none", "block"]} colSpan={2} p="6">
          <Heading size="sm">who to follow</Heading>
          <VStack>
            <HStack></HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

const GET_TAG_QUERY = gql`
  query Tag($slug: String!) {
    tag(slug: $slug) {
      id
      name
      description
      about

      poster
      submissionGuideline
      slug

      _count {
        posts
      }
    }
  }
`;

const GET_POSTS_BY_TAG_QUERY = gql`
  query Posts($slug: String!) {
    posts(
      filter: { tags: { some: { name: $slug } } }
      include: [author, tags]
    ) {
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
    const slug = ctx.query.slug;
    const { data: tagData } = await client.query({
      query: GET_TAG_QUERY,
      variables: {
        slug,
      },
    });

    const { data: postsData } = await client.query({
      query: GET_POSTS_BY_TAG_QUERY,
      variables: {
        slug,
      },
    });

    return {
      props: {
        tag: tagData.tag,
        posts: postsData.posts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default Tag;
