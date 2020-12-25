<template>
    <div class="product-detail">
        <section class="container px15 pt50 pb35 cl-accent details">
            <div>
                <ul class="nav nav-tabs nav-justified">
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('description')" :class="{ active: isActive('description') }" href="#description">Description</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('customer-reviews')" :class="{ active: isActive('customer-reviews') }" href="#customer-reviews">Customer Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('faq')" :class="{ active: isActive('faq') }" href="#faq">Frequently Asked Questions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('rar')" :class="{ active: isActive('rar') }" href="#faq">Return & Refund</a>
                    </li>
                </ul>
                <div class="tab-content py-3" id="myTabContent">
                    <div class="tab-pane fade" :class="{ 'active show': isActive('description') }" id="description" v-html="product.description">

                    </div>
                    <div class="tab-pane fade" :class="{ 'active show': isActive('customer-reviews') }" id="customer-reviews">

                    </div>
                    <div class="tab-pane fade" :class="{ 'active show': isActive('faq') }" id="faq" v-html="faq">

                    </div>
                    <div class="tab-pane fade" :class="{ 'active show': isActive('rar') }" id="rar">
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            activeItem: 'description',
            faq: `<div class="product__description-html"><figure><img data-src="https://img.btdmp.com/files/10110793/2020/09/29/1601353798f66248541b.png" data-image="235301" src="https://img.btdmp.com/files/10110793/2020/09/29/1601353798f66248541b.png" lazy="loaded"></figure>
            <h2><strong>What is 64Hydro Water Bottle made of? Plastic or Glass?</strong></h2>
            <p>We always focus on customers' safety and convenience during researching and producing products. A 32-oz glass bottle is heavy and easy to be broken. That's why we chose Tritan co-polyester plastic that is 100% BPA and toxin-free to ensure that water is clear of harmful chemicals, plastic taste, or weird odors.</p>
            <h3>Is 64Hydro Water Bottle BPA-Free?</h3>
            <p>Yes - all of 64Hydro Water Bottle is 100% BPA-Free.</p>
            <h3>What is the currency for all items?</h3>
            <p>All prices listed on our website are in US Dollars.</p>
            <h3><strong>Do you offer international shipping?</strong></h3>
            <p>Yes we do.</p>
            <h3><strong>What are your shipping methods?<br></strong></h3>
            <p>We use DHL, USPS, UPS to ship all orders.</p>
            <h3><strong>Will I receive an email of my order confirmation and tracking info?</strong></h3>
            <p>You will receive your order confirmation immediately following your order. Within 24 hours after receiving the order confirmation, you can change your information (such as name, address, phone number…) or cancel your order.</p>
            <p>It will take approximately 5-7 days for you to receive tracking information.</p>
            <h3><strong>How long does it take to receive products?</strong></h3>
            <p>All orders typically arrive between 20-30 business days after shipment via USPS after receiving tracking number.<br>Orders are shipped during regular business days, excluding holidays. Any orders placed on Saturday or Sunday will be shipped the following Monday.</p>
            <h3><strong>Is the bottle dishwasher safe?</strong></h3>
            <p>64Hydro 32oz bottle is NOT dishwasher safe. We highly recommend you wash the bottle by hand with warm water and soap.</p>
            <h3><strong>Are replacement parts available for lid/lid plug/strainer?</strong></h3>
            <p>Currently, we do not retail accessories. However, we are planning to retail in the near future and will also inform you immediately when the bottles’ accessories are officially sold.</p>
            <h3><strong>How do I cancel my order?</strong></h3>
            <p>Cancellation of an order is allowed on or before 11:00 pm (PDT, -7 GMT) on the same day. After that time, the cancellation will no longer be entertained.</p>
            <p>You may contact us via cs@64hydro.com to request for cancellation.</p>
            <h3><strong>How often should I clean my bottle?</strong></h3>
            <p>We recommend cleaning your bottle and lid once per day to ensure that it remains mold and germ-free.<br>You should hand wash your bottle with hot water and non-abrasive dish soap. Do not use cleansers with harsh chemicals like bleach or chlorine as they can ruin your bottle.</p>
            <h3><strong>What are your shipping rates?</strong></h3>
            <p>We have a fixed shipping rate of $5.95 USD to all destinations worldwide.</p>
            <h3><strong>How long will the liquids stay cold?</strong></h3>
            <p>The tracker bottles are not designed to keep the liquids cold, so you can consider our stainless steel bottles.</p></div>`,
        }
    },
    methods: {
        isActive (menuItem) {
            return this.activeItem === menuItem
        },
        setActive (menuItem) {
            this.activeItem = menuItem
        }
    }
}
</script>

<style lang="scss">
  
</style>