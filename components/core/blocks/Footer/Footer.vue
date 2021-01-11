<template>
	<footer
		:class="{ 'brdr-top-1 brdr-cl-secondary': isCheckoutPage }"
		class="justify-content-center m-auto"
	>
		<div
			class="footer-links justify-content-center  px-3 px-md-2 mx-md-5 bg-white"
			v-if="!isCheckoutPage"
		>
			<div class="container  footer-content px-md-2 px-5 mx-md-5">
				<div class="">
					<div class="row">
						<div class="col-md-4 col-sm-12 col-xs-12 text-left py-4 px-3">
							<div class="mb-md-4 mb-sm-3 mb-xs-4">
								<router-link to="">
									<img
										src="https://img.btdmp.com/files/10110793/2020/09/10/0x180@1599756853cfc41c6861.png"
										alt=""
									/>
								</router-link>
							</div>
							<p>
								<strong>Address:</strong> 2803 Philadelphia Pike, Suite B #252,
								Claymont, DE 19703.
							</p>
							<p><strong>Email:</strong> email@gmail.com</p>
							<p>© 2020 64Hydro | All Rights Reserved.</p>
							<div class="row">
								<a
									class="social-icon mx-2 brdr-circle no-underline"
									href="https://www.facebook.com/"
									:aria-label="$t('Go to Facebook')"
								>
									<span class="material-icons">
										facebook
									</span>
								</a>
								<a
									class="social-icon mx-2 brdr-circle no-underline"
									href="https://www.facebook.com/"
									:aria-label="$t('Go to Facebook')"
								>
									<span class="material-icons">
										facebook
									</span>
								</a>
								<a
									class="social-icon mx-2 brdr-circle no-underline"
									href="https://www.facebook.com/"
									:aria-label="$t('Go to Facebook')"
								>
									<span class="material-icons">
										facebook
									</span>
								</a>
								<a
									class="social-icon mx-2 brdr-circle no-underline"
									href="https://www.facebook.com/"
									:aria-label="$t('Go to Facebook')"
								>
									<span class="material-icons">
										facebook
									</span>
								</a>
							</div>
						</div>
						<div class="col-md-4 col-sm-12 col-xs-12 text-left py-4 px-3">
							<h3 class=" weight-500 mb-md-4 mb-sm-3 mb-xs-4">
								{{ $t("Our Company") }}
							</h3>
							<div class="mt15">
								<router-link
									class="link_footer"
									:to="localizedRoute('/customer-service')"
									exact
								>
									{{ $t("About Us") }}
								</router-link>
							</div>
							<div class="mt15">
								<router-link
									class="link_footer"
									:to="localizedRoute('/size-guide')"
									exact
								>
									{{ $t("FAQs") }}
								</router-link>
							</div>
							<div class="mt15">
								<router-link
									class="link_footer"
									:to="localizedRoute('/contact')"
									exact
								>
									{{ $t("Customer Support") }}
								</router-link>
							</div>
						</div>
						<div class="col-md-4 col-sm-12 col-xs-12 text-left py-4 px-3">
							<h3 class="weight-500 mb-md-4 mb-sm-3 mb-xs-4">
								{{ $t("Contact Us") }}
							</h3>
							<div class="mt15">
								<router-link
									class="link_footer"
									:to="getLinkFor('/about-us')"
									exact
								>
									{{ $t("Return Policy") }}
								</router-link>
							</div>
							<div class="mt15">
								<router-link
									class="link_footer"
									:to="getLinkFor('/customer-service')"
									exact
								>
									{{ $t("Shipping & Deliery") }}
								</router-link>
							</div>
							<div class="mt15">
								<router-link
									class="link_footer"
									:to="localizedRoute('/store-locator')"
									exact
								>
									{{ $t("Tracking Order") }}
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container px-md-5 px-5 mx-md-5 my-md-4">
			<div class="row middle-xs px15 bottom-links">
				<div
					class="col-md-6 col-12 d-flex justify-content-center justify-content-md-start"
				>
					<p class="mb-0 subtitle-1">© 2021 64Hydro.</p>
				</div>
				<div
					class="col-md-6 col-12 d-flex align-center justify-content-md-end justify-content-center "
				>
					<a href="" class="subtitle-2 report-link">
						DMCA Report
					</a>
					<span class="d-flex align-center justify-center pl-md-3 pl-3">
						<span class="material-icons social-icon">
							language
						</span>
						<p class="mb-0 uppercase subtitle-2">en | USD</p>
					</span>
				</div>
			</div>
			<div
				class="d-flex justify-content-md-end my-md-2 my-sm-2 my-2 justify-content-center align-items-center"
			>
				<img
					class="payment-icon"
					src="https://img.btdmp.com/files/10086953/2020/06/15/15922019838f80646e54.png"
					alt=""
				/>
				<img
					class="payment-icon"
					src="https://img.btdmp.com/files/10086953/2020/06/15/15922020076c1bb52999.png"
					alt=""
				/>
				<img
					class="payment-icon"
					src="https://img.btdmp.com/files/10086953/2020/06/15/15922019918b655acee4.png"
					alt=""
				/>
				<img
					class="payment-icon"
					src="https://img.btdmp.com/files/10086953/2020/06/15/15922020002a13189909.png"
					alt=""
				/>
			</div>
		</div>
		<back-to-top bottom="20px" right="20px" visibleoffset="200">
			<button
				type="button"
				class="btn-top button no-outline brdr-none cl-white bg-cl-mine-shaft :bg-cl-th-secondary py10 px10"
			>
				<svg
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
				>
					<path
						d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"
						fill="white"
					/>
				</svg>
			</button>
		</back-to-top>
	</footer>
</template>

<script>
import { mapGetters } from "vuex";
import {
	currentStoreView,
	localizedRoute,
} from "@vue-storefront/core/lib/multistore";
import CurrentPage from "theme/mixins/currentPage";
import LanguageSwitcher from "../../LanguageSwitcher.vue";
import Newsletter from "theme/components/core/blocks/Footer/Newsletter";
import BackToTop from "theme/components/core/BackToTop";
import { getPathForStaticPage } from "theme/helpers";
import config from "config";

export default {
	mixins: [CurrentPage],
	name: "MainFooter",
	methods: {
		goToAccount() {
			this.$bus.$emit("modal-toggle", "modal-signup");
		},
		getLinkFor(path) {
			return localizedRoute(getPathForStaticPage(path));
		},
	},
	computed: {
		...mapGetters({
			isLogged: "user/isLoggedIn",
		}),
		multistoreEnabled() {
			return config.storeViews.multistore;
		},
		getVersionInfo() {
			return `v${process.env.__APPVERSION__} ${process.env.__BUILDTIME__}`;
		},
	},
	components: {
		Newsletter,
		LanguageSwitcher,
		BackToTop,
	},
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-secondary: color(secondary);
$color-white: color(white);
$color-boder: color(silver);
$color-black: color(black);
a:hover {
	text-decoration: none;
	color: $color-black;
}
footer {
	// border-top: 1px solid $color-white;
}
.icon {
	transition: 0.3s all;
}
.tertiary {
	color: black;
	padding: 0 20px;
}
.tertiary:hover {
	text-decoration: none;
}
.social-icon {
	width: 30px;
	height: 30px;
	&:hover,
	&:focus,
	&:active {
		.icon {
			// fill: $color-secondary;
		}
	}
}
.payment-icon {
	height: 2rem;
	width: auto;
	margin: 0 0.5rem;
}
.footer-content {
	border-bottom: 1px solid $color-boder;
}
.report-link:hover {
	color: $color-black;
	text-decoration: underline;
}
.links {
	list-style-type: none;
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
}

.bottom-links {
	@media (max-width: 767px) {
		padding: 0;
	}
}
.subtitle-1 {
	font-size: 0.8rem;
}
.subtitle-2 {
	font-size: 0.9rem;
}
.footer__version-info {
	display: flex;
	color: $color-secondary;
	font-size: 0.7rem;
	@media (min-width: 768px) {
		margin-right: 1rem;
		font-size: 0.8rem;
	}
}

.underline {
	&:hover {
		color: $color-secondary;
		&:after {
			background-color: $color-white;
		}
	}
}
.legal-entity-link {
	text-align: center;
	@media (min-width: 768px) {
		display: none;
	}
}

.privacy-policy-link {
	text-align: right;
	@media (min-width: 768px) {
		display: none;
	}
}

@media (max-width: 595px) {
	.no-mobile {
		display: none;
	}

	.social {
		margin-top: 0;
	}

	.footer-links {
		padding-bottom: 30px;
	}
}
.link_footer {
	color: #000;
	&:hover {
		color: #000;
		text-decoration: underline;
		&::after {
			height: 0;
		}
	}
}
</style>
