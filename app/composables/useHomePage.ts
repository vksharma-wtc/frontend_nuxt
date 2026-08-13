export const useHomePage = async () => {
    const query = `
      query HomePage {
  page(id: "home", idType: URI) {
    id
    databaseId
    title
    slug

    heroBanner {
      heroBadge
      heroTitle
      heroDescription
      heroSecondaryUrl

      heroImage {
        node {
          id
          databaseId
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
}
    `
  
    return await $fetch('/api/graphql', {
      method: 'POST',
      body: {
        query
      }
    })
  }