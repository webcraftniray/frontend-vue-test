<template>
    <component :is="is" :class="is" class="text-3xl mb-5 hover:text-gray-500">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        is: {
            type: String,
            default: 'h1'
        }
    }
}
</script>