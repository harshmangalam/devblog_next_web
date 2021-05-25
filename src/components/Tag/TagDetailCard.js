import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import randomColor from "../../utils/randomColor";
function TagDetail({ tag }) {
  return (
    <VStack
      w="full"
      rounded="xl"
      borderWidth="1px"
      h="60"
      alignItems="flex-start"
    >
      <Box bg={randomColor()} w="full" h="4" roundedTop="xl" />

      <HStack w="full" p="8">
        <Image src={tag.poster} />
        <VStack w="full" alignItems="flex-start">
          <HStack w="full" justifyContent="space-between">
            <Heading size="lg">{tag.name}</Heading>
            <Button>Follow</Button>
          </HStack>
          <Text>
            {tag.description}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default TagDetail;
