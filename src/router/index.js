import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Setting from '@/components/setting/setting.vue'

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
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
