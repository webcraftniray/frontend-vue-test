<template>
    <div id="viewer"></div>
</template>

<script>
export default {
    props: {
        content: String
    },
    async mounted() {
        if(!this.content) return
        /**
         * TODO: replace Toast with https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/
         */
        const Viewer = (await import('@toast-ui/editor/dist/toastui-editor-viewer')).default;
        const viewer = new Viewer({
            el: document.querySelector('#viewer'),
            initialValue: this.content
        })
    }
}
</script>

<style>
.toastui-editor-contents {
    font-size: 16px;
}
</style>
