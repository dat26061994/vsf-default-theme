<template>
	<section class="head-image  cl-black">
		<!-- <div class="container w-100 h-10 cl-black text-white text-center" v-if="currentImage"> -->
		<div class="w-100">
			<div
				class="relative d-flex align-items-center justify-center head-image__image"
			>
				<img :src="currentImage.image" alt="ImagePrimary" />
			</div>
			<div
				class="head-image-content d-flex justify-content-start align-items-center"
			>
				<h1 class="title uppercase mt-4" data-testid="mainSliderTitle">
					{{ currentImage.title }}
				</h1>
				<p class="subtitle mb0 serif h2 my-3" data-testid="mainSliderSubtitle">
					{{ currentImage.subtitle }}
				</p>
				<div
					class="mt-3 mb-3 d-flex justify-content-center align-items-center mx-auto"
				>
					<router-link class="btn-add-to-cart-home" to="">
						Shop now
					</router-link>
				</div>
			</div>
		</div>
		<!-- </div> -->
	</section>
</template>

<script>
// import ButtonOutline from 'theme/components/theme/ButtonOutline'
import { mapGetters } from "vuex";

export default {
	components: {
		// ButtonOutline
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			currentImage: "promoted/getHeadImage",
		}),
	},
};
</script>

<style lang="scss" scoped>
.head-image {
	img {
		width: 100%;
		transition: all 1s;
		object-fit: cover;
	}
	img:hover {
		transform: scale(1.1);
		object-fit: cover;
	}
	.head-image__image {
		overflow: hidden;
	}
	.head-image-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.title {
			margin-bottom: 0;
			display: block ruby;
		}
		.btn-add-to-cart-home {
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
		}
		.btn-add-to-cart-home::after {
			height: 0px;
		}
	}
	@media only screen and (min-width: 1080px) {
		position: relative;
		.head-image-content {
			position: absolute;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -60%);
			color: white;
			.title {
				font-weight: 800;
				font-size: 4rem;
				font-family: "Muli", sans-serif;
				letter-spacing: 0.5rem;
				word-spacing: 1rem;
			}
			.subtitle {
				font-size: 1rem;
				font-family: "Muli", sans-serif;
				line-height: 1.2rem;
				max-width: 35em;
			}
			.btn-add-to-cart-home {
				background-color: #5cbbf2;
				&:hover {
					background-color: #2ea5eb;
					&::after {
						height: 0px;
					}
				}
			}
		}
	}
	@media (min-width: 300px) {
		display: inherit;
		.title {
			font-weight: 800;
			font-size: 1.3rem;
			font-family: "Muli", sans-serif;
			letter-spacing: 0.2rem;
			word-spacing: 0.3rem;
			text-align: center;
		}
		.subtitle {
			font-size: 0.95rem;
			font-family: "Muli", sans-serif;
			line-height: 1.2rem;
			text-align: center;
			max-width: 30em;
		}
		.btn-add-to-cart-home {
			background-color: #f29e0d;
			&:hover {
				background-color: #d68b09;
				&::after {
					height: 0px;
				}
			}
		}
	}
}
// @media (max-width: 75em) {
//   .head-image {
//     height: 400px;
//   }
//   .title {
//     font-size: 50px;
//   }
//   .subtitle {
//     font-size: 20px;
//   }
//   .row {
//     height: 400px;
//   }
// }
// @media (max-width: 64em) {
//   .head-image {
//     height: 359px;
//   }
//   .container {
//     background-position: left;
//   }
//   .title {
//     font-size: 48px;
//   }
//   .subtitle {
//     font-size: 18px;
//   }
//   .button {
//     font-size: 16px;
//   }
//   .row {
//     height: 359px;
//   }
// }
</style>
