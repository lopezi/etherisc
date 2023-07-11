<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-64 overflow-hidden rounded-lg md:h-80">
            <!-- Item 1 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <div class="absolute text-white z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">News</span>
                    <h2 class="text-3xl mt-12 tracking-tight " >Etherisc teams up with Chainlink to deliver crop insurance in Kenya</h2>
                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 dark:focus:ring-yellow-900">Read article</button>
                </div>
                <img src="../../assets/news-source.jpg" class="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <div class="absolute text-white z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">News</span>
                    <h2 class="text-3xl mt-16 tracking-tight" >Etherisc Generic Insurance Framework (GIF)<br> Goes Multi-Chain</h2>
                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 dark:focus:ring-yellow-900">Read article</button>
                </div>
                <img src="https://uploads-ssl.webflow.com/6246b5e5953914c18aebfa5a/626bcd555c81c0391c88e2bf_Element%20162.svg" class="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>

            <!-- Item 3 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <div class="absolute text-white z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">News</span>
                    <h2 class="text-3xl mt-12 tracking-tigh" >Expand Inclusive Insurance in Sri Lanka </h2>
                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 dark:focus:ring-yellow-900">Read article</button>
                </div>
                <img src="../../assets/news-source-2.jpg" class="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
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
