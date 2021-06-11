import { Box, Textarea } from "@chakra-ui/react";
import React from "react";
import { useCreatePost } from "../../../context/PostCreateProvider";

function PostTitle() {
  const { title, onTitleChange } = useCreatePost();
  return (
    <Box px={["2", "4", "12"]} pt={["2", "4", "2"]}>
      <Textarea
        value={title}
        onChange={onTitleChange}
        variant="unstyled"
        fontSize="50px"
        placeholder="New post title here..."
        size="lg"
      />
    </Box>
  );
}

export default PostTitle;
