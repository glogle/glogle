export default [
  {
    path: '/',
    name: 'homePage',
    meta:{
      title: '首页'
    },
    component: resolve => require(['@/view/home/home.vue'],resolve),
    // children:[
    //   {
    //     path: '',
    //     name: 'homePage',
    //     meta:{
    //     title: '首页'
    //   },
    // ]
  }
]