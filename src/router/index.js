
import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//即路由地址为’ / ’ 的页面，重复点击后重定向到的页面依然是Home页面，也就是所谓的产生了冗余导航，
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return  VueRouterPush.call(this, location).catch(err => err)
}


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



    ],
    
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('../views/login/login.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  store.commit('getToken')
  
  const token = store.state.admin.token
  if(! token && to.name != 'login') {
    next({name: 'login'})
  }else if(token && to.name == 'login') {
    next({name: 'home'})
}else {
  next()
}

})






export default router
