import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './Routes/index.routes'


import VueBootstrap from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueBootstrap)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
