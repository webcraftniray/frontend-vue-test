<script setup>
import { getBlogs } from '@/plugins/contentful.js'
const { data: blogs } = useAsyncData('blogs', () => getBlogs()) // ? remove :blogs

/**
 * ! Either $fetch is required for reactive asynchronous requests or script setup is not fired on route change.
 */

/**
 * ! TEST CASE
 * 
 * ? Contentful URL returns Blob JS type, not sure if this is because of nuxt $fetch or Contentful headers.
 * ? Blob seems empty but also cannot be stringified by JSON.stringify().
 * ? useAsyncData must use stringify data as it throws warning and nothing happens. (Cannot stringify arbitrary non-POJOs Blob)
 * ? FileReader is not available in NodeJS, only client-side JavaScript so can't convert Blob to JSON.
 * ? FileReader may not be necessary, try Blob.text() but Blob still returns empty. // https://developer.mozilla.org/en-US/docs/Web/API/Blob
 */

/*
import { createClient } from 'contentful'
const { cdaUri, spaceId, environmentId, cdaToken } = useRuntimeConfig()
const client = createClient({
        host: cdaUri,
        environment: environmentId,
        space: spaceId,
        accessToken: cdaToken
    });
const url = `${cdaUri}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${cdaToken}&content_type=blogPost` // ? remove &content_type=blogPost
const blogData = await $fetch(url)
const { data: blogs } = useAsyncData('blogs', () => blogData)
*/
</script>

<template>
    <div>
        <VeriteerContainer>
            <Head>
                <Title>Site Name - Blogs</Title>
                <Meta name="description" content="Blogs Listing Page" />
            </Head>

            <VeriteerSection>
                <VeriteerTitle class="text-center">
                    Find something to read...
                </VeriteerTitle>
                <VeriteerDivider class="mb-6" />
                <VeriteerGrid>
                    <div v-for="(
                        {
                            fields: {
                                title,
                                introText,
                                mainImage: {
                                    fields: {
                                        file: {
                                            url
                                        }
                                    }
                                }
                            },
                            sys: {
                                id
                            }
                        },
                        index
                        ) in blogs"
                        :key="index"
                    >
                        <NuxtLink :to="`/blog/${id}`">
                            <VeriteerCard>
                                <VeriteerCardImage>
                                    <img :src="`https:${url}`" />
                                </VeriteerCardImage>
                                <VeriteerCardBody>
                                    <VeriteerCardTitle>
                                        {{ title }}
                                    </VeriteerCardTitle>
                                    <VeriteerCardContent>
                                        {{ introText }}
                                    </VeriteerCardContent>
                                </VeriteerCardBody>
                            </VeriteerCard>
                        </NuxtLink>
                    </div>
                </VeriteerGrid>
            </VeriteerSection>
        </VeriteerContainer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: []
        }
    },
}
</script>
