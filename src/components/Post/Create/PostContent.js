import { Box } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/react";
import React from "react";
import { useCreatePost } from "../../../context/PostCreateProvider";

function PostContent() {
  const { content, onContentChange } = useCreatePost();
  return (
    <Box px={["2", "4", "12"]} pt={["2", "4", "2"]} h="full">
      <Textarea
        rows={14}
        placeholder="write your content here..."
        fontSize="20px"
        w="full"
        value={content}
        onChange={onContentChange}
        variant="unstyled"
      />
    </Box>
  );
}

export default PostContent;
