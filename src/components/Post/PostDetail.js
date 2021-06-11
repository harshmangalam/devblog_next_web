import {
  Avatar,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";

import Link from "next/link";
import randomColor from "../../utils/randomColor";
function PostDetail({ post }) {
  return (
    <Box>
      {post.poster && <Image src={post.poster} />}
      <Heading my="4" size="2xl">
        {post.title}
      </Heading>

      <HStack my="4">
        {post.tags.map((tag) => (
          <Link href={`/tags/${tag.slug}`} passHref>
            <a>
              <Tag size="md" variant="solid" colorScheme={randomColor()}>
                # {tag.name}
              </Tag>
            </a>
          </Link>
        ))}
      </HStack>

      <HStack my="4">
        <Avatar src={post.author.avatar} w={8} h={8} />
        <Text>{post.author.name}</Text>
        <Text fontSize="sm">{post.createdAt}</Text>
        <Icon as={BsDot} />
        <Text fontSize="sm">{post.readTime} min read</Text>
      </HStack>

      <Box
        pt="8"
        wordBreak="break-all"
        lineHeight="taller"
        letterSpacing="wider"
      >
        <Box p="4">{post.content}</Box>
      </Box>
    </Box>
  );
}

export default PostDetail;
