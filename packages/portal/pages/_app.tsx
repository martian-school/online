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

const fakeAsync = (timeout: number) => <T extends {}>(data: T): Promise<T> =>
  new Promise((res) => setTimeout(() => res(data), timeout));
const smallDelayAsync = fakeAsync(500);

MyApp.getInitialProps = async () => {
  const data = await smallDelayAsync({ userName: "Andrey Smirnov" });

  return { pageProps: data };
};

export default MyApp;

