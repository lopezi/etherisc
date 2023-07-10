<script setup>
    defineProps({
        header: String,
        body: String,
        cta: String,
    })
</script>

<template>
    <div class="text-left p-6 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-special-blue dark:text-white">{{ header }}</h5>

        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ body }}</p>
        <div href="{{ link }}" class="inline-flex items-center text-blue-600 hover:underline">
            {{ cta }}
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
    },
    components: {
    }
}
</script>

<style scoped>


</style>
