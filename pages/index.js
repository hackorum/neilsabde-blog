import BlogLink from "../components/BlogLink";
import articles from "../data/articles.js";
import styles from "../styles/index.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className={styles.title}>Neil Sabde's Blog</h1>
        {articles.map((article) => (
          <BlogLink
            key={article.key}
            slug={article.slug}
            title={article.title}
            date={article.date}
            description={article.description}
          />
        ))}
      </main>
    </>
  );
};
export default Home;
