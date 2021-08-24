import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MinhasReceitas from '../views/MinhasReceitas.vue'
import Produto from "../views/Produto.vue"
import Login from '../views/Login.vue'
import CadastraReceita from "../views/CadastraReceita.vue"
import AtualizarReceita from "../views/AtualizarReceita.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/minhas-receitas',
    name: 'MinhasReceitas',
    component: MinhasReceitas
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/receita/:id',
    name: 'produto',
    component: Produto,
    props: true
  },
  {
    path: '/cadastrar-receita',
    name: 'cadastrar-receita',
    component: CadastraReceita,
  },
  {
    path: '/atualizar-receita',
    name: 'atualizar-receita',
    component: AtualizarReceita,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
