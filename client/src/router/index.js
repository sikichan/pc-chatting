import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home.vue'
const Chatting = () => import(/*webpackChunkName: 'Chatting'*/'../views/Chatting.vue')
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chatting',
      name: 'chatting',
      component: Chatting,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from ,next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!sessionStorage.getItem('chat-user')) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router