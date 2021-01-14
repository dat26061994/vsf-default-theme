<template>
	<component
		:is="compontentType"
		:type="!link ? type : false"
		:to="redirectionLink"
		class="no-outline button-full block brdr-none w-100 px10 py20 btn-add-to-cart :bg-cl-th-secondary ripple weight-400 h4 cl-white sans-serif fs-medium"
		:class="{
			'no-underline pointer align-center border-box': link,
			disabled: disabled,
			'button-disabled': disabled,
		}"
		data-testid="subscribeSubmit"
		:disabled="disabled"
	>
		<slot>
			Button
		</slot>
	</component>
</template>

<script>
import focusClean from "theme/components/theme/directives/focusClean";
export default {
	name: "ButtonFull",
	directives: { focusClean },
	props: {
		type: {
			type: String,
			required: false,
			default: "button",
		},
		link: {
			type: Object,
			required: false,
			default: null,
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		compontentType() {
			return this.link ? "router-link" : "button";
		},
		redirectionLink() {
			return this.link ? this.localizedRoute(this.link) : null;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-btn: color(add-to-cart);
$color-btn-hover: color(add-to-cart-hover);
$color-white: color(white);
.disabled {
	background-color: gray;
}
.btn-add-to-cart {
	background-color: $color-btn;
}
.btn-add-to-cart:hover {
	background-color: $color-btn-hover !important;
}
</style>

<style lang="scss">
.button-full {
	min-width: 250px;
}
</style>
