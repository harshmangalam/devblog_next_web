import { Fragment } from "react";
import { RiHeart2Line, RiBookmarkLine } from "react-icons/ri";
import { GiUnicorn } from "react-icons/gi";
import { IconButton } from "@chakra-ui/react";

function PostActions() {
  return (
    <Fragment>
      <IconButton
        rounded="full"
        aria-label="Heart"
        size="lg"
        icon={<RiHeart2Line size="30px" />}
        variant="ghost"
        colorScheme="pink"
      />

      <IconButton
        rounded="full"
        aria-label="Unicorn"
        icon={<GiUnicorn size="30px" />}
        variant="ghost"
        colorScheme="blue"
        size="lg"

      />

      <IconButton
        colorScheme="yellow"
        rounded="full"
        aria-label="bookmark"
        icon={<RiBookmarkLine size="30px" />}
        variant="ghost"
        size="lg"
      />
    </Fragment>
  );
}

export default PostActions;
