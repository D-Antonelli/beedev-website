/* components */
import Hero from '../components/hero';
import ArticleGrid from '../components/article-grid';
import ArticleLayout from '../components/article-layout';
import TrendingList from '../components/trending-list';
import FlexContainer from '../components/flex-container';
import TagList from '../components/tag-list';
import Layout from '../components/layout';

/* contents */
import tagContents from '../contents/tags';

/* style */
import styles from '../styles/Home.module.css';

/* api */
import { getPostsWithTopComments, getRecentPosts } from '../lib/api';

/* next */
import { GetStaticProps } from 'next';

const Home = ({ recentPosts, postsWithTopComments }) => {
  const recent = recentPosts.edges;
  const trending = postsWithTopComments.edges;
  return (
    <Layout>
      <main>
        <Hero />
        <ArticleLayout title="latest articles">
          <ArticleGrid posts={recent} />
        </ArticleLayout>
        <FlexContainer>
          <ArticleLayout title="trending">
            <TrendingList posts={trending} />
          </ArticleLayout>
          <ArticleLayout title="tags">
            <TagList list={tagContents} />
          </ArticleLayout>
        </FlexContainer>
      </main>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const recentPosts = await getRecentPosts();
  const postsWithTopComments = await getPostsWithTopComments();
  return {
    props: {
      recentPosts,
      postsWithTopComments,
    },
  };
}
