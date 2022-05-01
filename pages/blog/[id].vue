<script setup>
import { getBlog } from '@/plugins/contentful.js'
const { params: { id } } = useRoute()
const { data: blog } = useAsyncData('blog', () => getBlog({ id }))
</script>

<template>
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
            <VeriteerBanner :image="blog.mainImage?.fields.file?.url" />
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
    }
}
</script>