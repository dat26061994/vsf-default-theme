<template>
	<div>
		<p>Showing our favorite reviews</p>
		<div class="row flex-md-wrap">
			<div
				class="col-md-3 col-sm-6 col-xs-12 flex-md-wrap"
				v-for="review in reviews"
				:key="review.id"
			>
				<product-review-content-item :review="review" />
			</div>
		</div>
	</div>
</template>

<script>
import ProductReviewContentItem from "./ProductReviewContentItem";

export default {
	components: { ProductReviewContentItem },
	name: "ProductReviewContent",
	data() {
		return {
			reviews: [
				{
					id: "1",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "2",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "3",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "4",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "5",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "6",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "7",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "8",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "9",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "10",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "11",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
				{
					id: "12",
					date: "September 4",
					user: "Sarah Hernandez",
					comment:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nullodit beatae. Excepturi ad necessitatibus cumque voluptas officiis pariatur esse ducimus libero exercitationem nostrum inventore corrupti,quos enim repudiandae aspernatur",
					reply:
						"Thank you so much for your great review. We are so glad that you love the bottle. Hope you enjoy using it everyday to stay healthy and hydrated. Thanks again for choosing and trusting us!",
				},
			],
		};
	},
};
</script>

<style lang="scss"></style>
