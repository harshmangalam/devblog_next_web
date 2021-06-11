import { Box, Heading, Spinner, Tag } from "@chakra-ui/react";
import React from "react";

import { useCreatePost } from "../../../context/PostCreateProvider";
import randomColor from "../../../utils/randomColor";
function PostPreview() {
  const { content, title, tags, poster, loadingPoster } = useCreatePost();

  return (
    <Box borderRadius="lg" rounded="lg" borderWidth="1px">
      {loadingPoster && <Spinner size="lg" />}
      {poster && (
        <Box roundedTop="lg" width="100%">
          <img src={poster} alt={poster} width="100%" height="400px" />
        </Box>
      )}

      <Box p="6">
        <Heading my="4" size="2xl">
          {title}
        </Heading>

        <Box my="4">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              mx="2"
              size="md"
              variant="solid"
              colorScheme={randomColor()}
            >
              # {tag.name}
            </Tag>
          ))}
        </Box>
        <Box>{content}</Box>
      </Box>
    </Box>
  );
}

export default PostPreview;
