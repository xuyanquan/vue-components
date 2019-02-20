export default {
    name: 'ai-router-item',
    props: {
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false }
    },
    methods: {
        navigate() {
            if (this.href) {
                if (this.target === '_blank')
                    return window.open(this.href, this.target)
                else
                    return window.location.href = this.href
            }

            if (this.to === undefined)
                return

            if (!this.$router)
                return false//console.warn('Use `<ai-router-item>` but cannot find vue router.')

            let cancel = false
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                preventDefault: () => cancel = true,
            })
            if (cancel)
                return

            const $router = this.$router
            const { location } = $router.resolve(this.to, $router, this.append)
            this.replace ? $router.replace(location) : $router.push(location)

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace
            })
        },
    },
}
