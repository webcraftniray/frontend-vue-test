<script setup>
/**
 * TODO: Implement GraphQL with Contentful requests
 * * In SSR, Nuxt can only load server-side once so routing only works with /server/api. https://v3.nuxtjs.org/guide/features/server-routes/
 */

/*
// * API Version (not working because of endpoint)
const test = await $fetch('/api/blogs')
console.log(test)
*/

// * Working Version (without route changes)
import { getBlogs } from '@/plugins/contentful.js'
const { data: blogs } = useAsyncData('blogs', () => getBlogs())
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