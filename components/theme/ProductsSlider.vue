<template>
    <div class="container mx-auto">
        <h2 class="align-center cl-accent">
            Popular Products 1
        </h2>
        <no-ssr>
            <carousel v-bind:per-page-custom=[[480,2],[780,6]] pagination-active-color="#ffffff" pagination-color="#e0e0e0">
                <slide class="p-3" v-for="(product, index) in products" :key="index">
                    <ProductTile :product="product" />
                </slide>
            </carousel>
        </no-ssr>
    </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import ProductTile from 'theme/components/core/blocks/Product/ProductTile'

export default {
    props: {
        products: {
            type: Array,
            default: []
        },
        perPage: {
            type: Number,
            default: 1
        }
    },
    components: {
        'Carousel': () => import(/* webpackChunkName: "vue-carousel" */ 'vue-carousel').then(Slider => Slider.Carousel),
        'Slide': () => import(/* webpackChunkName: "vue-carousel" */ 'vue-carousel').then(Slider => Slider.Slide),
        'no-ssr': NoSSR,
        ProductTile
    },
    data () {
        return {
            currentSlide: 1,
            slides: [],
            totalSlides: 1
        }
    },
}
</script>