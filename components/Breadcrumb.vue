<template>
    <div class="">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item" :class="{ 'active': item.active }" v-for="(item, index) in breadcrumbs">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        breadcrumbs: {
            type: Array,
            default: [
                {
                    name: "Home",
                    link: "/",
                    active: false
                }
            ],
        }
    },
    data() {
        return {
            
        }
    },
}
</script>