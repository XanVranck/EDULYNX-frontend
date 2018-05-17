import Vue from 'vue'
import Router from 'vue-router'
import Edulynx from '@/Edulynx'
import Home from '../components/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Edulynx', component: Edulynx},
    {path: '/home', name: 'Home', component: Home},
  ]
});
