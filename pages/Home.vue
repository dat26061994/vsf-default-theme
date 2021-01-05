<template>
	<div id="home">
		<head-image />
		<feature-content />
		<features-image-content positionImage="left">
			<template slot="image">
				<div class="w-100 p-md-4 p-xs-2">
					<div
						class="relative d-flex align-items-center justify-center features-image"
					>
						<img
							class=""
							src="https://img.btdmp.com/files/10110793/2020/09/10/0x720@1599727788a159ee8f37.jpeg"
							alt=""
						/>
					</div>
				</div>
			</template>
			<template slot="content">
				<div class="p-md-3 mx-xs-5 mx-sm-5 px-5">
					<h4 class="font-weight-bold h3 my-4">
						Water Tracker Bottle with Inspired Designs
					</h4>
					<p class="my-3">
						Stay hydrated and elegant with 64Hydro's awesome reusable water
						bottles. We are inspired by contemporary art and always find the
						best way to combine styles for unique designs. Whether you prefer
						steel or plastic, a stunning look or a funny quote, you're sure to
						find water bottles for your healthy life!
					</p>
					<router-link class="btn-features-image-content mt-3" to="">
						VIEW COLLECTION
					</router-link>
				</div>
			</template>
		</features-image-content>
		<features-image-content positionImage="right">
			<template slot="image">
				<div class="w-100 p-4">
					<div
						class="relative d-flex align-items-center justify-center features-image"
					>
						<img
							class=""
							src="https://img.btdmp.com/files/10110793/2020/09/10/0x720@1599727788a159ee8f37.jpeg"
							alt=""
						/>
					</div>
				</div>
			</template>
			<template slot="content">
				<div class="p-md-3 mx-xs-5 mx-sm-5 px-5">
					<h4 class="font-weight-bold h3 my-4">
						Water Tracker Bottle with Inspired Designs
					</h4>
					<p class="my-3">
						Stay hydrated and elegant with 64Hydro's awesome reusable water
						bottles. We are inspired by contemporary art and always find the
						best way to combine styles for unique designs. Whether you prefer
						steel or plastic, a stunning look or a funny quote, you're sure to
						find water bottles for your healthy life!
					</p>
					<router-link class="btn-features-image-content mt-3" to="">
						VIEW COLLECTION
					</router-link>
				</div>
			</template>
		</features-image-content>
		<features-image-content positionImage="left">
			<template slot="image">
				<div class="w-100 p-4">
					<div
						class="relative d-flex align-items-center justify-center features-image"
					>
						<img
							class=""
							src="https://img.btdmp.com/files/10110793/2020/09/10/0x720@1599727788a159ee8f37.jpeg"
							alt=""
						/>
					</div>
				</div>
			</template>
			<template slot="content">
				<div class="p-md-3 mx-xs-5 mx-sm-5 px-5">
					<h4 class="font-weight-bold h3 my-4">
						Water Tracker Bottle with Inspired Designs
					</h4>
					<p class="my-3">
						Stay hydrated and elegant with 64Hydro's awesome reusable water
						bottles. We are inspired by contemporary art and always find the
						best way to combine styles for unique designs. Whether you prefer
						steel or plastic, a stunning look or a funny quote, you're sure to
						find water bottles for your healthy life!
					</p>
					<router-link class="btn-features-image-content mt-3" to="">
						VIEW COLLECTION
					</router-link>
				</div>
			</template>
		</features-image-content>
		<slider
			title="Popular Products"
			:perPage="6"
			:products="getEverythingNewCollection"
		/>
		<slider
			title="Recently Viewed & Featured Products"
			:perPage="6"
			:products="getEverythingNewCollection"
		/>
		<!-- <section v-if="isOnline" class="container pb60 px15">
			<div class="row center-xs">
				<header
					class="col-md-12"
					:class="{
						pt40:
							getEverythingNewCollection && getEverythingNewCollection.length,
					}"
				>
					<h2 class="align-center cl-accent">
						{{ $t("Get inspired") }}
					</h2>
				</header>
			</div>
			<tile-links />
		</section> -->
		<Onboard />
	</div>
</template>

<script>
// query constructor
import { isServer, onlineHelper } from "@vue-storefront/core/helpers";
import LazyHydrate from "vue-lazy-hydration";

// Theme core components
import ProductListing from "theme/components/core/blocks/Product/ProductListing";
import HeadImage from "theme/components/core/blocks/MainSlider/HeadImage";
import ProductsSlider from "theme/components/theme/ProductsSlider";
// Theme local components
import Onboard from "theme/components/theme/blocks/Home/Onboard";
import FeatureContent from "theme/components/theme/blocks/Home/FeatureContent";
import FeaturesImageContent from "theme/components/theme/blocks/Home/FeaturesImageContent";
import PromotedOffers from "theme/components/theme/blocks/PromotedOffers/PromotedOffers";
import TileLinks from "theme/components/theme/blocks/TileLinks/TileLinks";
import { Logger } from "@vue-storefront/core/lib/logger";
import { mapGetters } from "vuex";
import config from "config";
import { registerModule } from "@vue-storefront/core/lib/modules";
import { RecentlyViewedModule } from "@vue-storefront/core/modules/recently-viewed";
import Slider from "theme/components/core/blocks/Product/Slider";

export default {
	data() {
		return {
			loading: true,
		};
	},
	components: {
		HeadImage,
		Onboard,
		ProductListing,
		PromotedOffers,
		TileLinks,
		LazyHydrate,
		FeatureContent,
		FeaturesImageContent,
		ProductsSlider,
		Slider,
	},
	computed: {
		...mapGetters("user", ["isLoggedIn"]),
		...mapGetters("homepage", ["getEverythingNewCollection"]),
		categories() {
			return this.getCategories;
		},
		isOnline() {
			return onlineHelper.isOnline;
		},
		isLazyHydrateEnabled() {
			return config.ssr.lazyHydrateFor.some((field) =>
				["homepage", "homepage.new_collection"].includes(field)
			);
		},
	},
	beforeCreate() {
		registerModule(RecentlyViewedModule);
	},
	async beforeMount() {
		if (this.$store.state.__DEMO_MODE__) {
			const onboardingClaim = await this.$store.dispatch("claims/check", {
				claimCode: "onboardingAccepted",
			});
			if (!onboardingClaim) {
				// show onboarding info
				this.$bus.$emit("modal-toggle", "modal-onboard");
				this.$store.dispatch("claims/set", {
					claimCode: "onboardingAccepted",
					value: true,
				});
			}
		}
	},
	mounted() {
		if (!this.isLoggedIn && localStorage.getItem("redirect"))
			this.$bus.$emit("modal-show", "modal-signup");
	},
	watch: {
		isLoggedIn() {
			const redirectObj = localStorage.getItem("redirect");
			if (redirectObj) this.$router.push(redirectObj);
			localStorage.removeItem("redirect");
		},
	},
	async asyncData({ store, route, context }) {
		// this is for SSR purposes to prefetch data
		if (context) context.output.cacheTags.add(`home`);
		Logger.info("Calling asyncData in Home Page (core)")();

		await Promise.all([
			store.dispatch("homepage/fetchNewCollection"),
			store.dispatch("promoted/updateHeadImage"),
			store.dispatch("promoted/updatePromotedOffers"),
		]);
	},
	beforeRouteEnter(to, from, next) {
		if (!isServer && !from.name) {
			// Loading products to cache on SSR render
			next((vm) =>
				vm.$store.dispatch("homepage/fetchNewCollection").then((res) => {
					vm.loading = false;
				})
			);
		} else {
			next();
		}
	},
	metaInfo() {
		return {
			title: this.$route.meta.title || this.$i18n.t("Home Page"),
			meta: this.$route.meta.description
				? [
						{
							vmid: "description",
							name: "description",
							content: this.$route.meta.description,
						},
				  ]
				: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.new-collection {
	@media (max-width: 767px) {
		padding-top: 0;
	}
}
.btn-features-image-content {
	background-color: #0d9ef2;
	color: #fff;
	transition: opacity 0.3s ease;
	font-weight: 700;
	font-style: normal;
	text-transform: uppercase;
	letter-spacing: 0.03125em;
	-moz-appearance: none;
	-webkit-appearance: none;
	font-size: 14px;
	line-height: normal;
	letter-spacing: 0.5px;
	padding: 11px 22px;
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
	&:hover {
		background-color: #068fdf;
		&::after {
			height: 0px;
		}
	}
}
.features-image {
	overflow: hidden;
}
.features-image img {
	width: 100%;
	transition: all 1s;
	object-fit: cover;
}
.features-image img:hover {
	transform: scale(1.1);
	object-fit: cover;
}
</style>
