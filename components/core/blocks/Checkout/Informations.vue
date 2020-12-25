<template>
    <div class="checkout__informations">
        <div class="row">
            <div class="hidden-xs col-sm-2 col-md-1" />

        </div>
    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { PersonalDetails } from '@vue-storefront/core/modules/checkout/components/PersonalDetails'

import BaseCheckbox from 'theme/components/core/blocks/Form/BaseCheckbox'
import BaseInput from 'theme/components/core/blocks/Form/BaseInput'
import ButtonFull from 'theme/components/theme/ButtonFull'
import Tooltip from 'theme/components/core/Tooltip'

export default {
    components: {
        ButtonFull,
        Tooltip,
        BaseCheckbox,
        BaseInput
    },

    created() {
        console.log('infor',this.$store.state.checkout.personalDetails);
    },
}
</script>