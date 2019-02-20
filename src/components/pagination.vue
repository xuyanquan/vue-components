

<template>
  <div v-show="isShow" class="ai-pagination">
    <span class="total-num">共{{totalSize}}条记录</span>
    <span @click="pre" class="ai-pagination-item" :class="{ disable: pos === 1, background }">&lt;</span>
    <template v-if="total <= 10">
      <span v-for="n in total" :key="n" :class="{ background, active: n === pos}" @click="to(n)" class="ai-pagination-item">{{n}}</span>
    </template>
    <template v-else-if="total > 10 && pos < 5">
      <span v-for="n in 5" :key="n" :class="{ background, active: n === pos}" @click="to(n)" class="ai-pagination-item">{{n}}</span>
      <span class="ai-pagination-item ellips">...</span>
    </template>
    <template v-else-if="total > 10 && pos > total - 5">
      <span class="ai-pagination-item ellips">...</span>
      <span v-for="n in 5" :key="n + total - 5" :class="{ background, active: n + total - 5 === pos}" @click="to(n + total - 5)" class="ai-pagination-item">{{n + total - 5}}</span>
    </template>
    <template v-else>
      <span class="ai-pagination-item ellips">...</span>
      <span v-for="n in 5" :key="pos + n - 3" :class="{ background, active: pos === pos + n - 3}" @click="to(pos + n - 3)" class="ai-pagination-item">{{pos + n - 3}}</span>
      <span class="ai-pagination-item ellips">...</span>
    </template>
    <span @click="next" class="ai-pagination-item" :class="{ disable: pos === total, background }">&gt;</span>
  </div>
</template>

<script>
export default {
    name: 'ai-pagination',
    props: {
        // 当前页
        current: { type: Number, default () { return 1 } },
        // 总条数
        totalSize: { type: Number, default () { return 0 } },
        // 页数大小
        pageSize: { type: Number, default () { return 0 } },
        background: Boolean
    },
    data () {
        return {
            pos: 0,
            total: 0,
            isShow: false
        }
    },
    watch: {
        pos (val) { this.$emit('select', val) },
        totalSize () { this.updateTotal() },
        pageSize () { this.updateTotal() },
        current (val) { this.pos = val }
    },
    created () {
        this.pos = this.current
        this.updateTotal()
    },
    methods: {
        // 对外暴露接口，用于重置。
        reset () {
          this.pos === 1 ? this.$emit('select', 1) : (this.pos = 1)
        },
        updateTotal () {
          if (this.totalSize && this.pageSize) {
              this.total = Math.ceil(this.totalSize / this.pageSize)
          }
          this.isShow = this.total > 0
        },
        next () {
            if (this.pos + 1 <= this.total) { this.pos++ }
        },
        pre () {
            if (this.pos - 1 >= 1) { this.pos-- }
        },
        to (n) { this.pos = n }
    }
}
</script>
