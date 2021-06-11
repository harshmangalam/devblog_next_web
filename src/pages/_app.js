import { Box, ChakraProvider, useTheme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Header/TopNavbar";
import theme from "../theme";
import client from "../apollo-client";
import ClientOnly from "../components/ClientOnly";
import { AuthProvider } from "../context/AuthProvider";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const exclude = ["/new"];

  const isHide = exclude.includes(router.pathname);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <ClientOnly>
          <AuthProvider>
            <Box
              minH="100vh"
              d="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              {!isHide && (
                <Box>
                  <TopNavbar />
                </Box>
              )}

              <Box flexGrow="1">
                <Component {...pageProps} />
              </Box>

              {!isHide && <Footer />}
            </Box>
          </AuthProvider>
        </ClientOnly>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
