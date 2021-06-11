import { Box, Button, Spinner, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import { useCreatePost } from "../../../context/PostCreateProvider";
import Image from "next/image";

function PostCoverImage() {
  const fileRef = useRef();
  const { onPosterChange, poster, handleRemovePoster, loadingPoster } =
    useCreatePost();

  return (
    <Box px={["2", "4", "12"]} pt={["2", "4", "6"]}>
      <Stack direction={["column", "column", "row"]}>
        {loadingPoster && <Spinner size="xl" />}
        {poster && (
          <Box position="relative">
            <Image src={poster} alt={poster} width={180} height={200} />
            <Button
              right="0"
              top="0"
              colorScheme="red"
              size="xs"
              onClick={handleRemovePoster}
              position="absolute"
            >
              remove
            </Button>
          </Box>
        )}
        <Button variant="outline" onClick={() => fileRef.current.click()}>
          Add a cover image
        </Button>
      </Stack>
      <input hidden type="file" ref={fileRef} onChange={onPosterChange} />
    </Box>
  );
}

export default PostCoverImage;
