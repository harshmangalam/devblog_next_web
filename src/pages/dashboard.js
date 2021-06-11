import {
  Box,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import Posts from "../components/dashboard/Posts";
import Followers from "../components/dashboard/Followers";
import Followings from "../components/dashboard/Followings";
import FollowingTags from "../components/dashboard/FollowingTags";
function Dashboard() {
  const data = [
    {
      text: "Total post reactions",
      value: 234,
    },

    {
      text: "Total post views",
      value: 234,
    },
  ];
  return (
    <Box maxW="container.xl" m="auto" py={["2", "2", "10"]} py="4" px="2">
      <Heading size="lg">Dashboard</Heading>

      <SimpleGrid my="6" columns={[2, 2, 3]} spacing="4">
        {data.map((d) => (
          <Box p="4" borderWidth="1px" borderRadius="lg">
            <VStack alignItems="flex-start">
              <Heading size="lg">{d.value}</Heading>
              <Text>{d.text}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Box py="6">
        <Tabs
          orientation="horizontal"
          size="md"
          variant="enclosed-colored"
          isLazy
          lazyBehavior="unmount"
          isFitted
        >
          <Box overflowX="scroll" overflowY="hidden">
            <TabList>
              <Tab>Posts</Tab>
              <Tab>Followers</Tab>
              <Tab>Following Tags</Tab>
              <Tab>Following Users</Tab>
            </TabList>
          </Box>

          <Box w="full" my="4">
            <TabPanels>
              <TabPanel>
                <Posts />
              </TabPanel>
              <TabPanel>
                <Followers />
              </TabPanel>
              <TabPanel>
                <Followings />
              </TabPanel>
              <TabPanel>
                <FollowingTags />
              </TabPanel>
            </TabPanels>
          </Box>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Dashboard;
