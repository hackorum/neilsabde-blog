import {useEffect} from "react";
import {MDXProvider} from "@mdx-js/react";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
