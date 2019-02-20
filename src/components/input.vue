<template>
  <div :class="'input-size-' + size" class="ai-input">
    <textarea v-if="size === 'textarea'" v-model="inputValue" v-bind="$attrs" v-on="$listeners" class="ai-input-inner input-textarea" />
    <input v-else v-model="inputValue" v-bind="$attrs" v-on="$listeners" class="ai-input-inner" />
  </div>
</template>

<script>
  export default {
    name: 'ai-input',
    props: {
      size        : { type: String ,  default: 'medium'   },
      value       : { type: [String, Number]              }
    },
    data () {
      return {
        inputValue: this.value
      }
    },
    model: {
      prop: 'value',
      event: 'update'
    },
    watch: {
      value (val) {
        this.inputValue = val
      },
      inputValue (val) {
        this.$emit('update', val)
      }
    }
  }
</script>
