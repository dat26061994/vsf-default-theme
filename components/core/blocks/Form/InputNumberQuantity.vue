<template>
  <div class="base-input-number">
    <label class="base-input-number__label cl-primary flex" :for="getInputId">{{ name }}</label>

    <div class="base-input-number__form">
        <button class="btn-minus" @click="--inputValue">
            <span class="material-icons">
            remove
            </span>
        </button>
        <input
        :id="getInputId"
        type="number"
        :min="min"
        :max="max"
        :disabled="disabled"
        class="m0 no-outline base-input-number__input brdr-cl-primary bg-cl-transparent h4"
        :focus="autofocus"
        v-model="inputValue"
        @blur="$emit('blur', $event.target.value)"
        >
        <button class="btn-plus" @click="++inputValue">
            <span class="material-icons">
            add
            </span>
        </button>
    </div>
    
    <ValidationMessages v-if="validations" :validations="validations" />
  </div>
</template>

<script>
import ValidationMessages from './ValidationMessages.vue'
export default {
  name: 'BaseInput',
  components: {
    ValidationMessages
  },
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    validations: {
      type: Array,
      default: () => []
    },
    onlyPositive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getInputId () {
      return `input_${this._uid}`
    },
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        if (!this.onlyPositive) {
          this.$emit('input', value)
        } else {
          const targetValue = parseInt(value, 10)
          if (!isNaN(targetValue)) {
            this.$emit('input', targetValue !== 0 ? Math.abs(targetValue) : 1)
          }
        }
      }
    },
  },
  methods: {
      addQuantity() {
          this.inputValue++;
      }
  },
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';

.base-input-number {

    .base-input-number__form{
        height: 30px;
        border: 1px solid rgba(0,0,0,.1);
        display: flex;
        align-items: center;
        width:fit-content;
        button{
            height: 28px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .btn-minus{
            border: none;
            background-color: white;
            color: #cccccc;
            border-right: 1px solid rgba(0,0,0,.1);
        }
        .btn-plus{
            border: none;
            background-color: white;
            color: #cccccc;
            border-left: 1px solid rgba(0,0,0,.1);
        }
        input{
            border: none;
            border: none;
            outline: none;
            min-height: auto;
            margin: 0;
            padding: 0;
            text-align: center;
            -moz-appearance: textfield;
            font-size: 14px;
            padding: 5px;
            width: 40px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
    }
  &__input {
    border-style: solid;
    border-width: 0 0 1px 0;
    height: 1.4rem;
    line-height: 1.7rem;
    @media (min-width: 768px) {
      height: 1.7rem;
    }
  }

  &__label {
    font-size: 0.8rem;
    line-height: 1.2rem;
    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }
}
</style>
