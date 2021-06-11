import React, { Fragment } from "react";
import { List, ListIcon, ListItem, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { menuLinks, authRoutes } from "../../config/siteData";
import { useAuthState } from "../../context/AuthProvider";
function SiteMenus() {
  const { isAuthenticated, userLoading } = useAuthState();
  return (
    <List _hover={{ cursor: "pointer" }}>
      {userLoading ? (
        <Fragment>
          <ListItem p={3}>
            <Skeleton w="24" h="8" />
          </ListItem>
          <ListItem p={3}>
            <Skeleton w="32" h="8" />
          </ListItem>
        </Fragment>
      ) : !isAuthenticated ? (
        authRoutes.map((menu) => (
          <Link href={menu.href} passHref key={menu.name}>
            <ListItem p={3}>
              <ListIcon as={menu.icon} w={6} h={6} />
              {menu.name}
            </ListItem>
          </Link>
        ))
      ) : null}
      {menuLinks.map((menu) => (
        <Link href={menu.href} passHref key={menu.name}>
          <ListItem p={3}>
            <ListIcon as={menu.icon} w={6} h={6} />
            {menu.name}
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default SiteMenus;
