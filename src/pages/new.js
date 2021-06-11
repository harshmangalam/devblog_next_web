import { Box } from "@chakra-ui/react";
import { useState } from "react";

import Header from "../components/Post/Create/Header";
import PostCreate from "../components/Post/Create/PostCreate";
import PostPreview from "../components/Post/Create/PostPreview";
import { PostCreateProvider } from "../context/PostCreateProvider";

function New() {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <PostCreateProvider>
      <Box>
        <Header setIsPreview={setIsPreview} />

        <Box maxW="container.lg" m="auto">
          {!isPreview ? (
            <Box>
              <PostCreate />
            </Box>
          ) : (
            <PostPreview />
          )}
        </Box>
      </Box>
    </PostCreateProvider>
  );
}

export default New;
