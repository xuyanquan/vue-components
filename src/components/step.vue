<template>
  <div v-show="show" v-if="isRender">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ai-step',
  props: {
    title: String,
  },
  beforeCreate () {
    let parentVM = this.$parent
    parentVM && parentVM.$options.name === 'ai-steps' && parentVM.itemVMs.push(this)
  },
  computed: {
    show() {
      return this.$parent.selectVM === this
    },
    isRender () {
      return this.$parent && this.$parent.$options.name === 'ai-steps'
    }
  }
}
</script>

