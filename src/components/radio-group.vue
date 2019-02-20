

<template>
  <div class="ai-radio-group">
    <ai-radio v-for="(r, index) in list"
      :key="uuid(index)"
      :name="`group${groupId}`"
      :label="r.label"
      :value="r.value"
      :checked="r.checked"
      @change="changeHandler($event, r)"
      :disabled="disabled"></ai-radio>
  </div>
</template>

<script>
  let groupId = 1
  export default {
    name: 'ai-radio-group',
    props: {
      list: Array,
      disabled: Boolean
    },
    created () {
      this.groupId = groupId++
    },
    model: {
      event: 'change'
    },
    methods: {
      uuid (index) {
        return Math.pow(Math.random(), 8) * Date.now() * index
      },
      changeHandler (isChose) {
        if (isChose) {
          this.$emit('change', isChose)
        }
      }
    }
  }
</script>
