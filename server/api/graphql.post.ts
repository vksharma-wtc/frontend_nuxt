export default defineEventHandler(async (event) => {
    const body = await readBody(event)
  
    const config = useRuntimeConfig()
  
    return await $fetch(config.public.wordpressGraphql, {
      method: 'POST',
      body
    })
  })