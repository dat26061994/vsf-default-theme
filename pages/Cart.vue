<template>
	<div class="cart-page container mx-auto">
		<div class="row mx-md-5 mx-lg-5 mx-xl-5">
			<div class="col-xs-12">
				<breadcrumbs :with-homepage="true" :routes="[]" active-route="Cart" />
			</div>

			<div class="col-xs-12 ">
				<h3>Cart</h3>
				<div class="mb-4 mt-2">
					<p class="text-center">
						Congrats! You are eligible for FREE Priority Shipping
					</p>
				</div>
				<div class="row">
					<div class="col-md-8 list-product-cart col-xs-12 border-right">
						<ul v-if="productsInCart.length" class="p-3 products">
							<product
								v-for="product in productsInCart"
								:key="product.server_item_id || product.id"
								:product="product"
							/>
						</ul>
					</div>
					<div class="col-md-4 col-xs-12 pb-3 px-4">
						<div class="row">
							<div class="col-md-12">
								<div
									class="row"
									v-for="(segment, index) in totals"
									:key="index"
									v-if="segment.code === 'discount'"
								>
									<span class="material-icons">
										local_offer
									</span>
									<div class="col-xs">
										{{ segment.title }}
									</div>
									<div class="col-xs align-right">
										{{ segment.value | price(storeView) }}
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div
									class="row "
									v-for="(segment, index) in totals"
									:key="index"
									v-if="segment.code === 'subtotal'"
								>
									<div class="col-xs font-weight-bold mb-2">
										{{ segment.title }}
									</div>
									<div class="col-xs font-weight-bold align-right">
										{{ segment.value | price(storeView) }}
									</div>
									<router-link to="checkout" class="btn-add-to-cart w-100 mt-3">
										{{ $t("Go to checkout") }}
									</router-link>
									<div class="mt-2">
										<img
											class="w-100"
											src="/assets/images/0x540@15997136702ee5c61c20.png"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<slider
			title="Cart recommendations"
			:perPage="6"
			:products="getEverythingNewCollection"
		/>
		<slider
			title="More from Make up"
			:perPage="6"
			:products="getEverythingNewCollection"
		/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { currentStoreView } from "@vue-storefront/core/lib/multistore";
import Breadcrumbs from "theme/components/core/Breadcrumbs.vue";
import Product from "theme/components/core/blocks/Microcart/Product";
import Slider from "theme/components/core/blocks/Product/Slider";

export default {
	data() {
		return {
			breadcrumbs: [
				{
					name: "Home",
					link: "/",
					active: true,
				},
				{
					name: "Cart",
					link: "/cart",
					active: false,
				},
			],
		};
	},
	components: {
		Breadcrumbs,
		Product,
		Slider,
	},
	computed: {
		...mapGetters({
			productsInCart: "cart/getCartItems",
			appliedCoupon: "cart/getCoupon",
			totals: "cart/getTotals",
			isOpen: "cart/getIsMicroCartOpen",
		}),
		...mapGetters("homepage", ["getEverythingNewCollection"]),
		storeView() {
			return currentStoreView();
		},
	},
};
</script>
<style lang="scss">
.list-product-cart {
	max-height: 700px;
	overflow: scroll;
}
</style>
