import React from "react";
import { List, ListIcon, ListItem, useTheme } from "@chakra-ui/react";
import { BsHash } from "react-icons/bs";
import Link from "next/link";
function HashTags({tags}) {
  const theme = useTheme();
  const darkMode = theme.config.initialColorMode;

  
  return (
    <List>
      {tags.map((tag) => (
        <Link href={`/t/${tag.slug}`} key={tag.id}>
          <ListItem
            _hover={{
              bg: darkMode ? "gray.900" : "gray.200",
              cursor: "pointer",
              borderRadius: "md",
              color: "blue.300",
            }}
            p={3}
          >
            <ListIcon as={BsHash} w={5} h={5} />
            {tag.name}
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default HashTags;
