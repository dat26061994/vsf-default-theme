<template>
    <div class="cart-component">
        <div>
            <button type="submit" class="btn bg-white relative">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-item-count badge-danger absolute">11</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .cart-component{
        .cart-item-count{
            border-radius: 50%;
            top:-4px;
            right: 1px;
            font-size:12px;
            width: 18px;
            height: 18px;
        }

        button:focus {
            box-shadow: none;
        }
    }
    
</style>