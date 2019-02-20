
<template>
    <div class="ai-form">
        <slot></slot>
        <div v-if="$listeners.save || $listeners.cancel" class="ai-form-ops">
            <ai-button v-if="$listeners.save" @click="$emit('save')">保存</ai-button>
            <ai-button v-if="$listeners.cancel" @click="$emit('cancel')">取消</ai-button>
        </div>
    </div>
</template>

<script>
  import AiButton from '../button/button'

  export default {
    name: 'ai-form',
    components: {
      AiButton
    },
    props: {
        left: String,
        right: String
    },
    render (createElement) {
      return createElement('div')
    }
  }
</script>
