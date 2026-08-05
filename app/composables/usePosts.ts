export const usePosts = () => {
  const { $graphql } = useNuxtApp()

  const getPosts = async () => {
    const query = `
      query GetPosts {
        posts(first: 20) {
          nodes {
            id
            title
            slug
            excerpt
            date

            featuredImage {
              node {
                sourceUrl
              }
            }

            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `

    const response = await $graphql('', {
      method: 'POST',
      body: {
        query
      }
    })

    return response.data.posts.nodes
  }

  return {
    getPosts
  }
}