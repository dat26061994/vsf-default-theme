<template>
	<div id="app">
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>
import { mapState } from "vuex";
const DefaultLayout = () =>
	import(/* webpackChunkName: "vsf-layout-default" */ "./layouts/Default");
const EmptyLayout = () =>
	import(/* webpackChunkName: "vsf-layout-empty" */ "./layouts/Empty");
const MinimalLayout = () =>
	import(/* webpackChunkName: "vsf-layout-minimal" */ "./layouts/Minimal");

export default {
	data() {
		return {
			ordersData: [],
		};
	},
	computed: {
		...mapState({
			overlayActive: (state) => state.ui.overlay,
		}),
		layout() {
			return `${this.$route.meta.layout || "default"}-layout`;
		},
	},
	components: {
		DefaultLayout,
		EmptyLayout,
		MinimalLayout,
	},
};
</script>

<style lang="scss">
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-btn: color(add-to-cart);
$color-btn-hover: color(add-to-cart-hover);
$color-white: color(white);
* {
	font-family: "Muli", sans-serif;
}
body {
	overflow-y: auto !important;
	font-family: "Muli", sans-serif;
	font-weight: 300;
	font-style: normal;
}

button {
	outline: none !important;
}
a {
	outline: none;
}
a:hover {
	border: none;
	color: #4f4f4f;
	&::after {
		height: 0px !important;
	}
}
.material-icons {
	font-family: "Material Icons" !important;
}

.modal .modal-dialog-aside {
	width: 350px;
	max-width: 80%;
	height: 100%;
	margin: 0;
	transform: translate(0);
	transition: transform 0.2s;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #f5f5f5;
}

::-webkit-scrollbar {
	width: 10px;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #e0e0e0;
}

.modal .modal-dialog-aside .modal-content {
	height: inherit;
	border: 0;
	border-radius: 0;
}
.modal .modal-dialog-aside .modal-content .modal-body {
	overflow-y: auto;
}
.modal.fixed-left .modal-dialog-aside {
	margin-left: auto;
	transform: translateX(100%);
}
.modal.fixed-right .modal-dialog-aside {
	margin-right: auto;
	transform: translateX(-100%);
}

.modal.show .modal-dialog-aside {
	transform: translateX(0);
}

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
	outline: none;
	color: $color-white;
}
</style>
