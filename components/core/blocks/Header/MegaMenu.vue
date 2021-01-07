<template>
	<div class="mega-menu" @mouseleave="hideCollection">
		<div class="mx-md-5 px-md-4">
			<ul class="m-0 mx-4">
				<li
					class="d-inline-block menu-item relative p-2"
					v-for="item in menus.filter((m) => m.parent_id == 0)"
					:key="item.slug"
					@mouseenter="hideCollection"
				>
					<div class="flex align-items-center">
						<router-link class="no-underline col-xs pr-0 " :to="item.path">
							{{ item.name }}
						</router-link>
						<span
							class="material-icons"
							v-if="menus.filter((m) => m.parent_id == item.id).length > 0"
						>
							arrow_drop_down
						</span>
					</div>
					<!-- Submenu -->
					<ul class="absolute sub-menu hide">
						<li
							class="p-2"
							v-for="child in menus.filter((m) => m.parent_id == item.id)"
						>
							<router-link
								class="no-underline col-xs uppercase "
								:to="child.path"
							>
								{{ child.name }}
							</router-link>
						</li>
					</ul>
				</li>
				<li
					class="d-inline-block menu-item relative p-2"
					@mouseenter="showCollection"
				>
					<div class="flex align-items-center">
						<router-link class="no-underline col-xs pr-0" to="">
							All Collection
						</router-link>
						<span class="material-icons" v-if="isShowCollection">
							arrow_drop_up
						</span>
						<span class="material-icons" v-else>
							arrow_drop_down
						</span>
					</div>
				</li>
				<li
					class="d-inline-block menu-item relative p-2"
					@mouseenter="hideCollection"
				>
					<div class="flex align-items-center">
						<router-link class="no-underline col-xs pr-0" to="/faqs">
							FAQs
						</router-link>
					</div>
				</li>
				<li
					class="d-inline-block menu-item relative p-2"
					@mouseenter="hideCollection"
				>
					<div class="flex align-items-center">
						<router-link class="no-underline col-xs pr-0" to="/contactus">
							Countact Us
						</router-link>
					</div>
				</li>
			</ul>
		</div>
		<div class="mega-menu-dropdown" :class="showAllCollection">
			<div class="row mt-md-4 center-md mx-md-4">
				<div
					class="col-md-2 mx-md-2 text-left"
					v-for="item in collection.slice(0, 5)"
					:key="item.slug"
				>
					<p class="collection-name mb-0 mr-md-2  p-md-2 font-weight-bold">
						{{ item.name }}
					</p>
					<ul class="my-md-2 pl-md-0">
						<li
							class="my-md-1 py-md-1 px-md-2 "
							v-for="(name, index) in item.type"
							:key="index"
						>
							Name
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { getTopLevelCategories } from "theme/helpers";
import { formatCategoryLink } from "@vue-storefront/core/modules/url/helpers";
import config from "config";
import SidebarMenu from "@vue-storefront/core/compatibility/components/blocks/SidebarMenu/SidebarMenu";

export default {
	data() {
		return {
			isShowCollection: false,
			collection: [
				{
					name: "Popular collection",
					slug: "collection1",
					type: [
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
					],
				},
				{
					name: "Popular collection",
					slug: "collection2",
					type: [
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
					],
				},
				{
					name: "Popular collection",
					slug: "collection3",
					type: [
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
					],
				},
				{
					name: "Popular collection",
					slug: "collection4",
					type: [
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
					],
				},
				{
					name: "Popular collection",
					slug: "collection5",
					type: [
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
					],
				},
				{
					name: "Popular collection",
					slug: "collection6",
					type: [
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
						{
							name: "Men",
							id: 1,
							slug: "men",
							parent_id: 0,
							path: "/",
						},
					],
				},
			],
			menus: [
				{
					name: "Men",
					id: 1,
					slug: "men",
					parent_id: 0,
					path: "/",
				},
				{
					name: "Men 1",
					slug: "men-1",
					id: 10,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Men 2",
					slug: "men-2",
					id: 11,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Men 3",
					slug: "men-3",
					id: 12,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Men 14",
					slug: "men-14",
					id: 14,
					parent_id: 12,
					path: "/",
				},
				{
					name: "Men 4ffffffffffffffff",
					slug: "men-4",
					id: 13,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Gear",
					slug: "gear",
					id: 2,
					parent_id: 0,
					path: "/",
				},
			],
		};
	},
	mixins: [SidebarMenu],
	computed: {
		visibleCategories() {
			return this.categories.filter((category) => {
				return category.product_count > 0 || category.children_count > 0;
			});
		},
		showAllCollection() {
			return {
				"display-block": this.isShowCollection,
				"display-none": !this.isShowCollection,
			};
		},
	},
	methods: {
		categoryLink(category) {
			return formatCategoryLink(category);
		},
		children(item) {
			return this.menus.filter((c) => {
				console.log(c);
				return c.parent_id === item.id;
			});
		},
		showCollection() {
			this.isShowCollection = true;
		},
		hideCollection() {
			this.isShowCollection = false;
		},
	},
};
</script>

<style lang="scss">
a {
	color: #000;
}
a:hover {
	text-decoration: none;
}

.mega-menu {
	// .hide {
	//     display: none;
	// }
	position: relative;
	.menu-item:hover {
		a:hover {
			color: #7f92c9;
		}
		.sub-menu {
			opacity: 1;
			transform: translate3d(0, 0, 0) scaleY(1);
			pointer-events: all;
			a {
				color: #000;
			}
		}
	}

	.sub-menu:hover .sub-menu {
		opacity: 1;
		transform: translate3d(0, 0, 0) scaleY(1);
		pointer-events: all;
	}
	.sub-menu {
		left: 0;
		position: absolute;
		background-color: #fff;
		padding: 12px 0;
		margin-left: 0;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		transition: 0.2s all ease;
		transform: translate3d(0, 0, 0) scaleY(0.9);
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		transform-origin: top center;
		top: 100%;
		z-index: 1001;
		pointer-events: none;
		white-space: nowrap;
		list-style: none;
		opacity: 0;
		li {
			vertical-align: middle;
			margin: 0;
		}
		span {
			cursor: pointer;
		}
		li:hover {
			background-color: #f5f5f5;
		}
	}
	.mega-menu-dropdown {
		overflow: hidden;
		border-top: 1px solid rgb(201, 201, 201);
		width: 100%;
		top: 2.5em;
		background-color: white;
		transition: all 0.5s;
		.collection-name {
			border-bottom: 1px solid #ccc;
		}
		ul {
			list-style-type: none;
		}
		li:hover {
			background-color: #f5f5f5;
		}
	}
	.display-none {
		height: 0vh;
		opacity: 0;
	}
	.display-block {
		height: 100vh;
		opacity: 1;
	}
}
</style>
