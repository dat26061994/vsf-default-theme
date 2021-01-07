<template>
	<div class="sidebar-menu fixed mw-100 ">
		<div class="row sidebar-menu-header">
			<div v-if="submenu.depth" class="col-xs ">
				<sub-btn type="back" class="" />
			</div>
			<div class="col-xs ">
				<button
					type="button"
					:aria-label="$t('Close')"
					class="w-100 inline-flex end-xs bg-cl-transparent brdr-none p0 close-btn"
					@click="closeMenu"
				>
					<i class="material-icons p15">close</i>
				</button>
			</div>
		</div>
		<div class="sidebar-menu__container row" ref="container">
			<div class="col-xs-12 h4 serif">
				<div class="p0 m0 relative sidebar-menu__list" :style="mainListStyles">
					<div
						v-for="item in menus.filter((m) => m.parent_id == 0)"
						:key="item.slug"
						class=""
					>
						<div v-if="isCurrentMenuShowed" class="subcategory-item row px-4">
							<div @click="closeMenu" class="py10 col-xs col-11 row">
								<router-link
									class="px15 cl-accent no-underline col-12"
									:to="item.path"
								>
									{{ item.name }}
								</router-link>
							</div>

							<div
								class="py10 col-1"
								v-if="menus.filter((m) => m.parent_id == item.id).length > 0"
							>
								<p
									class="material-icons p-1 micro-menu-btn mb-0"
									v-if="isActiveSubMenu === null || isActiveSubMenu != item.id"
									@click="showSubMenu(item.id)"
								>
									add
								</p>
								<p
									class="material-icons p-1 micro-menu-btn mb-0"
									v-if="isActiveSubMenu === item.id"
									@click="hideSubMenu"
								>
									remove
								</p>
							</div>
						</div>
						<div>
							<ul
								class="ml-5 micro-sub-menu mb-2"
								:class="[
									item.id === isActiveSubMenu ? 'show-menu' : 'hide-menu',
								]"
							>
								<li
									v-for="child in menus.filter(
										(m) => m.parent_id == isActiveSubMenu
									)"
									@click="closeMenu"
								>
									<router-link
										class="no-underline col-xs uppercase "
										:to="child.path"
									>
										{{ child.name }}
									</router-link>
								</li>
							</ul>
						</div>
					</div>

					<!-- <li
            v-if="isCurrentMenuShowed"
            @click="closeMenu"
            class="bg-cl-secondary"
          >
            <router-link
              class="block px25 py20 brdr-bottom-1 brdr-cl-secondary cl-accent no-underline fs-medium-small"
              :to="localizedRoute('/sale')"
              exact
            >
              {{ $t('Sale') }}
            </router-link>
          </li>
          <li
            v-if="isCurrentMenuShowed"
            @click="closeMenu"
            class="bg-cl-secondary"
          >
            <router-link
              class="block px25 py20 brdr-bottom-1 brdr-cl-secondary cl-accent no-underline fs-medium-small"
              :to="localizedRoute('/magazine')"
              exact
            >
              {{ $t('Magazine') }}
            </router-link>
          </li>
          <li
            v-if="compareIsActive && isCurrentMenuShowed"
            @click="closeMenu"
            class="bg-cl-secondary"
          >
            <router-link
              class="block px25 py20 brdr-bottom-1 brdr-cl-secondary cl-accent no-underline fs-medium-small"
              :to="localizedRoute('/compare')"
              exact
            >
              {{ $t('Compare products') }}
            </router-link>
          </li>
          <li
            @click="login"
            class="brdr-bottom-1 brdr-cl-secondary bg-cl-secondary flex"
          >
            <sub-btn
              v-if="currentUser"
              id="my-account-links"
              :is-category="false"
              :name="$t('My account')"
              class="bg-cl-transparent brdr-none fs-medium-small"
            />
            <sub-category
              v-if="currentUser"
              :my-account-links="myAccountLinks"
              id="my-account-links"
              @click.native="closeMenu"
            />
            <a
              v-if="!currentUser && isCurrentMenuShowed"
              href="#"
              @click.prevent="closeMenu"
              class="block w-100 px25 py20 cl-accent no-underline fs-medium-small"
            >
              {{ $t('My account') }}
            </a>
          </li> -->

					<div class="">
						<div v-if="isCurrentMenuShowed" class="subcategory-item row px-4">
							<div @click="closeMenu" class="py10 col-xs col-11 row">
								<router-link
									class="px15 cl-accent no-underline col-12"
									to="item.path"
								>
									All Collection
								</router-link>
							</div>

							<div class="py10 col-1">
								<p
									class="material-icons p-1 micro-menu-btn mb-0"
									v-if="!isActiveCollection"
									@click="showCollection"
								>
									add
								</p>
								<p
									class="material-icons p-1 micro-menu-btn mb-0"
									v-if="isActiveCollection"
									@click="hideCollection"
								>
									remove
								</p>
							</div>
						</div>
						<div
							class="px-4"
							:class="{ 'd-none': !isActiveCollection }"
							v-for="item in collection.slice(0, 5)"
							:key="item.slug"
						>
							<div v-if="isCurrentMenuShowed" class="subcategory-item row ">
								<div @click="closeMenu" class="py10 px-4 col-xs col-11 row">
									<router-link
										class="px15 cl-accent no-underline col-12"
										to="item.path"
									>
										{{ item.name }}
									</router-link>
								</div>

								<div class="py10 col-1">
									<p
										class="material-icons p-1 micro-menu-btn mb-0"
										v-if="isCollectionActive === item.slug"
										@click="hideSubCollection"
									>
										remove
									</p>
									<p
										class="material-icons p-1 micro-menu-btn mb-0"
										@click="showSubCollection(item.slug)"
										v-else
									>
										add
									</p>
								</div>
							</div>
							<ul
								class="ml-5 micro-sub-menu mb-2"
								v-if="item.type.length > 0"
								:class="{ 'd-none': item.slug != isCollectionActive }"
							>
								<li
									@click="closeMenu"
									v-for="itemcol in collection.filter(
										(m) => m.slug === isCollectionActive
									)"
									:key="itemcol.slug"
								>
									<router-link
										class="no-underline col-xs uppercase "
										to="child.path"
									>
										Name
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="">
						<div v-if="isCurrentMenuShowed" class="subcategory-item row px-4">
							<div @click="closeMenu" class="py10 col-xs col-11 row">
								<router-link
									class="px15 cl-accent no-underline col-12"
									to="item.path"
								>
									FAQs
								</router-link>
							</div>
						</div>
					</div>
					<div class="">
						<div v-if="isCurrentMenuShowed" class="subcategory-item row px-4">
							<div @click="closeMenu" class="py10 col-xs col-11 row">
								<router-link
									class="px15 cl-accent no-underline col-12"
									to="item.path"
								>
									Contact Us
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import i18n from "@vue-storefront/i18n";
import SidebarMenu from "@vue-storefront/core/compatibility/components/blocks/SidebarMenu/SidebarMenu";
import SubBtn from "theme/components/core/blocks/SidebarMenu/SubBtn";
import SubCategory from "theme/components/core/blocks/SidebarMenu/SubCategory";
import { formatCategoryLink } from "@vue-storefront/core/modules/url/helpers";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default {
	components: {
		SubCategory,
		SubBtn,
	},
	mixins: [SidebarMenu],
	data() {
		return {
			isActiveSubMenu: null,
			isActiveCollection: false,
			isCollectionActive: null,
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
					name: "Men 1",
					slug: "men-1",
					id: 10,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Men 2",
					slug: "men-2",
					id: 18,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Men 3",
					slug: "men-3",
					id: 17,
					parent_id: 1,
					path: "/",
				},
				{
					name: "Men 14",
					slug: "men-14",
					id: 16,
					parent_id: 2,
					path: "/",
				},
				{
					name: "Men 4ffffffffffffffff",
					slug: "men-4",
					id: 13,
					parent_id: 2,
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
			componentLoaded: false,
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
		};
	},
	computed: {
		mainListStyles() {
			return this.submenu.depth
				? `transform: translateX(${this.submenu.depth * 100}%)`
				: false;
		},
		...mapState({
			submenu: (state) => state.ui.submenu,
			currentUser: (state) => state.user.current,
		}),
		getSubmenu() {
			return this.submenu;
		},
		visibleCategories() {
			return this.categories.filter((category) => {
				return category.product_count > 0 || category.children_count > 0;
			});
		},
		isCurrentMenuShowed() {
			return !this.getSubmenu || !this.getSubmenu.depth;
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.componentLoaded = true;
			disableBodyScroll(this.$refs.container);
		});
	},
	destroyed() {
		clearAllBodyScrollLocks();
	},
	methods: {
		login() {
			if (!this.currentUser && this.isCurrentMenuShowed) {
				this.$nextTick(() => {
					this.$store.commit("ui/setAuthElem", "login");
					this.$bus.$emit("modal-show", "modal-signup");
					this.$router.push({ name: "my-account" });
				});
			}
		},
		categoryLink(category) {
			return formatCategoryLink(category);
		},
		showSubMenu(id) {
			this.isActiveSubMenu = id;
			this.isActiveCollection = false;
		},
		hideSubMenu() {
			this.isActiveSubMenu = null;
			this.isBtn = false;
		},
		showCollection() {
			this.isActiveCollection = true;
			this.isActiveSubMenu = null;
		},
		hideCollection() {
			this.isActiveCollection = false;
			this.isCollectionActive = null;
		},
		showSubCollection(slug) {
			this.isCollectionActive = slug;
		},
		hideSubCollection() {
			this.isCollectionActive = null;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~theme/css/animations/transitions";
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$bg-secondary: color(secondary, $colors-background);
$color-gainsboro: color(gainsboro);
$color-matterhorn: color(matterhorn);
$color-mine-shaft: color(mine-shaft);
$color-silver: color(silver);
.sidebar-menu-header {
	border-bottom: 1px solid $color-silver;
}
a:hover {
	color: #7f92c9;
}
.micro-sub-menu {
	background-color: none;
	transition: all 0.3s;
}
.show-menu {
	opacity: 1;
	// height: 100%;
}
.hide-menu {
	opacity: 0;
	height: 0;
}
.micro-menu-btn {
	background-color: #f9f9f9;
}
.micro-menu-btn:hover,
.micro-menu-btn:active {
	cursor: pointer;
}
.sidebar-menu {
	height: 100vh;
	width: 350px;
	overflow: hidden;
	@media (max-width: 767px) {
		width: 100vh;
	}
	&__container {
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		height: calc(100% - 55px);
	}
	&__list {
		transition: transform $duration-main $motion-main;
	}
	ul {
		list-style-type: none;
	}
	.subcategory-item {
		display: flex;
		width: 100%;
	}
	button {
		color: $color-mine-shaft;
		a {
			color: $color-mine-shaft;
		}
	}
	.close-btn {
		i {
			color: $color-gainsboro;
		}
		&:hover,
		&:focus {
			i {
				color: $color-matterhorn;
			}
		}
	}
}
</style>
