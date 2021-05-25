import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import React, { Fragment, useState } from "react";
import Link from "next/link";
function PostHeader(props) {
  const [selected, setSelected] = useState("Feed");

  return (
    <Fragment>
      <HStack mb={4} justify="space-between" px={[2]}>
        <Text fontSize="xl" fontWeight="bold">
          Posts
        </Text>
        <Box display={["block", "block", "none"]}>
          <Menu>
            <MenuButton as={Button} rightIcon={<HiChevronDown />}>
              Filter
            </MenuButton>
            <MenuList>
              <MenuItem>Feed</MenuItem>
              <MenuItem>Week</MenuItem>
              <MenuItem>Month</MenuItem>
              <MenuItem>Latest</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <HStack display={["none", "none", "block"]}>
          {menus.map((menu) => (
            <Link href={menu.href} passHref>
              <Button
                onClick={() => setSelected(menu.name)}
                isActive={menu.name === selected}
                variant="ghost"
                colorScheme="facebook"
              >
                {menu.name}
              </Button>
            </Link>
          ))}
        </HStack>
      </HStack>
    </Fragment>
  );
}

export default PostHeader;

const menus = [
  { name: "Feed", href: "/" },
  { name: "Week", href: "/top/week" },
  { name: "Month", href: "/top/month" },
  { name: "Latest", href: "/top/latest" },
];
