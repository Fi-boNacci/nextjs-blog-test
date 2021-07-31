import { SWRConfig } from "swr";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import "styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/agate.css";
import "react-toggle/style.css";
import { ThemeProvider } from "context/theme-context";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  nProgress.start();
};
Router.onRouteChangeComplete = (url) => {
  nProgress.done();
};

Router.onRouteChangeError = (url) => {
  nProgress.done();
};

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60000,
        fetcher,
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
          }
        },
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
