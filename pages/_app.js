import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";

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
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  pre: ({ children }) => <pre>{children}</pre>,
  code: ({ children }) => (
    <code style={{ backgroundColor: "#f2f2f2" }}>{children}</code>
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
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
