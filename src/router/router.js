import Vue from 'vue'
import Router from 'vue-router'
import Item from '../components/Item'
import Home from '../components/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/item', name: 'Item', component: Item}
  ]
});
