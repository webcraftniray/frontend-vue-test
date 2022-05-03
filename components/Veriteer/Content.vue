<template>
    <div id="viewer" ref="el_viewer"></div>
</template>

<script>
export default {
    props: {
        content: String
    },
    watch: {
        async content() {
            await this.toast()
        }
    },
    methods: {
        async toast() {
            if(!this.content) return

            const Viewer = (await import('@toast-ui/editor/dist/toastui-editor-viewer')).default
            const el = this.$refs.el_viewer
            const viewer = new Viewer({
                el,
                initialValue: this.content
            })
        }
    },
    async mounted() {
        await this.toast()
    }
}
</script>

<style>
.toastui-editor-contents {
    font-size: 16px;
}
</style>