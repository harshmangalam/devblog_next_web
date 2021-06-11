import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaDev } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";
function Header({ setIsPreview }) {
  const router = useRouter();
  return (
    <>
      <Box py="2" maxW="container.lg" m="auto" px="1">
        <HStack justifyContent="space-between">
          <HStack display={["none", "none", "flex"]}>
            <Link href="/" passHref>
              <Icon cursor="pointer" as={FaDev} w="10" h="10" />
            </Link>
            <Text>Create Post</Text>
          </HStack>

          <HStack>
            <Button onClick={() => setIsPreview(false)} variant="solid">
              Edit
            </Button>

            <Button onClick={() => setIsPreview(true)} variant="solid">
              Preview
            </Button>
          </HStack>

          <Box
            position={["relative", "relative", "absolute"]}
            right={["0", "0", "2"]}
            top={["0", "0", "2"]}
          >
            <IconButton>
              <Icon onClick={() => router.push("/")} as={RiCloseLine} />
            </IconButton>
          </Box>
        </HStack>
      </Box>
      <Divider display={["block", "block", "none"]} />
    </>
  );
}

export default Header;
