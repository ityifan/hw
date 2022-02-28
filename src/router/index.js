import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path: '/registered',
    name: 'registered',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisteredView')
  }
  ,
  {
    path: '/mian',
    name: 'mian',
    component: () => import(/* webpackChunkName: "about" */ '../views/MianView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
