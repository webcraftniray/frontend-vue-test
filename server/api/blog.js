export default defineEventHandler((event) => {
    /**
     * TODO: validate id
     */
    const id = JSON.parse(event.req.body).id

    const { public: { cdaUri, spaceId, environmentId }, cdaToken } = useRuntimeConfig()
    const url = `${cdaUri}/spaces/${spaceId}/environments/${environmentId}/entries/${id}?access_token=${cdaToken}&content_type=blogPost` // returns nothing?
    //const url = `https://randomuser.me/api/` // works
    return $fetch(url)
})