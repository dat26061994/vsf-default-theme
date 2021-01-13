<template>
	<div class="media-gallery">
		<div v-if="isOnline" class="relative w-100">
			<product-gallery-overlay
				v-if="isZoomOpen"
				:current-slide="currentSlide"
				:product-name="product.name"
				:gallery="gallery"
				@close="toggleZoom"
			/>
			<no-ssr>
				<product-gallery-carousel
					v-if="showProductGalleryCarousel"
					:gallery="gallery"
					:perpage="1"
					:imageGoTo="imageGoTo"
					:configuration="configuration"
					:product-name="product.name"
					@toggle="openOverlay"
					@close="onEscapePress"
					@loaded="carouselLoaded = true"
				/>
			</no-ssr>
			<no-ssr>
				<product-gallery-carousel
					v-if="showProductGalleryCarousel"
					:gallery="gallery"
					:perpage="5"
					:imageGoTo="imageGoTo"
					:configuration="configuration"
					:product-name="product.name"
					@changeImage="changeImage"
					@toggle="openOverlay"
					@close="onEscapePress"
					@loaded="carouselLoaded = true"
				/>
			</no-ssr>
		</div>
		<product-image v-else :image="offline" />
	</div>
</template>

<script>
import { ProductGallery } from "@vue-storefront/core/modules/catalog/components/ProductGallery.ts";
import ProductGalleryOverlay from "./ProductGalleryOverlay";
import onEscapePress from "@vue-storefront/core/mixins/onEscapePress";
import NoSSR from "vue-no-ssr";
import ProductImage from "./ProductImage";
import { onlineHelper } from "@vue-storefront/core/helpers";
import ProductGalleryCarousel from "./ProductGalleryCarousel.vue";
import Product from "../../../../pages/Product.vue";

export default {
	components: {
		ProductGalleryCarousel,
		"no-ssr": NoSSR,
		ProductGalleryOverlay,
		ProductImage,
		Product,
	},
	mixins: [ProductGallery, onEscapePress],
	watch: {
		$route: "validateRoute",
	},
	props: {
		gallery: {
			type: Array,
			default: null,
		},
	},
	data() {
		return {
			isZoomOpen: false,
			showProductGalleryCarousel: false,
			currentSlide: 0,
			carouselLoaded: false,
			imageCurrent: null,
			imageGoTo: 0,
		};
	},
	mounted() {
		this.showProductGalleryCarousel = true;
		this.imageCurrent = this.gallery[1];
		console.log(this.imageCurrent);
	},
	computed: {
		isOnline(value) {
			return onlineHelper.isOnline;
		},
	},
	methods: {
		openOverlay(currentSlide) {
			this.currentSlide = currentSlide;
			this.toggleZoom();
		},
		validateRoute() {
			this.$forceUpdate();
		},
		toggleZoom() {
			this.isZoomOpen = !this.isZoomOpen;
		},
		onEscapePress() {
			if (this.isZoomOpen) {
				this.toggleZoom();
			}
		},
		changeImage(index) {
			this.imageGoTo = index;
		},
	},
};
</script>

<style lang="scss" scoped>
.media-gallery {
	text-align: center;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	min-height: calc(90vw * 1.1);

	@media only screen and (min-width: 768px) {
		min-height: inherit;
	}

	&--loaded {
		background-image: none;
	}
}
</style>
