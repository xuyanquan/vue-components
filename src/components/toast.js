
export default {
  StrToHtml (fragment = '') {
    let vm = document.createElement('div')
    vm.innerHTML = fragment
    return vm.firstChild
  },
  install (Vue) {
    let vm = this.StrToHtml(`<div id="ai-toast" class="ai-toast"></div>`)
    document.body.appendChild(vm)
    
    Vue.prototype.$toast = (text = '', type = '', delay = 2000) => {
      let conVM = this.StrToHtml(
      `<div>
        <div class="content">
            <span class="icon ${type}"></span>
            <span class="text ${type}">${text}</span>
        </div>
      </div>
      `)
      vm.appendChild(conVM)
      setTimeout(() => conVM.remove(), delay);
    }
  }
}
