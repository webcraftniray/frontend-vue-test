<script setup>

/*
// * API Version (not working because of endpoint)
const { params: { id } } = useRoute()
const test = await $fetch('/api/blog', { method: 'POST', body: { id } })
console.log(test)
*/

// * Working Version (cdaToken exposed to client-side)
import { getBlog } from '@/plugins/contentful.js'
const { params: { id } } = useRoute()
const { data: blog, refresh } = useAsyncData('blog', () => getBlog({ id }))
refresh()
</script>

<template>
    <div>
        <VeriteerContainer>
            <Head>
                <Title>{{ blog?.title }}</Title>
                <Meta name="description" :content="blog?.introText" />
            </Head>

            <VeriteerSection class="text-center">
                <VeriteerBreadcrumb
                    :items="[
                        {
                            title: 'Home',
                            slug: '/'
                        },
                        {
                            title: 'Blogs',
                            slug: '/blog/'
                        }
                    ]"
                />
            </VeriteerSection>

            <VeriteerSection>
                <VeriteerBanner :image="blog?.mainImage?.fields.file?.url" />
                <VeriteerTitle>
                    {{ blog?.title }}
                </VeriteerTitle>
                <VeriteerDivider />
                <VeriteerContent :content="blog?.mainText" />
            </VeriteerSection>

            <VeriteerSection class="text-center">
                <VeriteerBreadcrumb
                    :items="[
                        {
                            title: 'Home',
                            slug: '/'
                        },
                        {
                            title: 'Blogs',
                            slug: '/blog/'
                        }
                    ]"
                />
            </VeriteerSection>
        </VeriteerContainer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: '',
                mainText: '',
                mainImage: {
                    fields: {
                        file: {
                            url: ''
                        }
                    }
                }
            }
        }
    },
}
</script>