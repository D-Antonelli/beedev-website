const API_URL = process.env.WP_API_URL || process.env.NEXT_PUBLIC_WP_API_URL;

async function fetchAPI(query, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(`query AllPosts {
  posts(where: {orderby: {field: COMMENT_COUNT, order: DESC}}, first: 20) {
    edges {
      node {
        id
        date
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
        excerpt
      }
    }
  }
}
`);

  return data?.posts;
}

export async function getRecentPosts() {
  const data = await fetchAPI(`query getRecentPosts {
  posts(where: {orderby: {field: DATE, order: DESC}}, first: 6) {
    edges {
      node {
        id
        title
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
}
`);

  return data?.posts;
}

export async function getPostsWithTopComments() {
  const data = await fetchAPI(`query getPostsWithTopComments {
  posts(where: {orderby: {field: COMMENT_COUNT, order: DESC}}, first: 4) {
    edges {
      node {
        id
        date
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        extraPostInfo {
          authorExcerpt
        }
        commentCount
      }
    }
  }
}
`);

  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
        posts(first: 10000) {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `);
  return data?.posts;
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG',
      },
    }
  );

  return data;
}
