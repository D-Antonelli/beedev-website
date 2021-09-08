/* eslint-disable @next/next/no-img-element */
/* next */
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

/* data */
import { getAllPostsWithSlug, getPost } from '../../lib/api';

/* styles */
import styles from '../../styles/Slug.module.css';

/* components */
import Layout from '../../components/layout';
import LayoutContainer from '../../components/layout-container';

/* icons */
import TwitterIcon from '../../svg/twitter';
import FacebookIcon from '../../svg/facebook';

/* utils */
import formatDate from '../../utils/date-formatter';

export default function Post({ postData }) {
  const router = useRouter();

  if (!router.isFallback && !postData?.slug) {
    return <p>Hmm.. error</p>;
  }

  return (
    <Layout lightTheme>
      <main>
        {router.isFallback ? (
          <h2>Loading...</h2>
        ) : (
          <article>
            <LayoutContainer>
              <section className={styles.hero}>
                <div className={styles.mainTitle}>
                  <h1>{postData.title}</h1>
                </div>
                <div className={styles.excerpt}>
                  <p dangerouslySetInnerHTML={{ __html: postData.excerpt }}></p>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={postData.featuredImage.node.mediaItemUrl}
                    alt={postData.featuredImage.node.altText}
                    className={styles.image}
                  />
                </div>
              </section>
              <section className="article">
                <div className={styles.bodyWrapper}>
                  <div className={styles.info}>
                    <div className={styles.infoLeft}>
                      <div className={styles.avatarContainer}>
                        <img
                          src={postData.extraPostInfo.thumbImage.mediaItemUrl}
                          alt="avatar"
                          className={styles.avatar}
                        />
                      </div>
                      <div className={styles.infoContent}>
                        <p className={styles.author}>
                          {postData.extraPostInfo.authorExcerpt}
                        </p>
                        <div className={styles.articleData}>
                          <time>{formatDate(postData.date)}</time>
                          <div>&#8226;</div>
                          <p>{4} min read</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.infoRight}>
                      <div>
                        <FacebookIcon />
                      </div>
                      <div>
                        <TwitterIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.articleContent}>
                    <p dangerouslySetInnerHTML={{ __html: postData.content }} className={styles.article}></p>
                  </div>       
                </div>
              </section>
            </LayoutContainer>
          </article>
        )}
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPost(params.slug);

  return {
    props: {
      postData: data.post,
    },
  };
};
