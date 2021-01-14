<template>
	<div class="py-4">
		<div class="row w-100">
			<div class="col-md-6 text-right">
				<h3 class="cl-accent">Excellent</h3>
			</div>
			<div class="col-md-6 text-left">
				<i class="material-icons rate-icon">start_border</i>
				<i class="material-icons rate-icon">start_border</i>
				<i class="material-icons rate-icon">start_border</i>
				<i class="material-icons rate-icon">start_border</i>
				<i class="material-icons rate-icon">start_border</i>
			</div>
		</div>

		<div class="text-center my-md-3">
			<span class="weight-400 ">
				Rated <strong>4.3</strong> / 5 based on
				<strong>10,991 reviews</strong> on Trustpiot
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductReviewHeader",
};
</script>

<style lang="scss">
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-rate-icon: color(rate-icon);
.rate-icon {
	width: 25px;
	height: 25px;
	background-color: $color-rate-icon;
	// color: transparent;
	color: white;
}
</style>
