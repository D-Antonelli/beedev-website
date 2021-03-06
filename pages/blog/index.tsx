/* data */
import { getAllPosts } from '../../lib/api';

/* styles */
import styles from '../../styles/Blog.module.css';

/* components */
import Layout from '../../components/layout';
import ArticleGrid from '../../components/article-grid';
import HeroPost from '../../components/hero-post';
import LayoutContainer from '../../components/layout-container';

/* next */
import { GetStaticProps } from 'next';

const Blog = ({ allPosts: { edges } }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout lightTheme={true}>
      <main>
        <LayoutContainer>
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
              {morePosts && <ArticleGrid posts={morePosts} blogPage={true} />}
            </div>
          </section>
        </LayoutContainer>
      </main>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async context => {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}
