/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';

/* data */
import { getAllPosts } from '../../lib/api';

/* styles */
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

/* components */
import Layout from '../../components/layout';

const Blog = ({ allPosts: { edges } }) => (
  <Layout theme="light">
    <main className="styles.main">
      <h1 className={styles.title}>Latest blog articles</h1>
      <hr />
      <section>
        {edges.map(({ node }) => (
          <div className={blogStyles.listItem} key={node.id}>
            <div className={blogStyles.listItem_thumbnail}>
              <figure>
                <img
                  src={node.extraPostInfo.thumbImage.mediaItemUrl}
                  alt={node.title}
                />
              </figure>
              <div className={blogStyles.listItem__content}>
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo.authorExcerpt}</p>
                <Link href={`/blog/${node.slug}`}>
                  <a>Read more </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  </Layout>
);

export default Blog;

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}
