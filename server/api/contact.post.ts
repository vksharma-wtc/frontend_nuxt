export default defineEventHandler(async (event) => {

    const body = await readBody(event)
  
    const config = useRuntimeConfig()
  
    const response = await $fetch(
      `${config.wordpressUrl}/wp-json/nca/v1/contact`,
      {
        method: 'POST',
  
        body: {
          name: body.name,
          email: body.email,
          subject: body.subject,
          message: body.message
        }
      }
    )
  
    return response
  })