const Home = () => import('../views/Home.vue')
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
export default router