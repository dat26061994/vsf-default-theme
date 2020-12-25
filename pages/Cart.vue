<template>
    <div class="cart-page container mx-auto">
        <div class="row">
            <div class="col-xs-12">
                <Breadcrumb :breadcrumbs="breadcrumbs" />
            </div>

            <div class="col-xs-12 ">
                <h3>Cart</h3>
                <div class="row">
                    <div class="col-md-7 col-xs-12 border-right">
                        <ul v-if="productsInCart.length" class="p-3 products">
                            <product v-for="product in productsInCart" :key="product.server_item_id || product.id" :product="product" />
                        </ul>
                    </div>
                    <div class="col-md-5 col-xs-12 py-3 px-5">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'discount'">
                                <div class="col-xs">
                                    {{ segment.title }}
                                </div>
                                <div class="col-xs align-right">
                                    {{ segment.value | price(storeView) }}
                                </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'subtotal'">
                                <div class="col-xs font-weight-bold">
                                    {{ segment.title }}
                                </div>
                                <div class="col-xs font-weight-bold align-right">
                                    {{ segment.value | price(storeView) }}
                                </div>
                                <router-link to="checkout" class="btn-add-to-cart w-100 mt-3">
                                    {{ $t('Go to checkout') }}
                                </router-link>
                                <div class="mt-2">
                                    <img
                                    class="w-100"
                                    src="/assets/images/0x540@15997136702ee5c61c20.png"
                                    >
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import Breadcrumb from 'theme/components/Breadcrumb.vue'
import Product from 'theme/components/core/blocks/Microcart/Product'

export default {
    data() {
        return {
            breadcrumbs: [
                {
                name: "Home",
                link: "/",
                active: true
                },
                {
                name: "Cart",
                link: "/cart",
                active: false
                }
            ],
        }
    },
    components: {
        Breadcrumb,
        Product,
    },
    computed: {
        ...mapGetters({
            productsInCart: 'cart/getCartItems',
            appliedCoupon: 'cart/getCoupon',
            totals: 'cart/getTotals',
            isOpen: 'cart/getIsMicroCartOpen'
        }),
        storeView () {
            return currentStoreView()
        }
    },
}
</script>