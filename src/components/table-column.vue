
<script>
import { find } from 'lodash'
export default {
    name: 'ai-table-column',
    props: {
        label: String
    },
    created () {
        if (!find(this.$parent.columns, { label: this.label })) {
            this.$parent.columns.push(this)
        }
    },
    render (createElement) {
      return createElement('td', {
        'class': 'ai-table-column'
      }, this.$slots.default)
    }
}
</script>
