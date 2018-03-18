import Vue from 'vue'
import Router from 'vue-router'
import ManageHome from '@/components/manage-home/manage-home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/manage-home',
      component: ManageHome
    },
    {
      path: '/manage-home',
      name: 'ManageHome',
      component: ManageHome
    }
  ]
})
