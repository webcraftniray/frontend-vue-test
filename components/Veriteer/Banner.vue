<template>
    <div
        class="h-64 object-cover overflow-hidden mb-5 shadow"
        :style="
            `
                background-image: url(${image});
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: 50%;
            `
        "
    ></div>
</template>

<script>
export default {
    props: {
        image: String
    }
}
</script>