<template>
	<div class="d-flex d-flex justify-content-center align-items-center p-2">
		<button
			class="btn-add-to-cart w-100"
			type="button"
			@click="addToCart(product)"
			:disabled="isProductDisabled"
			data-testid="addToCart"
		>
			<span v-if="!isProductDisabled" class="text-center">
				{{ $t("Add to cart") }}
			</span>
			<i v-else class="fas fa-spinner fa-pulse"></i>
		</button>
	</div>
</template>

<script>
import { formatProductMessages } from "@vue-storefront/core/filters/product-messages";
import { notifications } from "@vue-storefront/core/modules/cart/helpers";
import focusClean from "theme/components/theme/directives/focusClean";
import ButtonFull from "theme/components/theme/ButtonFull.vue";
import { mapGetters } from "vuex";

export default {
	directives: { focusClean },
	components: { ButtonFull },
	props: {
		product: {
			required: true,
			type: Object,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onAfterRemovedVariant() {
			this.$forceUpdate();
		},
		async addToCart(product) {
			try {
				const diffLog = await this.$store.dispatch("cart/addItem", {
					productToAdd: product,
				});
				diffLog.clientNotifications.forEach((notificationData) => {
					this.notifyUser(notificationData);
				});
			} catch (message) {
				this.notifyUser(
					notifications.createNotification({ type: "error", message })
				);
			}
		},
		notifyUser(notificationData) {
			this.$store.dispatch("notification/spawnNotification", notificationData, {
				root: true,
			});
		},
	},
	computed: {
		...mapGetters({
			isAddingToCart: "cart/getIsAdding",
		}),
		isProductDisabled() {
			return (
				this.disabled ||
				formatProductMessages(this.product.errors) !== "" ||
				this.isAddingToCart
			);
		},
	},
	beforeMount() {
		this.$bus.$on("product-after-removevariant", this.onAfterRemovedVariant);
	},
	beforeDestroy() {
		this.$bus.$off("product-after-removevariant");
	},
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-btn: color(add-to-cart);
$color-btn-hover: color(add-to-cart-hover);
$color-white: color(white);
.btn-add-to-cart {
	background-color: $color-btn;
	color: #fff;
	font-weight: 700;
	font-style: normal;
	text-transform: uppercase;
	letter-spacing: 0.03125em;
	-moz-appearance: none;
	-webkit-appearance: none;
	font-size: 14px;
	line-height: normal;
	letter-spacing: 0.5px;
	padding: 11px 6px;
	position: relative;
	transition: 0.3s all;
	text-decoration: none;
	outline: none;
	text-align: center;
	border-radius: 0;
	box-shadow: none;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: inherit;
	border: 1px solid transparent;
	overflow: hidden;
}

.btn-add-to-cart:hover {
	background-color: $color-btn-hover !important;
	text-decoration: none !important;
	outline: none !important;
	color: $color-white;
}
</style>
