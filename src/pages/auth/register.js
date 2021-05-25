import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useRegister from "../../hooks/useRegister";
import { FaGithub } from "react-icons/fa";
function register() {
  const {
    showPassword,
    setShowPassword,
    values,
    handleChange,
    handleSubmit,
    error,
  } = useRegister();
  return (
    <Grid column={1} justifyContent="center">
      <Box
        borderRadius="lg"
        borderWidth="1px"
        w={["full", "full", "xl"]}
        p={["4", "4", "10"]}
      >
        <Heading>Welcom to DEV Community</Heading>

        <Button my="4" leftIcon={<FaGithub />} w="full" size="lg">
          Continue With Github
        </Button>
        <Divider />

        <Box w="full" my="8">
          {error?.graphQLErrors[0].extensions.message && (
            <Alert status="error" my="2">
              <AlertIcon />

              <AlertDescription>
                {error.graphQLErrors[0].extensions.message}
              </AlertDescription>
              <AlertDescription></AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                isInvalid={Boolean(error?.graphQLErrors[0].extensions.name)}
                value={values.name}
                name="name"
                onChange={handleChange}
                size="lg"
                type="name"
              />
              <FormHelperText color="red.500">
                {error?.graphQLErrors[0].extensions.name}
              </FormHelperText>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                isInvalid={Boolean(error?.graphQLErrors[0].extensions.email)}
                value={values.email}
                name="email"
                onChange={handleChange}
                size="lg"
                type="email"
              />
              <FormHelperText color="red.500">
                {error?.graphQLErrors[0].extensions.email}
              </FormHelperText>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="lg">
                <Input
                  size="lg"
                  isInvalid={Boolean(
                    error?.graphQLErrors[0].extensions.password
                  )}
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    size="md"
                    icon={
                      showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )
                    }
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText color="red.500">
                {error?.graphQLErrors[0].extensions.password}
              </FormHelperText>
            </FormControl>
            <Button type="submit" my="3" w="full" size="lg">
              Continue
            </Button>
          </form>
        </Box>
      </Box>
    </Grid>
  );
}

export default register;
