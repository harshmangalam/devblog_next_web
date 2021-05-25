import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import randomColor from "../../utils/randomColor";
function TagCard({ tag }) {
  return (
    <VStack
      w="full"
      rounded="xl"
      borderWidth="1px"
      h="96"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Box bg={randomColor()} w="full" h="4" roundedTop="xl" />
      <VStack alignItems="flex-start" p="4" flexGrow="1">
        <NextLink href={`/tags/${tag.slug}`}>
          <a>
            <Heading size="md"># {tag.name}</Heading>
          </a>
        </NextLink>
        <Text>{tag.description}</Text>
        <Text>{tag._count?.posts} posts published</Text>
      </VStack>
      <HStack p="4">
        <Button>Follow</Button>
        {tag.poster && <Image src={tag.poster} alt={tag.name} />}
      </HStack>
    </VStack>
  );
}

export default TagCard;
