
export const usePosts = () => {
    const { $graphql } = useNuxtApp()
  
    const getPosts = async () => {
      const query = `
        query GetPosts {
          posts {
            nodes {
              id
              title
              slug
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