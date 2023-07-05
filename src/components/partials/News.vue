<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-64 overflow-hidden rounded-lg md:h-80">
            <!-- Item 1 -->
            <div class="hidden duration-5700 ease-in-out" data-carousel-item>
                <span class="absolute text-black z-20 block w-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">News</span>
                <h2 class="text-3xl mt-12 tracking-tight absolute text-special-blue z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" >Etherisc teams up with Chainlink to deliver crop insurance in Kenya</h2>
                <img src="../../assets/background-news.svg" class="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-5700 ease-in-out" data-carousel-item>
                <span class="absolute text-black z-20 block w-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">News</span>
                <h2 class="text-3xl mt-16 tracking-tight absolute text-special-blue z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" >Etherisc Generic Insurance Framework (GIF)<br> Goes Multi-Chain</h2>
                <img src="../../assets/background-news.svg" class="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>

            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <span class="absolute text-black z-20 block w-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">News</span>
                <h2 class="text-3xl mt-12 tracking-tight absolute text-special-blue z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" >Expand Inclusive Insurance in Sri Lanka </h2>
                <img src="../../assets/background-news.svg" class="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "News",
    props: {
    },
    components: {
    }
}
</script>

<style scoped>


</style>
