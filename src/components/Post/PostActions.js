import { Fragment, useEffect } from "react";
import { RiHeart2Line, RiBookmarkLine } from "react-icons/ri";
import { GiUnicorn } from "react-icons/gi";
import { IconButton, Stack, Tag, Text } from "@chakra-ui/react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_POST_QUERY } from "../../graphql/post";
const TOGGLE_POST_HEART = gql`
  mutation PostReaction($postId: ID!) {
    togglePostReaction(postId: $postId, reactionType: hearts) {
      _count {
        hearts
      }
    }
  }
`;

function PostActions({ post }) {
  const [togglePostHeart] = useMutation(TOGGLE_POST_HEART);

  function handlePostHeart() {
    togglePostHeart({
      variables: {
        postId: post.id,
      },
      optimisticResponse: true,
      update(cache, { data }) {
        return {
          ...post,
          ...data.togglePostReaction
        };
      },
    });
  }
  return (
    <Fragment>
      <Stack direction={["row", "row", "row", "column"]} align="center">
        <IconButton
          rounded="full"
          aria-label="Heart"
          size="lg"
          icon={<RiHeart2Line size="30px" />}
          variant="ghost"
          colorScheme="pink"
          onClick={handlePostHeart}
        />
        <Tag>{post._count.hearts}</Tag>
      </Stack>

      <Stack direction={["row", "row", "row", "column"]} align="center">
        <IconButton
          rounded="full"
          aria-label="Unicorn"
          icon={<GiUnicorn size="30px" />}
          variant="ghost"
          colorScheme="blue"
          size="lg"
        />
        <Tag>{post._count.unicorns}</Tag>
      </Stack>
      <Stack direction={["row", "row", "row", "column"]} align="center">
        <IconButton
          colorScheme="yellow"
          rounded="full"
          aria-label="bookmark"
          icon={<RiBookmarkLine size="30px" />}
          variant="ghost"
          size="lg"
        />
        <Tag>{post._count.bookmarks}</Tag>
      </Stack>
    </Fragment>
  );
}

export default PostActions;
