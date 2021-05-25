import React from "react";
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
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import TagDetailCard from "../../components/Tag/TagDetailCard";
import Posts from "../../components/Post/Posts";
import PostHeader from "../../components/Post/PostHeader";
function Tag({ tag }) {
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
          <Posts />
        </GridItem>

        <GridItem
          display={["none", "none", "block"]}
          colSpan={2}
          p="6"
          
        >
          <Heading size="sm">who to follow</Heading>
          <VStack>
            <HStack>
              
            </HStack>
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

export async function getServerSideProps(ctx) {
  try {
    const slug = ctx.query.slug;
    const { data } = await client.query({
      query: GET_TAG_QUERY,
      variables: {
        slug,
      },
    });

    return {
      props: {
        tag: data.tag,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Tag;
