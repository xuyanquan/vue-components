

<template>
    <div :class="['ai-tooltip']" ref="wrap">
        <slot></slot>
        <div :class="['tool-tip', pos]" ref="tip">
            <span class="tip-triangle"></span>
            <div class="tip-text">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ai-tooltip',
        props: {
            pos: {type: String, default: 'left'},
            text: {type: String, default: ''}
        }
    }
</script>
