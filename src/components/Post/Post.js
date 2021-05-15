import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RiChat1Line, RiHeart2Line } from "react-icons/ri";

function Post({ post }) {
  const reactionCount =
    post._count.hearts + post._count.unicorns + post._count.bookmarks;
  return (
    <LinkBox w="full" bg={"gray.800"} as="article" rounded={["none"]}>
      {post.poster && (
        <Image
          borderTopRadius={["none"]}
          src={post.poster}
          alt={post.heading}
          title={post.heading}
          width="100%"
          height="72"
        />
      )}
      <HStack align="center" my={[3]} pl={[0]} px={[2]}>
        <Avatar src={post.author.avatar} w={9} h={9} />

        <VStack spacing={0} align="flex-start">
          <NextLink href={`/${post.author.username}`} passHref>
            <a>
              <Text fontSize="md">{post.author.name}</Text>
            </a>
          </NextLink>

          <Text fontSize="sm">{post.publishedAt}</Text>
        </VStack>
      </HStack>

      <NextLink href={`/${post.author.username}/${post.slug}`} passHref>
        <LinkOverlay>
          <Heading as="h3" size="lg" my="2" px={[2]}>
            {post.title}
          </Heading>
        </LinkOverlay>
      </NextLink>

      <Wrap pl={[0]} my={[3]} px={[2]}>
        {post.tags.map((tag) => (
          <NextLink href={`/t/${tag.slug}`} passHref key={tag.id}>
            <a>
              <Text fontSize="md">#{tag.name}</Text>
            </a>
          </NextLink>
        ))}
      </Wrap>

      <HStack pl={[0]} pr={[0]} py={[2]} px={[2]} justify="space-between">
        <HStack>
          <NextLink href={`/${post.author.username}/${post.slug}`} passHref>
            <a>
              <Button
                size="sm"
                variant="ghost"
                leftIcon={<Icon as={RiHeart2Line} w={5} h={5} />}
              >
                {reactionCount}
                <Box
                  display={["none", "none", "block"]}
                  ml={reactionCount ? 2 : 0}
                >
                  reactions
                </Box>
              </Button>
            </a>
          </NextLink>

          <NextLink href={`/${post.author.username}/${post.slug}`} passHref>
            <a>
              <Button
                size="sm"
                variant="ghost"
                leftIcon={<Icon as={RiChat1Line} w={5} h={5} />}
              >
                {post._count.comments}
                <Box
                  display={["none", "none", "block"]}
                  ml={post._count.comments ? 2 : 0}
                >
                  Add a comment
                </Box>
              </Button>
            </a>
          </NextLink>
        </HStack>

        <HStack>
          <Text fontSize="xs">{post.readTime} min read</Text>
          <Button size="sm" variant="solid">
            Save
          </Button>
        </HStack>
      </HStack>
    </LinkBox>
  );
}

export default Post;
