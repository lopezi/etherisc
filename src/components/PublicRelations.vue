<template>
    <section class="bg-white dark:bg-gray-900 partners">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">In the media</h2>
            <div class="grid grid-cols-1 gap-4 text-gray-500 lg:grid-cols-2 dark:text-gray-400">
                <CardImage
                    header="Smart insurance helps poor farmers to cut risk"
                    body="(...) with machine learning and blockchain technology, we can process these data very cheaply to produce a really simple crop insurance product ..."
                    linkTo="https://www.ft.com/content/3a8c7746-d886-11e8-aa22-36538487e3d0"
                    imgURL="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F235264da-f511-11e8-ae55-df4bf40f9d0d?fit=scale-down&source=next&width=700"
                    altImgTag="Etherisc smart insurance"
                    source="Financial Times"
                    sourceImage="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&format=svg"
                />
                <CardImage
                    header="With Blockchain Insurers Opt For 'Coopetition'"
                    body="At the Blockchain for Insurance summit in London, a gathering of major insurance players, technologists and thought leaders promoting digital transformation using blockchain, a clear pattern is emerging.  "
                    linkTo="https://www.forbes.com/sites/dantedisparte/2018/05/23/with-blockchain-insurers-opt-for-coopetition/#2075ced929a7"
                    imgURL="https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1668165074/tpksasrli1uosotnkamj"
                    altImgTag="Etherisc smart insurance"
                    source="Forbes"
                    sourceImage="https://i.forbesimg.com/48X48-F.png"
                />
                <CardImage
                    header="Blockchain can help us beat climate change"
                    body="Smart contracts allow us to design globally accessible and fully automated incentive systems that can directly reward individuals, companies and governments "
                    linkTo="https://www.weforum.org/agenda/2021/06/blockchain-can-help-us-beat-climate-change-heres-how/"
                    imgURL="https://assets.weforum.org/article/image/evNaXINByagGLXxyWOp1IOC1Uq2CyyW8R_p4ZFyappc.jpg"
                    altImgTag="Etherisc WEF"
                    source="World Economic Forum"
                    sourceImage="https://assets.weforum.org/mfe/prod/globalnav-mf-module/assets/images/logo-wef-dark.svg"
                />
            </div>
        </div>
    </section>
</template>

<script>
import CardImage from "./partials/CardImage.vue";
export default {
    name: "PublicRelations",
    props: {
    },
    components: {
        CardImage
    }
}
</script>

<style scoped>


</style>
