<template>
    <div>
        <NuxtLink v-for="(
                { title, slug },
                index
            ) in items"
            :key="index"
            :to="slug"
            class="text-sm hover:text-gray-500"
        >
            <i>
                {{ title }}
                <span class="mx-1" v-show="index < items.length-1">|</span>
            </i>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => {
                return [
                    {
                        title: 'Example',
                        slug: '/'
                    }
                ]
            }
        }
    }
}
</script>