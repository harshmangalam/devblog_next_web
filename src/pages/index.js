import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import SiteMenus from "../components/LeftSidebar/SiteMenus";
import TagLists from "../components/LeftSidebar/TagLists";
import PostHeader from "../components/Post/PostHeader";
import Posts from "../components/Post/Posts";

function Home() {
  return (
    <Box maxW="container.xl" m="auto" py={["2", "2", "10"]}>
      <Box display="flex" flexDirection={["column", "column", "row"]}>
        <Box display={["none", "none", "block"]} width={["md"]} marginRight="4">
          <SiteMenus />
          <TagLists />
        </Box>

        <Box flexGrow="1" width="full">
          <PostHeader />
          <Posts />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
