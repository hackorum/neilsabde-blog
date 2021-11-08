import Image from "next/image";

function getLanguage(text) {
  if (text.startsWith("mkdir") || text.startsWith("git")) {
    return "bash hljs language-bash";
  }
  return "lua hljs language-lua";
}

const h1 = ({ children }) => (
  <h1 style={{ textAlign: "center" }}>{children}</h1>
);

const p = ({ children }) => (
  <p style={{ paddingHorizontal: "5%" }}>{children}</p>
);

const a = ({ children, href }) => (
  <a
    style={{ color: "#333" }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const blockQuote = ({ children }) => (
  <blockquote style={{ borderLeft: "5px solid", paddingLeft: 15 }}>
    {children}
  </blockquote>
);

const code = ({ children }) => (
  <pre>
    <code className={getLanguage(children)}>{children}</code>
  </pre>
);

const inlineCode = ({ children }) => (
  <code style={{ backgroundColor: "#f2f2f2" }}>{children}</code>
);

const image = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const link = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default {
  h1,
  p,
  a,
  blockQuote,
  code,
  inlineCode,
  image,
  link,
};
