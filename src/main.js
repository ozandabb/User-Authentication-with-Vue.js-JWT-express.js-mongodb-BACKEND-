import Vue from 'vue'
import App from './App.vue'

import VueBootstrap from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueBootstrap)

new Vue({
  render: h => h(App),
}).$mount('#app')
