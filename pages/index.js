/* next js */
import Head from 'next/head';

/* components */
import Header from '../components/header';
import Hero from '../components/hero';
import ArticleGrid from '../components/article-grid';
import ArticleLayout from '../components/article-layout';
import TrendingList from '../components/trending-list';
import FlexContainer from '../components/flex-container';
import TagList from '../components/tag-list';
import Footer from '../components/footer';

/* contents */
import tagContents from '../contents/tags';

/* style */
import styles from '../styles/Home.module.css';

/* api */
import { getPostsWithTopComments, getRecentPosts } from '../lib/api';


const Home = ({ recentPosts, postsWithTopComments }) => {
  const recent = recentPosts.edges;
  const trending = postsWithTopComments.edges;
  return (
    <div className={styles.container}>
      <Head>
        <title>Beedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
      <Footer/>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const recentPosts = await getRecentPosts();
  const postsWithTopComments = await getPostsWithTopComments();
  return {
    props: {
      recentPosts,
      postsWithTopComments,
    },
  };
}
