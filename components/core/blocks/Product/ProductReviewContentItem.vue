<template>
	<div class="text-center review-content px-3 bg-review">
		<div class="row w-100">
			<div class="col-md-7 text-left">
				<i class="material-icons rate-icon-item">start_border</i>
				<i class="material-icons rate-icon-item">start_border</i>
				<i class="material-icons rate-icon-item">start_border</i>
				<i class="material-icons rate-icon-item">start_border</i>
				<i class="material-icons rate-icon-item">start_border</i>
			</div>
			<div class="col-md-5 p0 text-right">
				<p class="cl-accent text p0 weight-400">{{ review.date }}</p>
			</div>
		</div>
		<div>
			<p class="text-left cl-accent">
				<strong>{{ review.user }}</strong>
			</p>
		</div>
		<div>
			<p class="text-left header-reply">
				<strong>Found this bottle on instagram</strong>
			</p>
		</div>
		<div
			class="review-comment"
			:class="{ 'show-all': review.id !== showReview }"
		>
			<span class="weight-400">{{ review.comment }}</span>
		</div>
		<div class="px-2 my-4 py-3 reply">
			<div>
				<i class="material-icons reply-icon">reply</i>
				<p class="m0 py-1 weight-400">Reply from 64Hydro</p>
			</div>
			<p class="m0 py-2 weight-400">September 4</p>
			<p class="m0  weight-400" :class="{ 'd-none': review.id !== showReview }">
				{{ review.reply }}
			</p>
		</div>
		<div>
			<p
				class="m0 p-1 read-more weight-600"
				@click="activeReview(review.id)"
				:class="{ 'd-none': review.id === showReview }"
			>
				Read more
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductReviewContentItem",
	props: {
		review: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			showReview: null,
		};
	},
	methods: {
		activeReview(id) {
			this.showReview = id;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-rate-icon: color(rate-icon);
$color-gray: color(gray);
.bg-review {
	background-color: #f8f9fa;
	border-radius: 2px;
	box-shadow: 0 1px 0 0 rgba(182, 196, 210, 0.4);
	line-height: 18px;
	margin: 0 0 16px;
	overflow: hidden;
	padding: 16px;
	position: relative;
	word-wrap: break-word;
}
.rate-icon-item {
	width: 18px;
	height: 18px;
	background-color: $color-rate-icon;
	color: white;
	font-size: 18px;
}
.reply-icon {
	width: 18px;
	height: 18px;
	color: $color-rate-icon;
	font-size: 19px;
	position: absolute;
	top: 1.2rem;
	left: 1rem;
}
.text {
	font-size: 14px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.cl-accent {
	color: $color-gray;
}
.review-content {
	font-size: 14px;
}
.header-reply {
	color: black;
}
.review-comment {
	color: #191919;
	position: relative;
}
.show-all {
	max-height: 85px;
	overflow: hidden;
}
.reply {
	position: relative;
	border-left: 3px solid $color-rate-icon;
	border-radius: 3px;
	background-color: white;
}
.read-more {
	color: $color-rate-icon;
}
.read-more:hover {
	cursor: pointer;
}
</style>
