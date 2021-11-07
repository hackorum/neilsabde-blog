import Link from "next/link";
import styles from "../styles/BlogLink.module.css";

const BlogLink = ({ slug, title, date, description }) => {
  return (
    <div className={styles.container}>
      <Link href={`/blogs/${slug}`}>
        <a className={styles.title}>{title}</a>
      </Link>
      <p style={{ color: "#989898", fontSize: "0.9rem" }}>
        Published on {date}
      </p>
      <p>{description}</p>
    </div>
  );
};
export default BlogLink;
