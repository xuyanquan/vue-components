

<template>
  <div class="ai-sidebar">
    <template v-for="(item, index) in tree">
      <div v-if="item.childs" :key="index" class="ai-sidebar-tree">
        <div class="ai-sidebar-title" @click="item.open = !item.open">
          {{item.text}}<span class="right-icon" :class="{ rotate: item.open }">&gt;</span>
        </div>
        <div v-if="item.open">
          <ai-sidebar :tree="item.childs"></ai-sidebar>
        </div>
      </div>
      <ai-link v-else :key="index" :to="item.to" :class="{'hot': item.to === $route.path}">{{item.text}}</ai-link>
    </template>
  </div>
</template>

<script>
  import AiLink from './../link/link.vue'

  export default {
    name: 'ai-sidebar',
    props: {
      tree: { type: Array, default () { return [] } }
    },
    components: {
      AiLink
    },
    data () {
      return {
        select: {}
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>
