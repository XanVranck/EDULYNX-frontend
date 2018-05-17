import Vue from 'vue'
import Router from 'vue-router'
import Edulynx from '@/Edulynx'



Vue.use(Router)

const router =  new Router({
  routes: [
    {path: '/', name: 'Edulynx', component: Edulynx},
    {path: '/home', name: 'Edulynx', component: Edulynx}
  ]
})

export default router