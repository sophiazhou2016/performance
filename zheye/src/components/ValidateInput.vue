<template>
  <div class="validate-input-container">
      <input
          class="form-control"
          :class="{'is-invalid': inputRef.error}"
          v-model="inputRef.val"
          @blur="validateInput"
          id="exampleInputEmail1" aria-describedby="emailHelp"
          >
      <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
interface RuleProp {
  type: string;
  message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style>

</style>
