<template>
  <div v-show="isShow" class="ai-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ai-tab',
  props: {
    title   : {type : String},
    disabled: { type: Boolean, default: false }
  },
  data () {
    return {
      isShow: false
    }
  },
  created () {
    this.$parent.tabs.push(this)
  }
}
</script>
