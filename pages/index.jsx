import { posts } from "../getAllPosts";
import PostTitle from "../components/PostTitle";
import Head from "next/head";
import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className={styles.title}>Neil Sabde's Blog</h1>
      </main>
      {posts.map((post) => (
        <PostTitle key={post.link} post={post} />
      ))}
    </>
  );
}
