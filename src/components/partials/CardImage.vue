<script setup>
    defineProps({
        header: String,
        body: String,
        linkTo: String,
        imgURL: String,
        altImgTag: String,
        source: String,
        sourceImage: String
    })
</script>

<template>
    <a :href="linkTo" target="_blank" class="flex flex-col items-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="imgURL" :alt="altImgTag">
        <div class="flex flex-col text-left justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ header }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ body }}</p>
            <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" :src="sourceImage"  alt="Etherisc on the media">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                        {{ source }}
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: "CardImage",
    props: {
    },
    components: {
    }
}
</script>

<style scoped>


</style>
