<template>
  <div :class="['ai-badge']">
    <span v-if="isDot" class="badge badge-dot"></span>
    <span v-else class="badge badge-value" :class="'size-' + size">{{this.showValue}}</span>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'ai-badge',
    props: {
      value: { type: Number, default: 0 },
      isDot: { type: Boolean, default: false },
      size: { type: String, default: 'm' },
      maxValue: { type: Number, default: Infinity }
    },
    computed: {
      showValue () {
        return  !this.isDot && this.value > this.maxValue
                ? `${this.maxValue}+`
                : this.value
      }
    }
  }
</script>
