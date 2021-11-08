import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  h1,
  p,
  a,
  blockQuote,
  code,
  inlineCode,
  image,
  link,
} from "../components/tags";

import "../styles/globals.css";

import hljs from "highlight.js";
import "highlight.js/styles/default.css";

import lua from "highlight.js/lib/languages/lua";
import bash from "highlight.js/lib/languages/bash";

hljs.registerLanguage("lua", lua);
hljs.registerLanguage("bash", bash);

const mdComponents = {
  h1: h1,
  p: p,
  a: a,
  blockquote: blockQuote,
  code: code,
  inlineCode: inlineCode,
  img: image,
  link: link,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <>
      <MDXProvider components={mdComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
