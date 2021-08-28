/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

/* data */
import { getAllPosts } from '../../lib/api';

/* styles */
import styles from '../../styles/Blog.module.css';

/* components */
import Layout from '../../components/layout';
import ArticleGrid from '../../components/article-grid';
import HeroPost from '../../components/hero-post';

const Blog = ({ allPosts: { edges } }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout lightTheme={true}>
      <main>
        <section>
          {heroPost && (
            <HeroPost
              slug={heroPost.slug}
              url={heroPost.featuredImage?.node.mediaItemUrl}
              alt={heroPost.featuredImage?.node.altText}
              title={heroPost.title}
              excerpt={heroPost.excerpt}
            />
          )}
        </section>
        <section className={styles.allArticlesSection}>
          <div className={styles.allArticlesContainer}>
            <h2 className={styles.allArticlesTitle}>All articles</h2>
            {morePosts && <ArticleGrid posts={morePosts} blogPage />}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}
