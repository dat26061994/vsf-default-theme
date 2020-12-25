<template>
    <div class="search-page container mx-auto">
        <div class="row">
            <div class="col-xs-12">
                <breadcrumbs :with-homepage="true" :routes="[]" active-route="Search" />

                <h3>Search</h3>
            </div>

            <div class="col-xs-12 mt-3">
                <div class="span12" style="width: 400px;">
                    <div class="custom-search-container d-flex justify-content-center">
                        <button type="submit" class="btn"><i class="fas fa-search"></i></button>
                        <input type="text" v-model="search" @change="makeSearch" class="search-query mac-style p-2" placeholder="What are you searching for?">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 mt-3">
                <product-listing :columns="4" :products="products" />
            </div>
        </div>
    </div>
</template>

<script>
import { Search } from '@vue-storefront/core/modules/catalog/components/Search'
import ProductListing from 'theme/components/core/blocks/Product/ProductListing.vue'
import Breadcrumbs from 'theme/components/core/Breadcrumbs.vue'

export default {
    mixins: [Search],
    components: {
        ProductListing,
        Breadcrumbs
    },
    created () {


    },
    mounted () {
    },
    methods: {
        
    },
    watch: {
        '$route': function() {
            this.search = this.$route.query.q || ''
            localStorage.setItem(`shop/user/searchQuery`,this.search)
            this.makeSearch()
        }
    },
}
</script>