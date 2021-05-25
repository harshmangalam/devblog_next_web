import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuthDispatch } from "../../context/AuthProvider";
function signout_confirm() {
  const authDispatch = useAuthDispatch();
  const router = useRouter();
  const logoutUser = () => {
    authDispatch("LOGOUT");
    router.push("/");
  };
  return (
    <Box
      height="80vh"
      display="flex"
      alignItems="center"
      w="full"
      justifyContent="center"
    >
      <VStack>
        <Heading textAlign="center" size="lg">
          Are you sure you want to sign out ?
        </Heading>
        <Button variant="solid" colorScheme="facebook" onClick={logoutUser}>
          Yes, sign out
        </Button>
      </VStack>
    </Box>
  );
}

export default signout_confirm;
