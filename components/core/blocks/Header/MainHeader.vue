<template>
    <div class="main-header">

        <!-- top bar component -->
        <transition name="staggered">
            <top-bar v-show="show" />
        </transition>

        <div class="container py-2">
            <!-- Header desktop -->
            <div class="row bg-white d-none d-sm-flex align-items-center">
            
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-md-2">
                            <logo height="40" width="auto" />
                        </div>
                        <div class="col-md-9 ">
                            <div class="span12">
                                <div class="custom-search-container d-flex justify-content-center">
                                    <button type="submit" class="btn"><i class="fas fa-search"></i></button>
                                    <input type="text" v-model="search" @change="searchProducts" class="search-query mac-style p-2" placeholder="What are you searching for?">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-6 text-right">
                    <microcart-icon class="p15 icon pointer" />
                </div>

                <div class="col-md-12">
                    <hr class="my-2">

                    <mega-menu/>
                </div>

            </div>

            <!-- Header mobile -->
            <div class="d-sm-none">
                <div class="row">
                    <div class="col-xs-3 d-flex align-items-center">
                        <hamburger-icon class="p15 icon bg-white pointer" />
                    </div>
                    <div class="col-xs-6 d-flex justify-content-center align-items-center">
                        <logo height="40" width="auto" />
                    </div>
                    <div class="col-xs-3">
                        <microcart-icon class="p15 icon pointer" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import Cart from 'theme/components/theme/Cart.vue'
import Modal from 'theme/components/theme/Modal.vue'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import { mapState, mapGetters, mapActions } from 'vuex';
import { formatCategoryLink } from '@vue-storefront/core/modules/url/helpers';
import { getTopLevelCategories } from 'theme/helpers';
import Logo from 'theme/components/core/Logo'
import HamburgerIcon from 'theme/components/core/blocks/Header/HamburgerIcon'
import MegaMenu from 'theme/components/core/blocks/Header/MegaMenu'
import TopBar from 'theme/components/core/blocks/Header/TopBar.vue'

export default {

    components: {
        Cart,
        MicrocartIcon,
        Logo,
        Modal,
        HamburgerIcon,
        MegaMenu,
        TopBar
    },
    data() {
        return {
            search: '',
            show: true,
        }
    },
    computed: {
        
    },
    methods: {
        searchProducts() {
            localStorage.setItem(`shop/user/searchQuery`,this.search)
            this.$router.push({ name: 'search', query: {q: this.search }})
        },
        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            if (currentScrollPosition < 40) {
                this.show = true
            }else{
                this.show = false
            }
        }
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    }
    
}
</script>

<style lang="scss">
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color:white;
        z-index: 2;
    }
    .custom-search-container {
        border: 1px solid rgba(0,0,0,.1);
        background-color:white;
        input {
            border: none;
            width: 90%;
        }
        input:focus {
            outline: none;
        }
        button {
            background-color: white;
        }
    }

    .modal.left .modal-dialog,
	.modal.right .modal-dialog {
		position: fixed;
		margin: auto;
		width: 320px;
		height: 100%;
		-webkit-transform: translate3d(0%, 0, 0);
		    -ms-transform: translate3d(0%, 0, 0);
		     -o-transform: translate3d(0%, 0, 0);
		        transform: translate3d(0%, 0, 0);
	}

	.modal.left .modal-content,
	.modal.right .modal-content {
		height: 100%;
		overflow-y: auto;
	}
	
	.modal.left .modal-body,
	.modal.right .modal-body {
		padding: 15px 15px 80px;
	}

/*Left*/
	.modal.left.fade .modal-dialog{
		left: -320px;
		-webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
		   -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
		     -o-transition: opacity 0.3s linear, left 0.3s ease-out;
		        transition: opacity 0.3s linear, left 0.3s ease-out;
	}
	
	.modal.left.fade.in .modal-dialog{
		left: 0;
	}
        
/*Right*/
	.modal.right.fade .modal-dialog {
		right: -320px;
		-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
		   -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
		     -o-transition: opacity 0.3s linear, right 0.3s ease-out;
		        transition: opacity 0.3s linear, right 0.3s ease-out;
	}
	
	.modal.right.fade.in .modal-dialog {
		right: 0;
	}

    /* ----- MODAL STYLE ----- */
	.modal-content {
		border-radius: 0;
		border: none;
	}

	.modal-header {
		border-bottom-color: #EEEEEE;
		background-color: #FAFAFA;
	}
    .bounce-transition {
    display: inline-block; /* otherwise scale animation won't work */
    }
    .bounce-enter {
    animation: bounce-in .5s;
    }
    .bounce-leave {
    animation: bounce-out .5s;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
    @keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
    }
    .staggered-transition {
        transition: all .5s ease;
        overflow: hidden;
        margin: 0;
        height: 20px;
    }
    .staggered-enter, .staggered-leave {
        opacity: 0;
        height: 0;
    }
</style>