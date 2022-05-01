<template>
    <div id="viewer"></div>
</template>

<script>
export default {
    props: {
        content: String
    },
    async mounted() {
        const Viewer = (await import('@toast-ui/editor/dist/toastui-editor-viewer')).default;
        console.log(Viewer)
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