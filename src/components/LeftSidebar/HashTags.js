import React from "react";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { BsHash } from "react-icons/bs";
import Link from "next/link";
function HashTags({ tags }) {
  return (
    <List>
      {tags.map((tag) => (
        <Link href={`/tags/${tag.slug}`} key={tag.id} passHref>
          <ListItem
            _hover={{
              cursor: "pointer",
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
