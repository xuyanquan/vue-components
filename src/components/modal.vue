<template>
    <div class="ai-modal-wrap">
        <div class="ai-modal">
            <div class="title">{{title}}<span class="close" @click="$emit('cancel')">X</span></div>
            <div :style="conSty" class="content">
                <div class="sub-title" v-if="subTitle">{{subTitle}}</div>
                <slot></slot>
            </div>
            <div  class="ai-modal-ops">
                <div v-if="$listeners.confirm || $listeners.cancel">
                    <ai-button v-if="$listeners.cancel" @click="$emit('cancel')" size="m" color="white">取消</ai-button>
                    <ai-button v-if="$listeners.confirm" @click="$emit('confirm')" class="comfirm" size="m" color="primary">确认</ai-button>
                </div>
                <div v-else-if="$listeners.ok" style="text-align: center;">
                  <ai-button v-if="$listeners.ok" @click="$emit('ok')" size="m" color="primary">{{okText}}</ai-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ai-modal',
    props: {
        title: { type: String, default: '提示' },
        subTitle: { type: String, default: '' },
        okText: { type: String, default: '确定' },
        height: { type: String, default: 'auto' },
        width: { type: String, default: 'auto' },
        align: { type: String, default: 'center' } // 内容对齐方式
    },
    computed: {
        conSty () {
            return {
                textAlign: this.align,
                height: this.height,
                width: this.width
            }
        }
    },
    mounted () {
        document.body.appendChild(this.$el)
    }
}
</script>
