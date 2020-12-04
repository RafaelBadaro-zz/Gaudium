import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Pagamentos from './components/Pagamentos.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/pagamentos', component: Pagamentos },
  { path: '*', component: Main },
  { path: '/', component: Main },
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
