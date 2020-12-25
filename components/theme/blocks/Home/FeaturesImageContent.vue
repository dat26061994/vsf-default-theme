<template>
    <div class="features-image-content">
        <div class="row">
            <div v-if="positionImage === 'left'" class="col-md-6 col-xs-12">
                <slot name="image"/>
            </div>
            <div class="col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                <slot name="content"/>
            </div>
            <div v-if="positionImage === 'right'" class="col-md-6 col-xs-12">
                <slot name="image"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        positionImage: {
            type: String,
            default: 'right'
        }
    }
}
</script>