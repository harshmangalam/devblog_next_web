import { Box, ChakraProvider, useTheme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Header/TopNavbar";
import theme from "../theme";
import client from "../apollo-client";
import ClientOnly from "../components/ClientOnly";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Box
          minH="100vh"
          d="flex"
          flexDir="column"
          justifyContent="space-between"
          bg={
            theme.config.initialColorMode === "light"
              ? "gray.100"
              : "rgb(13,18,25)"
          }
        >
          <header>
            <TopNavbar />
          </header>
          <main style={{ flexGrow: 1 }}>
            <Box py={4} maxW="container.xl" m="auto">
              <ClientOnly>
                <Component {...pageProps} />
              </ClientOnly>
            </Box>
          </main>
          <Footer />
        </Box>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
