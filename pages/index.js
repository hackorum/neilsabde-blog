import BlogLink from "../components/BlogLink";
import articles from "../data/articles.js";
import styles from "../styles/index.module.css";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};
export default Home;
