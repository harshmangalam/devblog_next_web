import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Input,
  useTheme,
} from "@chakra-ui/react";
import {
  RiChatSmile3Line,
  RiNotification3Line,
  RiMenuFill,
  RiSearchLine,
} from "react-icons/ri";
import { FaDev } from "react-icons/fa";
import React from "react";
import MobileDrawer from "./MobileDrawer";

function TopNavbar(props) {
  const theme = useTheme();

  return (
    <Box
      px={[1, null]}
      py={2}
      bg={theme.config.initialColorMode === "light" ? "white" : "rgb(26,38,52)"}
      shadow="xs"
    >
      <Box
        m="auto"
        maxW={["container.xl"]}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          {/* logo  */}
          <MobileDrawer />
          <Icon as={FaDev} h={10} w={10} />
          <Input
            variant="filled"
            display={["none", "none", "block"]}
            w={[20, 40, 60, 96]}
            b="2px"
            placeholder="Search..."
          />
          {/* menu */}
        </HStack>

        <HStack>
          <Button display={["none", "none", "block"]} colorScheme="blue">
            Write a Post
          </Button>
          <IconButton
            isRound
            variant="ghost"
            display={["block", "block", "none"]}
            aria-label="Connect"
            icon={<Icon as={RiSearchLine} w={6} h={6} />}
          />
          <IconButton
            isRound
            variant="ghost"
            aria-label="Connect"
            icon={<Icon as={RiChatSmile3Line} w={6} h={6} />}
          />
          <IconButton
            isRound
            variant="ghost"
            aria-label="Connect"
            icon={<Icon as={RiNotification3Line} w={6} h={6} />}
          />

          <Avatar
            size="md"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w={[9]}
            h={[9]}
          />
        </HStack>
      </Box>
    </Box>
  );
}

export default TopNavbar;
