export const useProducts = async (first = 8) => {

    const config = useRuntimeConfig()
  
    const query = `
      query GetProducts($first: Int!) {
        products(first: $first) {
          nodes {
            id
            name
            slug
            image {
              sourceUrl
            }
            ... on SimpleProduct {
              price
            }
          }
        }
      }
    `
  
    const { data, error, pending } = await useFetch(
      config.public.wordpressGraphql,
      {
        method: 'POST',
        body: {
          query,
          variables: {
            first
          }
        }
      }
    )
  
    return {
      products: computed(() => data.value?.data?.products?.nodes || []),
      error,
      pending
    }
  }