<template>
    <transition name="fade">
        <div class="sticky-product" v-show="show">
            <div class="p-3 h-100 container mx-auto">
                <div class="row p-0 m-0 h-100">
                    <div class="col-md-2 col-xs-3">
                        <product-image :image="image" :width="60" />
                    </div>
                    <div class="col-md-6 col-xs-9 align-items-center">
                        <h3 class="product-name">{{ product.name }}</h3>

                        <product-price
                            v-if="product.type_id !== 'grouped'"
                            :product="product"
                        />
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <div class="row align-items-center">
                            <div class="col-md-6 d-none d-sm-block">
                                <product-quantity
                                    class="row m0 mb35"
                                    v-if="product.type_id !== 'grouped' && product.type_id !== 'bundle'"
                                    v-model="product.qty"
                                />
                            </div>

                            <div class="col-md-6 col-xs-12">
                                <add-to-cart
                                    :product="product"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
                

            </div>
        </div>
    </transition>
</template>

<script>
import ProductImage from 'theme/components/core/blocks/Product/ProductImage'
import { getThumbnailForProduct, getProductConfiguration } from '@vue-storefront/core/modules/cart/helpers'
import ProductPrice from 'theme/components/core/blocks/Product/ProductPrice.vue'
import ProductQuantity from 'theme/components/core/blocks/Product/ProductQuantity.vue'
import AddToCart from 'theme/components/core/blocks/Product/AddToCart.vue'

export default {
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    components: {
        ProductImage,
        ProductPrice,
        ProductQuantity,
        AddToCart
    },
    data() {
        return {
            show: true,
            lastScrollPosition: 0
        }
    },
    computed: {
        thumbnail () {
            return getThumbnailForProduct(this.product)
        },
        image () {
            return {
                loading: this.thumbnail,
                src: this.thumbnail
            }
        },
    },
    methods: {
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }

            if (currentScrollPosition < 800) {
                this.show = false
            }else{
                this.show = true;
            }
            
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    }
}
</script>

<style lang="scss">
    .sticky-product{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #ffffff;
        display:flex;
        align-items: center;
        background: #fff;
        box-shadow: 0 -5px 16px 0 rgba(0,0,0,0.1);
        z-index: 3;
        transition: opacity 0.25s ease-out;
        opacity: 1;
        .product-name {
            max-height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .product-image {
            position: initial !important;
            padding-bottom: 0 !important;
            img {
                width: 60px !important;
            }
        }
    }
    .hidden {
        opacity: 0; 
    }
</style>