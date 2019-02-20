
<template>
  <div class="ai-capsules">
    <ai-button v-for="(item, index) in list"
               :key="index"
               :size="size"
               :color="select.value === item.value ? 'primary' : 'white'"
               @click="clickHandler(item, index)">{{item.text}}</ai-button>
  </div>
</template>

<script>
  export default {
    name: 'ai-capsules',
    props: {
      list: { type: Array, default () { return [] }  },
      size: { type: String, default: 'm' },
      value: { type: Object, default () { return {} } }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    data () {
      return {
        select: {}
      }
    },
    created () {
      if (this.value && this.value.value) {
        this.select = this.value
      } else {
        this.select = this.list[0]
      }
      this.clickHandler(this.select)
    },
    methods: {
      clickHandler (val) {
        this.$emit('change', val)
        this.select = val
      }
    }
  }
</script>
