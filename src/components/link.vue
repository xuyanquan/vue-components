<template>
  <a class="ai-link root" :href="href" :disabled="disabled" @click="onClick" :target="target">
    <slot></slot>
  </a>
</template>

<script>
import AIRouterItem from './route-item.js'

export default {
  name: 'ai-link',
  mixins:[AIRouterItem],
  props: {
    disabled: { type: Boolean }
  },
  methods: {
    onClick(e) {
      if (this.disabled)
        return e.preventDefault()

      this.$emit('click', e);
      if (this.target !== '_self')
        return

      // 先执行事件，再执行to，最后判断href
      this.navigate()
    }
  }
}
</script>
