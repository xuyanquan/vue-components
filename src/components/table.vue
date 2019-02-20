
<template>
    <table class="ai-table">
        <thead>
            <tr class="ai-table-header ai-table-row">
                <th v-for="(column,index) in columns" :key="index" class="ai-table-column">
                  {{column.label}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in list" :key="uuid(index)" @click="rowClick(row)" class="ai-table-content ai-table-row">
              <slot :row="row" :index="index" />
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'ai-table',
  props: {
      list: Array
  },
  data () {
      return {
          columns: []
      }
  },
  methods: {
    uuid (i) {
      return Math.pow(Math.random(), 8) * Date.now() + i
    },
    rowClick (row) {
        this.$emit('click', row)
    }
  }
}
</script>
