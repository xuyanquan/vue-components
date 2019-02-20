<template>
  <div class="ai-upload">
    <slot></slot>
    <input ref="input" type="file" @change="handleChange" :accept="accept" class="ai-upload-input" />
  </div>
</template>

<script>
  export default {
    name: 'ai-upload',
    props: {
      url: {type: String, default: '', required: true},
      limit: {type: Number, default: 1024 * 1024, required: false},
      accept: {type: String, default: null, required: false},
      preUpload: {type: Function, default: null, required: false}
    },
    data() {
      return {
        xhr: new XMLHttpRequest(),
        name: '',
        fileList: null
      }
    },
    created() {
      this.xhr.withCredentials = true
      this.xhr.upload.addEventListener('progress', this.updateProgress)
      this.xhr.upload.addEventListener('loadstart', this.transferLoadStart)
      this.xhr.upload.addEventListener('loadend', this.transferLoadEnd)
    },
    methods: {
      handleChange (event) {
        this.fileList = event.target.files
        if (this.fileList) {
          if (this.fileList[0].size > this.limit) {
            return this.$emit('error', 1)
          } else if (this.accept) {
            let reg = new RegExp(`(${this.accept.split(',').join('|')})$`,'i')
            if (!reg.test(this.fileList[0].name)) {
              return this.$emit('error', 2)
            }
          }
        }
        this.upload()
      },
      upload () {
        if (this.preUpload && !this.preUpload()) {
          return
        }
        this.xhr.open('POST', this.url, true)
        this.xhr.onreadystatechange = this.onreadystatechange
        let fd = new FormData()
        fd.append('file', this.fileList[0])
        fd.append('name', this.fileList[0].name)
        this.xhr.send(fd)
      },
      onreadystatechange () {
        if (this.xhr.readyState === 4) {
          this.$emit('success', JSON.parse(this.xhr.response))
          this.$refs.input.value = ''
          this.fileList = null
        }
      },
      updateProgress (e) {
        if (e.total > 0) {
          this.$emit('progress', e.loaded / e.total * 100)
        }
      },
      transferLoadStart () {
        this.$emit('loadstart', this.fileList[0])
      },
      transferLoadEnd () {
        this.$emit('loadend', this.fileList[0])
      }
    }
  }
</script>
