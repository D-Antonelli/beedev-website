import Head from 'next/head';
import Header from '../components/header';
import Article from '../components/article';
import Hero from '../components/hero';
import ArticleGrid from '../components/article-grid';
import styles from '../styles/Home.module.css';
import { getRecentPosts } from '../lib/api';
import Articles from '../components/articles';

const Home = ({ recentPosts }) => {
  const posts = recentPosts.edges;
  return (
    <div className={styles.container}>
      <Head>
        <title>Beedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Articles>
          <ArticleGrid>
            {posts.map(({ node }) => {
              <Article
                key={node.id}
                src={node.featuredImage.node.mediaItemUrl}
                alt={node.featuredImage.node.altText}
                title={node.title}            
              />;
            })}
          </ArticleGrid>
        </Articles>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const recentPosts = await getRecentPosts();
  return {
    props: {
      recentPosts,
    },
  };
}
