import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Setting from '@/components/setting/setting.vue'
import Query from '@/components/query/query.vue'
import QueryDetail from '@/components/query-detail/query-detail.vue'
import DocxNotice from '@/components/docx-notice/docx-notice.vue'

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
    },
    {
      path: '/query',
      name: 'Query',
      component: Query
    },
    {
      path: '/query-detail',
      name: 'QueryDetail',
      component: QueryDetail
    },
    {
      path: '/docx-notice',
      name: 'DocxNotice',
      component: DocxNotice
    },
  ]
})
