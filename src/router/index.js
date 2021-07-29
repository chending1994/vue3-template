import { createRouter, createWebHashHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta: {
        index: 2
      }
    }
  ]
})

export default router
