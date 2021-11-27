function importAll(r) {
  return r.keys().map((fileName) => {
    return {
      link: fileName.substr(1).replace(".mdx", ""),
      module: r(fileName),
    };
  });
}

export const posts = importAll(
  require.context("./pages/blogs/", true, /\.mdx$/)
);
