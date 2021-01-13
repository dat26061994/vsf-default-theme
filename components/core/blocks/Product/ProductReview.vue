<template>
	<div class="px-4 mx-5">
		<product-review-header />
		<product-review-content />
	</div>
</template>

<script>
import ProductReviewHeader from "./ProductReviewHeader";
import ProductReviewContent from "./ProductReviewContent";
export default {
	name: "ProductReview",
	components: {
		ProductReviewHeader,
		ProductReviewContent,
	},
};
</script>

<style></style>
