import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import hljs from "highlight.js";
import "../styles/globals.css";
import lua from "highlight.js/lib/languages/lua";
import bash from "highlight.js/lib/languages/bash";
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("bash", bash);

// quick and dirty hack lol
function getLanguage(text) {
  if (text.startsWith("mkdir") || text.startsWith("git")) {
    return "bash";
  }
  return "lua";
}

const mdComponents = {
  h1: ({ children }) => <h1 style={{ textAlign: "center" }}>{children}</h1>,
  h2: ({ children }) => <h2>{children}</h2>,
  h3: ({ children }) => <h3>{children}</h3>,
  h4: ({ children }) => <h4>{children}</h4>,
  h5: ({ children }) => <h5>{children}</h5>,
  h6: ({ children }) => <h6>{children}</h6>,
  p: ({ children }) => <p style={{ paddingHorizontal: "5%" }}>{children}</p>,
  a: ({ children, href }) => (
    <a
      style={{ color: "#333" }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul>{children}</ul>,
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote style={{ borderLeft: "5px solid", paddingLeft: 15 }}>
      {children}
    </blockquote>
  ),
  pre: ({ children }) => <pre>{children}</pre>,
  code: ({ children }) => (
    <pre>
      <code className={getLanguage(children)}>{children}</code>
    </pre>
  ),
  inlineCode: ({ children }) => (
    <code style={{ backgroundColor: "#f2f2f2" }}>{children}</code>
  ),
  img: ({ src, alt }) => <img src={src} alt={alt} />,
  table: ({ children }) => <table>{children}</table>,
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => <th>{children}</th>,
  td: ({ children }) => <td>{children}</td>,
  hr: () => <hr />,
  br: () => <br />,
  em: ({ children }) => <em>{children}</em>,
  strong: ({ children }) => <strong>{children}</strong>,
  del: ({ children }) => <del>{children}</del>,
  inlineMath: ({ children }) => <span>{children}</span>,
  blockMath: ({ children }) => <span>{children}</span>,
  link: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  tableOfContents: ({ children }) => <div>{children}</div>,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        ></link>
      </Head>
      <MDXProvider components={mdComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
