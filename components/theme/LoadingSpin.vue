<template>
    <div class="spinner">
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    * {
    box-sizing: border-box;
}

body {
    max-width: 960px;
    margin: 200px auto;
    display: flex;
    justify-content: space-around;
}

.spinner {
    height: 100px;
    width: 100px;
    position: relative;
}

.spinner div {
    height: 100%;
    width: 100%;
    position: absolute;
    border: 8px solid transparent;
    border-top-color:red ;
    border-radius: 50%;
    animation: spinnerOne 1.4s linear infinite ;
}

.spinner div:nth-child(2) {
    border: 8px solid transparent;
    border-bottom-color:red ;
}

@keyframes spinnerOne {
    0% {
        transform: rotate(0deg);border-width: 8px;
    }
    50% {
        transform: rotate(180deg);border-width: 1px;
    }
    100% {
        transform: rotate(360deg);border-width: 8px;
    }
}
</style>