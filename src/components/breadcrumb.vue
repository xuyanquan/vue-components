<template>
  <div :class="['ai-beadcumb']">
    <ai-link v-for="(link, index) in links" :key="index" :to="link.to" class="beadcumb">{{link.text}}</ai-link>
  </div>
</template>

<script>
  import AiLink from './../link/link.vue'
  export default {
    name: 'ai-breadcrumb',
    props: {
      links: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      AiLink
    }
  }
</script>
