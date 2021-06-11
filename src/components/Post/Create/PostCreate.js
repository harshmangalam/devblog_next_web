import { Box, Button } from "@chakra-ui/react";
import React from "react";
import PostCoverImage from "./PostCoverImage";
import PostTitle from "./PostTitle";
import PostTags from "./PostTags";
import PostContent from "./PostContent";
import { useCreatePost } from "../../../context/PostCreateProvider";
function PostCreate() {
  const { submitPost } = useCreatePost();
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" rounded="lg" h="full">
        <PostCoverImage />
        <PostTitle />
        <PostTags />
      
        <PostContent />
      </Box>
      <Box mt="2" p={["1", "1", null]}>
        <Button colorScheme="messenger" onClick={submitPost}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default PostCreate;
