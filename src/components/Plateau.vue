<template>
    <section class="bg-white bg-plateau dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
            <a href="https://depeg.etherisc.com/" class="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Depeg insurance is now live!</span>
                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-special-blue lg:text-6xl dark:text-white">Make insurance fair and accessible</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Etherisc is on a mission to disrupt the insurance industry by harnessing blockchain, empowering individuals, and sparking innovation.</p>
<!--            <div class="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Watch video
                </a>
            </div>-->
            <div class="px-4">
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 items-center justify-center mt-8 text-gray-500 sm:justify-between">
                    <a href="#" class="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <Card header="Invest" body="Provide capital for innovative, fair and accessible insurance products." cta="Investment guidelines"  />
                    </a>
                    <a href="#" class="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <Card header="Build" body="Quickly and easily build and distribute parametric insurance products." cta="Learn how"  />
                    </a>
                    <a href="#" class="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <Card header="Join" body="Become part of our thriving, decentralized insurance ecosystem." cta="Let's go"  />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import Card from "./partials/Card.vue";
export default {
    name: "Plateau",
    props: {
    },
    components: {
        Card
    }
}
</script>

<style scoped>

</style>
