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

const AwardsMange = (resolve) =>{
  import('@/components/back/res-awards/res-awards.vue').then((module) =>{
      resolve(module)
  })
}

const PapersMange = (resolve) =>{
  import('@/components/back/acad-papers/acad-papers.vue').then((module) =>{
      resolve(module)
  })
}

const MonogMange = (resolve) =>{
  import('@/components/back/monographs/monographs.vue').then((module) =>{
      resolve(module)
  })
}

const IntelManage = (resolve) =>{
  import('@/components/back/intel-prop/intel-prop.vue').then((module) =>{
      resolve(module)
  })
}

const StandManage = (resolve) =>{
  import('@/components/back/tech-stand/tech-stand.vue').then((module) =>{
      resolve(module)
  })
}

const CreatManage = (resolve) =>{
  import('@/components/back/creat-achi/creat-achi.vue').then((module) =>{
      resolve(module)
  })
}

const ProQueryManage = (resolve) =>{
  import('@/components/back/query/pro-query/pro-query.vue').then((module) =>{
      resolve(module)
  })
}

const RewQueryManage = (resolve) =>{
  import('@/components/back/query/reward-query/reward-query.vue').then((module) =>{
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
      path: '/home-manage/awards-mange',
      name: 'AwardsMange',
      component: AwardsMange
    },
    {
      path: '/home-manage/acad-papers',
      name: 'PapersMange',
      component: PapersMange
    },
    {
      path: '/home-manage/monographs',
      name: 'MonogMange',
      component: MonogMange
    },
    {
      path: '/home-manage/intel-prop',
      name: 'IntelManage',
      component: IntelManage
    },
    {
      path: '/home-manage/tech-stand',
      name: 'StandManage',
      component: StandManage
    },
    {
      path: '/home-manage/creat-achi',
      name: 'CreatManage',
      component: CreatManage
    },
    {
      path: '/home-manage/pro-query',
      name: 'ProQueryManage',
      component: ProQueryManage
    },
    {
      path: '/home-manage/reward-query',
      name: 'RewQueryManage',
      component: RewQueryManage
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/home/query',
      name: 'Query',
      component: Query
    },
    {
      path: '/home/query/query-detail',
      name: 'QueryDetail',
      component: QueryDetail
    },
    {
      path: '/home/docx-notice',
      name: 'DocxNotice',
      component: DocxNotice
    },
    {
      path: '/home/docx-notice/docx-detail',
      name: 'DocxDetail',
      component: DocxDetail
    },
    {
      path: '/home/res-pro',
      name: 'ResPro',
      component: ResPro,
    },
    {
      path: '/home/res-pro/add-respro',
      name: 'AddRespro',
      component: AddRespro
    },
    {
      path: '/home/res-awards',
      name: 'ResAwards',
      component: ResAwards
    },
    {
      path: '/home/res-awards/add-awards',
      name: 'AddAwards',
      component: AddAwards
    },
    {
      path: '/home/acad-papers',
      name: 'AcadPapers',
      component: AcadPapers
    },
    {
      path: '/home/acad-papers/add-papers',
      name: 'AddPapers',
      component: AddPapers
    },
    {
      path: '/home/monographs',
      name: 'Monographs',
      component: Monographs
    },
    {
      path: '/home/monographs/add-monog',
      name: 'AddMonog',
      component: AddMonog
    },
    {
      path: '/home/intel-prop',
      name: 'IntelProp',
      component: IntelProp
    },
    {
      path: '/home/intel-prop/add-intel',
      name: 'AddIntel',
      component: AddIntel
    },
    {
      path: '/home/tech-stand',
      name: 'TechStand',
      component: TechStand
    },
    {
      path: '/home/tech-stand/add-tech',
      name: 'AddTech',
      component: AddTech
    },
    {
      path: '/home/creat-achi',
      name: 'CreatAchi',
      component: CreatAchi
    },
    {
      path: '/home/creat-achi/add-creat',
      name: 'AddCreat',
      component: AddCreat
    },
  ]
})
