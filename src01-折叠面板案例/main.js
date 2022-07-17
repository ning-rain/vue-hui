import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PanelG from '@/components/PanelG.vue'
Vue.config.productionTip = false
Vue.component('PanelG', PanelG)
// Vue.component(PanelG)  全局组件不能采用简写
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
