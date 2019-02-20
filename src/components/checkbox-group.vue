
<template>
  <div class="ai-checkbox-group">
    <ai-checkbox v-for="(c, index) in list"
      :key="uuid(index)"
      :label="c.label"
      :value="c.value"
      @chose="choseHandler($event, c.value)"
      :disabled="disabled" />
  </div>
</template>

<script>
import { find, findIndex } from 'lodash'
  export default {
    name: 'ai-checkbox-group',
    props: {
      list: Array,
      disabled: Boolean
    },
    model: {
      props: 'select',
      event: 'change'
    },
    data () { return { select: [] } },
    methods: {
      uuid (index) {
        return Math.pow(Math.random(), 8) * Date.now() * index
      },
      choseHandler (isChecked, val) {
        if (isChecked && !find(this.select, s => s === val)) {
          this.select.push(val)
        }
        if (!isChecked && find(this.select, s => s === val)) {
          this.select.splice(findIndex(this.select, s => s === val), 1)
        }
        this.$emit('change', this.select)
      }
    }
  }
</script>
