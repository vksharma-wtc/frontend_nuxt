export const useCategoryPosts = () => {
    const { $graphql } = useNuxtApp()
  
    const getPostsByCategory = async (category: string) => {
      const query = `
        query GetPostsByCategory($category: String!) {
  
          posts(where: { categoryName: $category }) {
  
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
          query,
          variables: {
            category
          }
        }
      })
  
      return response.data.posts.nodes
    }
  
    return {
      getPostsByCategory
    }
  }