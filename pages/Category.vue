<template>
  <div id="category">
    <header class=" py35 pl20">
      <div class="container">
        <breadcrumbs />
        <div class="row middle-sm">
          <h1 class="col-sm-8 category-title ">
            {{ getCurrentCategory.name }}
          </h1>
          <!-- Là phần chọn column 3 4 hay 6 cột -->

          <!-- <div class="sorting col-sm-2 align-right mt50">
            <label class="mr10">{{ $t('Columns') }}:</label>
            <columns @change-column="columnChange" />
          </div> -->
          <div class="sorting col-sm-2 align-right ">
            <p>Sort By</p>
          </div>
          <div class="sorting col-sm-2 align-right ">
            <sort-by
              class="sort-by-clicked"
              :has-label="true"
              @change="changeFilter"
              :value="getCurrentSearchQuery.sort"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row m0">

          <div class="mobile-sorting col-xs-6 text-right m-auto">
            <p class="m0">Sort By</p>
          </div>
          <div class="mobile-sorting col-xs-6 m-auto">
            <sort-by
              @change="changeFilter"
              :value="getCurrentSearchQuery.sort"
            />
          </div>
        </div>
      </div>
    </header>
    <div class="container pb60">
      <div class="row m0 pt15">

        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 px10 border-box products-list">
          <!-- phần đếm số lượng sản phẩm còn -->

          <!-- <p class="col-xs-12 end-md m0 pb20 cl-secondary">
            {{ $t('{count} items', { count: getCategoryProductsTotal }) }}
          </p> -->
          <div v-if="isCategoryEmpty" class="hidden-xs">
            <h4 data-testid="noProductsInfo">
              {{ $t('No products found!') }}
            </h4>
            <p>{{ $t('Please change Your search criteria and try again. If still not finding anything relevant, please visit the Home page and try out some of our bestsellers!') }}</p>
          </div>
          <lazy-hydrate :trigger-hydration="!loading" v-if="isLazyHydrateEnabled">
            <product-listing :columns="defaultColumn" :products="getCategoryProducts" />
          </lazy-hydrate>
          <product-listing v-else :columns="defaultColumn" :products="getCategoryProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
// import Sidebar from '../components/core/blocks/Category/Sidebar.vue'
import ProductListing from '../components/core/blocks/Product/ProductListing.vue'
import Breadcrumbs from '../components/core/Breadcrumbs.vue'
import SortBy from '../components/core/SortBy.vue'
import { isServer } from '@vue-storefront/core/helpers'
import { Logger } from '@vue-storefront/core/lib/logger'
import { getSearchOptionsFromRouteParams } from '@vue-storefront/core/modules/catalog-next/helpers/categoryHelpers'
import config from 'config'
// import Columns from '../components/core/Columns.vue'
import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import { mapGetters } from 'vuex'
import onBottomScroll from '@vue-storefront/core/mixins/onBottomScroll'
import rootStore from '@vue-storefront/core/store';
import { catalogHooksExecutors } from '@vue-storefront/core/modules/catalog-next/hooks'
import { localizedRoute, currentStoreView } from '@vue-storefront/core/lib/multistore'
import { htmlDecode } from '@vue-storefront/core/filters'

const THEME_PAGE_SIZE = 50

const composeInitialPageState = async (store, route, forceLoad = false) => {
  try {
    const filters = getSearchOptionsFromRouteParams(route.params)
    const cachedCategory = store.getters['category-next/getCategoryFrom'](route.path)
    const currentCategory = cachedCategory && !forceLoad ? cachedCategory : await store.dispatch('category-next/loadCategory', { filters })
    const pageSize = store.getters['url/isBackRoute'] ? store.getters['url/getCurrentRoute'].categoryPageSize : THEME_PAGE_SIZE
    await store.dispatch('category-next/loadCategoryProducts', { route, category: currentCategory, pageSize })
    const breadCrumbsLoader = store.dispatch('category-next/loadCategoryBreadcrumbs', { category: currentCategory, currentRouteName: currentCategory.name, omitCurrent: true })

    if (isServer) await breadCrumbsLoader
    catalogHooksExecutors.categoryPageVisited(currentCategory)
  } catch (e) {
    Logger.error('Problem with setting Category initial data!', 'category', e)()
  }
}

export default {
  components: {
    LazyHydrate,
    ButtonFull,
    ProductListing,
    Breadcrumbs,
    // Sidebar,
    SortBy,
    // Columns
  },
  mixins: [onBottomScroll],
  data () {
    return {
      mobileFilters: false,
      defaultColumn: 4,
      loadingProducts: false,
      loading: true,
      breadcrumbs: [
        {
          name: "Home",
          link: "/",
          active: true
        },
        {
          name: "Cart",
          link: "/cart",
          active: false
        }
      ],
    }
  },
  computed: {
    ...mapGetters({
      getCurrentSearchQuery: 'category-next/getCurrentSearchQuery',
      getCategoryProducts: 'category-next/getCategoryProducts',
      getCurrentCategory: 'category-next/getCurrentCategory',
      getCategoryProductsTotal: 'category-next/getCategoryProductsTotal',
      getAvailableFilters: 'category-next/getAvailableFilters'
    }),
    isLazyHydrateEnabled () {
      return config.ssr.lazyHydrateFor.includes('category-next.products')
    },
    isCategoryEmpty () {
      return this.getCategoryProductsTotal === 0
    }
  },
  async asyncData ({ store, route, context }) { // this is for SSR purposes to prefetch data - and it's always executed before parent component methods
    if (context) context.output.cacheTags.add('category')
    await composeInitialPageState(store, route)
  },
  async beforeRouteEnter (to, from, next) {
    if (isServer) next() // SSR no need to invoke SW caching here
    else if (!from.name) { // SSR but client side invocation, we need to cache products and invoke requests from asyncData for offline support
      next(async vm => {
        vm.loading = true
        await composeInitialPageState(vm.$store, to, true)
        await vm.$store.dispatch('category-next/cacheProducts', { route: to }) // await here is because we must wait for the hydration
        vm.loading = false
      })
    } else { // Pure CSR, with no initial category state
      next(async vm => {
        vm.loading = true
        vm.$store.dispatch('category-next/cacheProducts', { route: to })
        vm.loading = false
      })
    }
  },
  methods: {
    openFilters () {
      this.mobileFilters = true
    },
    closeFilters () {
      this.mobileFilters = false
    },
    async changeFilter (filterVariant) {
      this.$store.dispatch('category-next/switchSearchFilters', [filterVariant])
    },
    columnChange (column) {
      this.defaultColumn = column
    },
    async onBottomScroll () {
      if (this.loadingProducts) return
      this.loadingProducts = true
      try {
        await this.$store.dispatch('category-next/loadMoreCategoryProducts')
      } catch (e) {
        Logger.error('Problem with fetching more products', 'category', e)()
      } finally {
        this.loadingProducts = false
      }
    }
  },
  metaInfo () {
    const storeView = currentStoreView()
    const { meta_title, meta_description, name, slug } = this.getCurrentCategory
    const meta = meta_description ? [
      { vmid: 'description', name: 'description', content: htmlDecode(meta_description) }
    ] : []
    /* const categoryLocaliedLink = localizedRoute({
      name: 'category-amp',
      params: { slug }
    }, storeView.storeCode)
    const ampCategoryLink = this.$router.resolve(categoryLocaliedLink).href */

    return {
      // link: [ { rel: 'amphtml', href: ampCategoryLink } ],
      title: htmlDecode(meta_title || name),
      meta
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    background-color: white
  }

  .sort-by-clicked:hover {
    border: 1px solid rgb(64, 64, 219);
  }
  .btn {
    &__filter {
      min-width: 100px;
    }
  }
  .divider {
    width: calc(100vw - 8px);
    bottom: 20px;
    left: -36px;
  }
  .category-filters {
    width: 242px;
  }

  .mobile-filters {
    display: none;
    overflow: auto;
  }

  .mobile-filters-button {
    display: none;
  }

  .mobile-sorting {
    display: none;
  }

  .category-title {
    line-height: 65px;
  }

  .sorting {
    label {
      margin-right: 10px;
    }
  }

  @media (max-width: 64em) {
    .products-list {
      max-width: 730px;
    }
  }

  @media (max-width: 770px) {
    .category-title {
      margin: 0;
      font-size: 36px;
      line-height: 40px;
    }

    .products-list {
      width: 100%;
      max-width: none;
    }

    .mobile-filters {
      display: block;
    }

    .mobile-filters-button {
      display: block;
      height: 45px;
    }

    .sorting {
      display: none;
    }

    .mobile-sorting {
      display: block;
    }

    .category-filters {
      display: none;
    }

    .product-listing {
      justify-content: center;;
    }

    .mobile-filters {
      position: fixed;
      background-color: #F2F2F2;
      z-index: 5;
      padding: 0 40px;
      left: 0;
      width: 100vw;
      height: 100vh;
      top: 0;
      box-sizing: border-box;
    }

    .mobile-filters-body {
      padding-top: 50px;
    }
  }

  .close-container {
    left: 0;
  }

  .close {
    margin-left: auto;
  }
</style>
<style lang="scss">
.product-image {
  max-height: unset !important;
}
</style>
