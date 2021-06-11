import { gql, useLazyQuery } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreatePost } from "../../../context/PostCreateProvider";

const GetTagsQuery = gql`
  {
    tags {
      id
      slug
      name
    }
  }
`;

function PostTags() {
  const { handleTagChange, tags } = useCreatePost();
  const [fetchTags, { data, loading, error }] = useLazyQuery(GetTagsQuery);

  return (
    <Box position="relative" px={["2", "4", "12"]} pt={["2", "4", "2"]}>
      <Popover>
        <PopoverTrigger>
          <Button onClick={fetchTags}>Add Tags</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Select Tags</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <VStack alignItems="flex-start">
                {loading && <p>Loading...</p>}
                {error && <p>Error.</p>}
                {data?.tags.map((tag) => (
                  <Checkbox
                    defaultChecked={tags.includes(tag.id)}
                    key={tag.id}
                    name={tag.name}
                    value={tag.id}
                    onChange={handleTagChange}
                  >
                    {tag.name}
                  </Checkbox>
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
}

export default PostTags;
