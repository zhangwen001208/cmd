
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
        path: 'home',
        name: 'home',
        component:() => import('../views/home/home.vue')
      },
      {
        path: 'user',
        name: 'user',
        component:() => import('../views/user/user.vue')
      }


    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
