import { createRouter, createWebHistory } from 'vue-router'
const routes=[
  {
    name:'fontpages',
    path:'/home',
    component:()=>import('../views/fontpages.vue')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})
export default router
