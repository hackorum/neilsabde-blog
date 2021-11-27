import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import "../styles/prismtheme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
