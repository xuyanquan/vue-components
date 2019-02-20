<template>
  <div class="ai-select" :class="{'disabled': disabled}">
    <div class="label" @click.stop="toggle">
        <ai-input readonly="readonly" :disabled="disabled" @blur="isOpen = false" v-bind="$attrs" :value="selected.label" />
        <span :class="{ ifRotate: isOpen }" v-if="!disabled" class="ai-select-icon">V</span>
    </div>
    <transition name="t-fade">
        <ul class="options" v-show="isOpen">
            <li :title="item.label"
                  v-for="(item, index) in list" 
                  :key="index"
                  class="ai-select-container-item"
                  :class="{ active: item.label === selected.label }" 
                  @mousedown.stop="select(item)"
            >{{ item.label }}</li>
        </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ai-select',
  props: {
      list: { type: Array, default: () => [] },
      value: [String, Number],
      disabled: Boolean,
      size: { type: String, default: () => 'medium' }
  },
  data () {
      return {
          isOpen: false,
          selected: {}
      }
  },
  model: {
      prop: 'value',
      event: 'select'
  },
  watch: {
      value: {
          handler (newValue) {
              this.selected = this.list.find( item => item.value === newValue ) || {}
          },
          immediate: true
      }
  },
  methods: {
      toggle () {
          this.isOpen = !this.isOpen && !this.disabled
      },
      select (item) {
          this.selected = item
          this.$emit('select', item.value)
      }
  }
}
</script>
