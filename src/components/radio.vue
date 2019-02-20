

<template>
  <div class="ai-radio" @click="click">
    <input :id="uuid"
      v-bind="$attrs"
      @blur="check = ''"
      :checked="check"
      type="radio" class="ai-radio-input" :class="{ disabled }" />
    <label class="ai-radio-label" :for="uuid">{{this.label}}<slot /></label>
  </div>
</template>

<script>
  export default {
    name: 'ai-radio',
    props: {
      label: String, value: [String, Number], checked: Boolean, disabled: Boolean
    },
    watch: {
      check (val) {
        if (val) {
          this.$emit('change', this.value)
        }
      }
    },
    computed: {
      uuid () {
        return Math.pow(Math.random(), 8) * Date.now()
      }
    },
    data () {
      return { check: this.checked ? 'checked' : '' }
    },
    created () {
      if (this.checked) {
        this.$emit('change', this.value)
      }
    },
    methods: {
      click (e) {
        if (this.disabled) {
          e.preventDefault()
          e.stopPropagation()
          return
        }
        this.check = 'checked'
      }
    }
  }
</script>
