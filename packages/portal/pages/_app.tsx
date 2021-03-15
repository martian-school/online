import { ChakraProvider } from "@chakra-ui/react";

import { AppBaseTemplate } from "../components";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppBaseTemplate userName={pageProps?.userName}>
        <Component {...pageProps} />
      </AppBaseTemplate>
    </ChakraProvider>
  );
}

export default MyApp;

