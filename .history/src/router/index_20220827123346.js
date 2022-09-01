
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '',
        name: 'home',
       
        component:() => import('../views/home/home.vue')
      },
      {
        path: '/user',
        name: 'user',
        component:() => import('../views/user/user.vue')
      },
      {
        path: '/mall',
        name: 'mall',
        component:() => import('../views/mall/mall.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component:() => import('../views/other/pageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2  ',
        component:() => import('../views/other/pageTwo.vue')
      }



    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




const VueRouterPush = VueRouter.prototype.VueRouterPush
VueRouter.prototype.VueRouterPush = function push (location) {
  return  VueRouterPush.call(this, location).catch(err => err)
}


export default router
