<template>
  <div class="ai-checkbox" @click="toggle">
    <input v-bind="$attrs" type="radio" class="ai-checkbox-input" :checked="check" />
    <label class="ai-checkbox-label">{{this.label}}<slot /></label>
  </div>
</template>

<script>
  export default {
    name: 'ai-checkbox',
    props: { label: '', value: '', checked: Boolean },
    data () {
      return { check: this.checked }
    },
    methods: {
      toggle () {
        if (typeof this.$attrs.disabled === 'string') return
        this.check = !this.check
        this.$emit('chose', this.check)
      }
    }
  }
</script>
