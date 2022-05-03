export default defineEventHandler((event) => {
    const { public: { cdaUri, spaceId, environmentId }, cdaToken } = useRuntimeConfig()
    const url = `${cdaUri}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${cdaToken}&content_type=blogPost` // returns nothing?
    // const url = `https://randomuser.me/api/` // works
    return $fetch(url)
})