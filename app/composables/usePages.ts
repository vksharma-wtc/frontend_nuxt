// composables/usePages.ts
export const usePages = () => {
  const { $graphql } = useNuxtApp()

  const getPage = async (uri: string) => {
    const query = `
      query GetPage($uri: ID!) {
        page(id: $uri, idType: URI) {
          id
          title
          slug
          uri
          content
        }
      }
    `

    const response = await $graphql('', {
      method: 'POST',
      body: {
        query,
        variables: {
          uri
        }
      }
    })

    return response.data.page
  }

  return {
    getPage
  }
}