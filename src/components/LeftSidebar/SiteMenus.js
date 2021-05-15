import React from "react";
import { List, ListIcon, ListItem, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import {menuLinks} from "../../config/siteData"
function SiteMenus() {
  const theme = useTheme();
  const darkMode = theme.config.initialColorMode;
  return (
    <List>
      {menuLinks.map((menu) => (
        <Link href={menu.href} passHref>
          <ListItem
            _hover={{
              bg: darkMode ? "gray.900" : "gray.200",
              cursor: "pointer",
              borderRadius: "md",
              color: "blue.300",
            }}
            p={3}
          >
            <ListIcon as={menu.icon} w={6} h={6} />
            {menu.name}
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default SiteMenus;
