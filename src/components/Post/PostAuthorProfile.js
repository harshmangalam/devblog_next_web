import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import randomColor from "../../utils/randomColor";
function PostAuthorProfile({ author }) {
  return (
    <Box position="relative" borderWidth="1px" borderRadius="lg">
      <Box
        bg={randomColor() + ".600"}
        w="full"
        h="8"
        borderWidth="1px"
        borderTopRadius="lg"
      />
      <HStack position="absolute" top="2" alignItems="flex-end" left={4}>
        <Avatar w={12} h={12} src={author.avatar} />
        <Heading size="md">{author.name}</Heading>
      </HStack>
      <VStack px={4} alignItems="flex-start" my="8">
        <Text my={2} overflowWrap="break-word">
          {author.bio}
        </Text>
        <Button w="full" display="block">
          Follow
        </Button>
        {author.location?.length ? (
          <Box>
            <Text fontWeight="semibold" textTransform="uppercase">
              Location
            </Text>
            <Text>{author.location}</Text>
          </Box>
        ) : null}

        <Box>
          <Text fontWeight="semibold" textTransform="uppercase">
            Joined
          </Text>
          <Text>{author.createdAt}</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default PostAuthorProfile;
