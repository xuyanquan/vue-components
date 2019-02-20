<template>
  <div :class="`status-${status}`" :style="{color: color}" class="ai-progress">
    <div class="bar-track">
      <div class="indicator" :style="{width: `${tweenedPercentage}%`, backgroundColor: color}"
           :class="`status-${status}`" />
    </div>
    <div class="text">{{animatedPercentage}}%</div>
  </div>
</template>

<script>
  export default {
    name: 'ai-progress',
    props: {
      percentage: { type: Number, required: true    },
      color     : { type: String                    },
      status    : { type: String, default: 'normal' }
    },
    data () {
      return {
        tweenedPercentage: this.percentage
      }
    },
    watch: {
      percentage (val) {
        this.tweenedPercentage = val > 100 ? 100 : val
      }
    },
    computed: {
      animatedPercentage () {
        return this.tweenedPercentage.toFixed(0)
      }
    }
  }
</script>
