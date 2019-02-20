
<template>
    <div class="ai-form-item">
        <div class="item item-label" :style="leftSty">
            <span>{{label}}</span><i :class="required ? 'required' : 'quote'"></i>
        </div>
        <div class="item item-value" :style="rightSty">
            <slot></slot>
            <div v-if="tip" class="tip">{{tip}}</div>
            <div class="error">{{error}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ai-form-item',
    props: {
        label: String,
        error: String,
        required: Boolean,
        tip: String
    },
    data () {
      return {
        leftSty: {},
        rightSty: {}
      }
    },
    created () {
      this.leftSty.width = this.$parent.left
      this.rightSty.width = this.$parent.right
    }
  }
</script>
