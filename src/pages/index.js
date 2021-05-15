import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import SiteMenus from "../components/LeftSidebar/SiteMenus";
import TagLists from "../components/LeftSidebar/TagLists";
import PostsHeader from "../components/Home/Header";
import Posts from "../components/Post/Posts";
import News from "../components/RightSidebar/News";

function Home({ tags }) {
  return (
    <Stack direction={["column", "column", "row"]}>
      <Box w={["full", "full", "64"]} display={["none", "none", "block"]}>
        <SiteMenus />
        <TagLists />
      </Box>
      <Box flex={1} flexGrow>
        <PostsHeader />

        <Posts />
      </Box>
      <Box display={["none", "none", "block"]} w={["full", "full", "64"]}>
        <News />
      </Box>
    </Stack>
  );
}

export default Home;
