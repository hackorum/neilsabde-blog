import Link from "next/link";
import styles from "../styles/PostContainer.module.css";

const PostTitle = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;
  return (
    <div className={styles.container}>
      <Link href={`/blogs${link}`}>
        <a className={styles.title}>{meta.title}</a>
      </Link>
      <p style={{ color: "#989898", fontSize: "0.9rem" }}>
        Published on {meta.date}
      </p>
      <p>{meta.description}</p>
    </div>
  );
};

export default PostTitle;
