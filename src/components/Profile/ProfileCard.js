import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import { HiLocationMarker } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function ProfileCard({ user }) {
  return (
    <Box borderWidth="1px" shadow="md" bg="gray.700" rounded="lg">
      <Box position="absolute" top={["-8","-12","-16"]} left={["20%","30%","40%"]}>
        <Box rounded="full" p="2" bg="pink.500">
          <Avatar src={user.avatar} w={["16","20","28"]} h={["16","20","28"]} />
        </Box>
      </Box>
      <HStack position="absolute" right="0" p="4">
        <Button>Edit Profile</Button>
      </HStack>
      <VStack mt="16" mb="16">
        <Heading>{user.name}</Heading>
        <Text>{user.bio}</Text>

        <Stack direction={["column", "column", "row"]} spacing="6">
          <HStack>
            <HiLocationMarker />
            <Text>Bihar,India</Text>
          </HStack>

          <HStack>
            <FaBirthdayCake />
            <Text>Joined on {user.createdAt}</Text>
          </HStack>

          <HStack>
            <MdEmail />
            <Text>{user.email}</Text>
          </HStack>
        </Stack>
      </VStack>
    </Box>
  );
}

export default ProfileCard;
