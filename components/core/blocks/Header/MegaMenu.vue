<template>
	<div class="mega-menu mb-2 mx-4">
		<ul class="m-0">
			<li
				class="d-inline-block menu-item relative p-2"
				v-for="item in menus.filter((m) => m.parent_id == 0)"
				:key="item.slug"
			>
				<div class="flex align-items-center">
					<router-link
						class="cl-accent no-underline col-xs pr-0 font-weight-light"
						:to="item.path"
					>
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
						<router-link class="cl-accent no-underline col-xs" :to="item.path">
							{{ child.name }}
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
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
					name: "Men 4",
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
	},
};
</script>

<style lang="scss">
.mega-menu {
	// .hide {
	//     display: none;
	// }
	.menu-item:hover .sub-menu {
		opacity: 1;
		transform: translate3d(0, 0, 0) scaleY(1);
		pointer-events: all;
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
			// white-space: normal;
		}
		span {
			cursor: pointer;
		}
	}
}
</style>
