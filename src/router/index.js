import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) =>{
  import('@/components/front/home/home.vue').then((module) =>{
      resolve(module)
  })
}

const HomeManage = (resolve) =>{
  import('@/components/back/home-manage/home-manage.vue').then((module) =>{
      resolve(module)
  })
}

const ProManage = (resolve) =>{
  import('@/components/back/pro-manage/pro-manage.vue').then((module) =>{
      resolve(module)
  })
}

const ResMange = (resolve) =>{
  import('@/components/back/res-pro/res-pro.vue').then((module) =>{
      resolve(module)
  })
}

const Setting = (resolve) =>{
  import('@/components/setting/setting.vue').then((module) =>{
      resolve(module)
  })
}

const Query = (resolve) =>{
  import('@/components/front/query/query.vue').then((module) =>{
      resolve(module)
  })
}

const QueryDetail = (resolve) =>{
  import('@/components/front/query/query-detail.vue').then((module) =>{
      resolve(module)
  })
}

const DocxNotice = (resolve) =>{
  import('@/components/front/docx-notice/docx-notice.vue').then((module) =>{
      resolve(module)
  })
}

const DocxDetail = (resolve) =>{
  import('@/components/front/docx-notice/docx-detail.vue').then((module) =>{
      resolve(module)
  })
}

const ResPro = (resolve) =>{
  import('@/components/front/res-pro/res-pro.vue').then((module) =>{
      resolve(module)
  })
}

const AddRespro = (resolve) =>{
  import('@/components/front/res-pro/add-respro.vue').then((module) =>{
      resolve(module)
  })
}

const ResAwards = (resolve) =>{
  import('@/components/front/res-awards/res-awards.vue').then((module) =>{
      resolve(module)
  })
}

const AddAwards = (resolve) =>{
  import('@/components/front/res-awards/add-awards.vue').then((module) =>{
      resolve(module)
  })
}

const AcadPapers = (resolve) =>{
  import('@/components/front/acad-papers/acad-papers.vue').then((module) =>{
      resolve(module)
  })
}

const AddPapers = (resolve) =>{
  import('@/components/front/acad-papers/add-papers.vue').then((module) =>{
      resolve(module)
  })
}

const Monographs = (resolve) =>{
  import('@/components/front/monographs/monographs.vue').then((module) =>{
      resolve(module)
  })
}

const AddMonog = (resolve) =>{
  import('@/components/front/monographs/add-monog.vue').then((module) =>{
      resolve(module)
  })
}

const IntelProp = (resolve) =>{
  import('@/components/front/intel-prop/intel-prop.vue').then((module) =>{
      resolve(module)
  })
}

const AddIntel = (resolve) =>{
  import('@/components/front/intel-prop/add-intel.vue').then((module) =>{
      resolve(module)
  })
}

const TechStand = (resolve) =>{
  import('@/components/front/tech-stand/tech-stand.vue').then((module) =>{
      resolve(module)
  })
}

const AddTech = (resolve) =>{
  import('@/components/front/tech-stand/add-tech.vue').then((module) =>{
      resolve(module)
  })
}

const CreatAchi = (resolve) =>{
  import('@/components/front/creat-achi/creat-achi.vue').then((module) =>{
      resolve(module)
  })
}

const AddCreat = (resolve) =>{
  import('@/components/front/creat-achi/add-creat.vue').then((module) =>{
      resolve(module)
  })
}

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
      path: '/home-manage',
      name: 'HomeManage',
      component: HomeManage
    },
    {
      path: '/home-manage/pro-manage',
      name: 'ProManage',
      component: ProManage
    },
    {
      path: '/home-manage/res-mange',
      name: 'ResMange',
      component: ResMange
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
      path: '/query/query-detail',
      name: 'QueryDetail',
      component: QueryDetail
    },
    {
      path: '/docx-notice',
      name: 'DocxNotice',
      component: DocxNotice
    },
    {
      path: '/docx-notice/docx-detail',
      name: 'DocxDetail',
      component: DocxDetail
    },
    {
      path: '/res-pro',
      name: 'ResPro',
      component: ResPro,
    },
    {
      path: '/res-pro/add-respro',
      name: 'AddRespro',
      component: AddRespro
    },
    {
      path: '/res-awards',
      name: 'ResAwards',
      component: ResAwards
    },
    {
      path: '/res-awards/add-awards',
      name: 'AddAwards',
      component: AddAwards
    },
    {
      path: '/acad-papers',
      name: 'AcadPapers',
      component: AcadPapers
    },
    {
      path: '/acad-papers/add-papers',
      name: 'AddPapers',
      component: AddPapers
    },
    {
      path: '/monographs',
      name: 'Monographs',
      component: Monographs
    },
    {
      path: '/monographs/add-monog',
      name: 'AddMonog',
      component: AddMonog
    },
    {
      path: '/intel-prop',
      name: 'IntelProp',
      component: IntelProp
    },
    {
      path: '/intel-prop/add-intel',
      name: 'AddIntel',
      component: AddIntel
    },
    {
      path: '/tech-stand',
      name: 'TechStand',
      component: TechStand
    },
    {
      path: '/tech-stand/add-tech',
      name: 'AddTech',
      component: AddTech
    },
    {
      path: '/creat-achi',
      name: 'CreatAchi',
      component: CreatAchi
    },
    {
      path: '/creat-achi/add-creat',
      name: 'AddCreat',
      component: AddCreat
    },
  ]
})
