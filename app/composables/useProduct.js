export const useProduct = async (slug) => {

  const config = useRuntimeConfig()

  const query = `
    query GetProduct($slug: ID!) {
      product(id: $slug, idType: SLUG) {

        id
        databaseId
        name
        slug
        description
        shortDescription
        sku

        image {
          sourceUrl
          altText
        }

        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }

        productCategories {
          nodes {
            id
            name
            slug
          }
        }

        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          stockStatus
        }

      }
    }
  `

  const { data, pending, error } = await useFetch(
    config.public.wordpressGraphql,
    {
      method: "POST",

      body: {
        query,
        variables: {
          slug
        }
      }
    }
  )

  return {

    product: computed(() => data.value?.data?.product),

    pending,

    error

  }

}

