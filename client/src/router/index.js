import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home.vue'
const Chatting = () => import(/*webpackChunkName: 'Chatting'*/'../views/Chatting.vue')
const Room = () => import(/*webpackChunkName: 'Room'*/'../components/Room.vue')
const PrivateRoom = () => import(/*webpackChunkName: 'PrivateRoom'*/'../components/PrivateRoom.vue')
const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {requiresChat: true}
    },
    {
      path: '/chatting',
      component: Chatting,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          component: Room
        },
        {
          path: 'private',
          name: 'private',
          component: PrivateRoom
        }
      ]
    },
    
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
  } else if (to.matched.some(record => record.meta.requiresChat)) {
    if (sessionStorage.getItem('chat-user')) {
      next({path: '/chatting'})
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router