import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav/nav.vue'
import Home from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
