<template>
	<div class="media-gallery-carousel">
		<carousel
			:per-page="perpage"
			:mouse-drag="false"
			:navigation-enabled="true"
			ref="carousel"
			:speed="carouselTransitionSpeed"
			@pageChange="pageChange"
			:navigate-to="currentPage"
			class="mt10"
			:class="{ 'boder-image': perpage === 1 }"
		>
			<slide
				v-for="(images, index) in gallery"
				:key="images.src"
				class=""
				:class="{ mr10: perpage !== 1 }"
			>
				<div
					class="product-image-container "
					:class="{ 'video-container w-100 h-100 flex relative': images.video }"
				>
					<product-image
						v-show="hideImageAtIndex !== index"
						@click="activeImage(index)"
						class="pointer image"
						:class="{
							'image-active': index === imageGoTo && perpage !== 1,
							'image-hover': perpage !== 1,
						}"
						:image="images"
						:alt="productName | htmlDecode"
					/>
					<product-video
						v-if="images.video && index === currentPage"
						v-bind="images.video"
						class="image-active"
						:index="index"
						@video-started="onVideoStarted"
					/>
				</div>
			</slide>
		</carousel>
		<!-- <i
			class="zoom-in material-icons p15 cl-bgs-tertiary pointer"
			@click="openOverlay"
			>facebook</i
		> -->
	</div>
</template>

<script>
import config from "config";
import ProductImage from "./ProductImage";
import ProductVideo from "./ProductVideo";
import reduce from "lodash-es/reduce";
import map from "lodash-es/map";

export default {
	name: "ProductGalleryCarousel",
	components: {
		Carousel: () =>
			import(/* webpackChunkName: "vue-carousel" */ "vue-carousel").then(
				(Slider) => Slider.Carousel
			),
		Slide: () =>
			import(/* webpackChunkName: "vue-carousel" */ "vue-carousel").then(
				(Slider) => Slider.Slide
			),
		ProductImage,
		ProductVideo,
	},
	props: {
		gallery: {
			type: Array,
			required: true,
		},
		productName: {
			type: String,
			default: "",
		},
		configuration: {
			type: Object,
			required: true,
		},
		perpage: {
			type: Number,
			required: true,
		},
		imageGoTo: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			carouselTransition: true,
			carouselTransitionSpeed: 0,
			currentColor: 0,
			currentPage: 0,
			hideImageAtIndex: null,
		};
	},
	watch: {
		imageGoTo: function() {
			this.$refs.carousel.goToPage(this.imageGoTo);
			console.log(this.imageGoTo);
		},
	},
	computed: {},
	beforeMount() {
		this.$bus.$on("product-after-configure", this.selectVariant);
		this.$bus.$on("product-after-load", this.selectVariant);
	},
	mounted() {
		this.selectVariant();
		if (this.configuration.color) {
			const { color } = this.configuration;
			this.currentColor = color.id;
		}
		this.$emit("loaded");
	},

	beforeDestroy() {
		this.$bus.$off("product-after-configure", this.selectVariant);
		this.$bus.$off("product-after-load", this.selectVariant);
	},
	methods: {
		borderImage() {
			return { "boder-image": this.perpage === 1 };
		},
		navigate(index) {
			if (index < 0) return;
			this.currentPage = index;
		},
		async selectVariant(configuration) {
			await this.$nextTick();
			if (config.products.gallery.mergeConfigurableChildren) {
				const option = reduce(
					map(this.configuration, "attribute_code"),
					(result, attribute) => {
						result[attribute] = this.configuration[attribute].id;
						return result;
					},
					{}
				);
				if (option) {
					let index = this.gallery.findIndex(
						(obj) =>
							obj.id &&
							Object.entries(obj.id).toString() ===
								Object.entries(option).toString(),
						option
					);
					if (index < 0)
						index = this.gallery.findIndex(
							(obj) => String(obj.id && obj.id.color) === String(option.color)
						);
					this.navigate(index);
				}
			}
			this.$emit("close");
		},
		openOverlay() {
			const currentSlide = this.$refs.carousel.currentPage;
			this.$emit("toggle", currentSlide);
		},
		switchCarouselSpeed() {
			const { color } = this.configuration;
			if (color && this.currentColor !== color.id) {
				this.currentColor = color.id;
				this.carouselTransitionSpeed = 0;
			} else {
				this.carouselTransitionSpeed = 500;
			}
		},
		pageChange() {
			this.switchCarouselSpeed();
			this.hideImageAtIndex = null;
			this.$emit("changePage", this.imageGoTo);
		},
		onVideoStarted(index) {
			this.hideImageAtIndex = index;
		},
		activeImage(index) {
			this.$emit("changeImage", index);
			this.$refs.carousel.goToPage(this.imageGoTo);
		},
		gotoImage() {
			this.$refs.carousel.goToPage(this.imageGoTo);
		},
	},
};
</script>

<style lang="scss">
@import "~theme/css/animations/transitions";
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-mine-shaft: color(mine-shaft);
$color-white: color(white);
.media-gallery-carousel {
	position: relative;
	text-align: center;
	height: 100%;
}
.zoom-in {
	position: absolute;
	bottom: 0;
	right: 0;
}
.image {
	opacity: 1;
	will-change: opacity;
	transition: 0.3s opacity $motion-main;
	&:hover {
		opacity: 0.9;
	}
}
.video-container {
	align-items: center;
	justify-content: center;
}
.boder-image {
	border: 1px solid $color-mine-shaft;
}
.image-active {
	border: 1px solid $color-mine-shaft;
}
.image-hover:hover {
	border: 1px solid $color-mine-shaft;
}
.VueCarousel-pagination {
	display: none;
}
.media-gallery-carousel,
.media-zoom-carousel {
	.VueCarousel-pagination {
		display: none;
		position: absolute;
		bottom: 15px;
		@media (max-width: 767px) {
			display: none;
		}
	}
	.VueCarousel-navigation-button {
		display: none !important;
		margin: 0;
		transform: translateY(-50%) !important;
	}
	.VueCarousel-slide {
		backface-visibility: unset;
	}

	.VueCarousel-navigation {
		opacity: 0;
		&--disabled {
			display: none;
		}
	}
	.VueCarousel-dot {
		display: none;
		padding: 8px !important;
		button {
			border: 2px solid #828282;
		}
	}
	&:hover {
		.VueCarousel-navigation {
			opacity: 0.9;
		}
		.VueCarousel-navigation-button {
			display: none;
			transition: opacity 3s;
			&:after {
				background-color: transparent;
			}
		}
	}
}
</style>
