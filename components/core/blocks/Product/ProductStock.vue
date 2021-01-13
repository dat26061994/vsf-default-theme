<template>
	<div class="my20 mx10">
		<div class="row px-2">
			<i class="material-icons icon-stock">local_fire_departmenth</i>
			<span class="text-stock weight-700">
				3 items left in stock
			</span>
		</div>
		<div class="py10"><p class="progess"></p></div>
	</div>
</template>

<script>
export default {
	name: "ProductStock",
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-burnt-sienna: color(burnt-sienna);
$color-burnt-sienna-light: color(burnt-sienna-light);
$color-white: color(white);
.icon-stock {
	color: $color-burnt-sienna;
	font-size: 1.3rem;
}
.text-stock {
	background-image: linear-gradient(
		to right,
		$color-burnt-sienna,
		$color-burnt-sienna-light 90%
	);
	color: transparent;
	-webkit-background-clip: text;
}
.progess {
	height: 8px;
	width: 100%;
	background-image: linear-gradient(
		to right,
		$color-burnt-sienna 1px,
		$color-white
	);
	border-radius: 5px;
}
</style>
