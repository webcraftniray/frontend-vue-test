<template>
    <!-- https://tailwindcss.com/docs/container -->
    <!--
        Note that unlike containers you might have used in other frameworks,
        Tailwind’s container does not center itself automatically and does not have any built-in horizontal padding.
    -->
    <div class="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <slot />
    </div>
</template>