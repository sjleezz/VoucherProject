import React from "react";
import "public/theme/globalStyles.css";
import type { AppProps } from "next/app";
import wrapper from "redux/store";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />;
      </Hydrate>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(MyApp);
