export const usePost = () => {
    const { $graphql } = useNuxtApp()
  
    const getPost = async (slug: string) => {
      const query = `
        query GetPost($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            slug
            date
            content
            excerpt
  
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
  
            categories {
              nodes {
                name
              }
            }
          }
        }
      `
  
      const response = await $graphql('', {
        method: 'POST',
        body: {
          query,
          variables: {
            slug
          }
        }
      })
  
      return response.data.post
    }
  
    return {
      getPost
    }
  }