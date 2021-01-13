<template>
	<div class=" mx-5">
		<div class="header px-4">
			<p class="mb0 text-header text-center p-3">
				100% Happiness Guarantee Policy
			</p>
		</div>
		<div class="row m-4">
			<div class="col-md-6 col-sm-12 col-xs-12 ">
				<img
					class="image"
					src="../../../../assets/15997141604a729cc1a3.jpg"
					alt=""
				/>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12 my-auto">
				<p class="mb0 weight-400 py-3">
					Everyone guarantees the refund. However, We understands that you do
					not want your money back, you want to be satisfied, worry-free about
					the gift you planned for your loved ones. Hence, within 30 days after
					your purchase, if you feel that your order is not good for the price
					you paid, just send us an email and we will send you:
				</p>
				<ul class="list">
					<li>
						<strong>A full-refund of your purchase. No question asked.</strong>
					</li>
					<li>
						<strong
							>A 25% Coupon for your next order (if you give us another
							chance!)</strong
						>
					</li>
				</ul>
				<p class="mb0 weight-400">
					You don't even have to return your package. We will take this loss as
					our responsibility if you are not happy with your order.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "",
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-detail-header: color(detail-header);
.header {
	background-color: $color-detail-header;
}
.image {
	width: 95%;
}
.text-header {
	color: white;
	font-size: 1.7rem;
	font-weight: 500;
}
.list {
	list-style-image: url("../../../../assets/liststyletype.png");
}
</style>
