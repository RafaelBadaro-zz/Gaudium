import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Pagamentos from './components/Pagamentos.vue'
import EmConstrucao from './components/EmConstrucao.vue'
import Comunicacao from './components/Comunicacao.vue'
import Servicos from './components/Servicos.vue'
import Comida from './components/Comida.vue'
import Noticias from './components/Noticias.vue'
import Shopping from './components/Shopping.vue'
import Tempo from './components/Tempo.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/pagamentos', component: Pagamentos },
  { path: '*', component: Main },
  { path: '/', component: Main },
  { path: '/home', component: Main },
  { path: '/construcao', component: EmConstrucao },
  { path: '/comunicacao', component: Comunicacao },
  { path: '/servicos', component: Servicos },
  { path: '/comida', component: Comida },
  { path: '/noticias', component: Noticias },
  { path: '/shopping', component: Shopping },
  { path: '/tempo', component: Tempo },
  
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
