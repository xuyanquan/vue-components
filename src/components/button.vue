<script>
  export default {
    name: 'ai-button',
    render (createElement) {
      return createElement('a', {
        'class': ['ai-button', 'size-' + this.size, 'color-' + this.colorClass],
        on: { click: e => !this.disabled && this.$emit('click', e) },
      }, this.$slots.default)
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'm'
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      colorClass () {
        return this.disabled ? `${this.color}-disabled` : this.color
      }
    }
  }
</script>
