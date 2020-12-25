<template>
    <div class="container mx-auto carousel">
        <h2 class="align-center cl-accent">
            {{ title }}
        </h2>
        <no-ssr>
            <carousel 
            v-bind:per-page-custom=[[320,1],[780,6]] 
            :paginationEnabled="false" 
            pagination-active-color="#ffffff" 
            pagination-color="#e0e0e0"
            :navigationEnabled="true"
            :navigationNextLabel="nextLabel"
            :navigationPrevLabel="prevLabel"
            >
                <slide  class="p-3" v-for="(product, index) in products" :key="index">
                    <div class="product-carousel">
                      <ProductTile :product="product" />
                      <div class="hide">
                        <add-to-cart
                          :product="product"
                        />
                      </div>
                    </div>
                </slide>
            </carousel>
        </no-ssr>
    </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import ProductTile from 'theme/components/core/blocks/Product/ProductTile'
import AddToCart from 'theme/components/core/blocks/Product/AddToCart.vue'

export default {
    props: {
        title: {
          type: String,
          default: ''
        },
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
        ProductTile,
        AddToCart
    },
    data () {
        return {
            currentSlide: 1,
            slides: [],
            totalSlides: 1,
            indexHover: 0,
            nextLabel: '<span class="material-icons">chevron_right</span>',
            prevLabel: `<span class="material-icons">chevron_left</span>`
        }
    },
    methods: {
      mouseenter(index) {
        this.indexHover = index
      },
      mouseleave(index) {
        this.indexHover = 0
      }
    },
}
</script>

<style lang="scss">
  .carousel{
    .product-carousel{
      background: #fff;
      border: 1px solid #eee;
      box-shadow: 0 1px 0 0 rgba(20,20,20,0.04);
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 6px 10px 0 rgba(20,20,20,0.11);
      }
    }

    @media only screen and (max-width: 600px) {
      .hide {
        display: block;
      }
    }

    @media only screen and (min-width: 1199px) {
      .hide {
        display: none;
      }
      .VueCarousel-wrapper {
        overflow: hidden;
        height: 380px;
      }
    }
        
    .product-carousel:hover .hide {
      display: block;
      color: red;
    }

    .VueCarousel-wrapper {
      overflow: hidden;
    }

    .AppCarousel .VueCarousel-inner {
      display: flex;
      flex-direction: row;
      backface-visibility: hidden;
      align-items: flex-start;
    }

    .VueCarousel-navigation-button:hover{
      align-items: center;
      display: flex;
      background-color: rgba(0,0,0,.5);
      border: 0;
      border-radius: 50%;
    }

    .VueCarousel-navigation-prev{
      left: 15px !important;
    }

    .VueCarousel-navigation-next{
      right: 15px !important;
    }
  }
  
</style>