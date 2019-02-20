<template>
  <div>
    <ul :class="['nav-tabs', pills ? 'nav-tabs-pills' : '']">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'nav-tabs-active': tab.isShow , 'nav-tabs-disabled': tab.disabled }"
        @click.stop="tabChange(index)">{{tab.title}}</li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ai-tabs',
  props: {
    current: { type: Number , default : 0 },
    pills: { type: Boolean, default: false }
  },
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.$nextTick(() => {
      this.tabs[this.current] && (this.tabs[this.current].isShow = true)
    })
  },
  methods: {
    tabChange (index) {
      if (this.tabs[index].disabled) return
      this.tabs.forEach(tab => {
        tab.isShow = false
      })
      this.tabs[index].isShow = true
      this.$emit('change', index)
    }
  }
}
</script>
