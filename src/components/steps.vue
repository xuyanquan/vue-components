<template>
  <div class="steps-root">
    <ul class="steps-head">
      <li class="step-item"
          v-for="(itemVM, index) in itemVMs"
          :key="index"
          :title="itemVM.title"
          :pass="index <= value">
          <span class="step-flag">{{index + 1}}</span>
          <span class="step-title">
            {{itemVM.title}}
          </span>
      </li>
    </ul>
    <div class="steps-body">
        <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ai-steps',
  props: {
    value: { type: Number , default : 0 }
  },
  data () {
    return {
      itemVMs: [],
      selectVM: undefined
    }
  },
  watch: {
    value (value, oldValue) {
      this.watchSelectVM()
      this.$emit('change', { value, oldValue });
    },
    itemVMs () {
      this.watchSelectVM()
    }
  },
  methods: {
    watchSelectVM () {
      this.selectVM = this.itemVMs[this.value]
    }
  }
}
</script>
