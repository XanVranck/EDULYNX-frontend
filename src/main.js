import Vue from 'vue';
import App from './App.vue';
import 'vue-material/dist/vue-material.min.css';
import { MdList, MdIcon, MdSwitch, MdCheckbox } from 'vue-material/dist/components';

Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdSwitch);
Vue.use(MdCheckbox);

Vue.config.productionTip = false

Vue.component('edulynxMenu', require('./components/EDULYNX-Menu.vue'));

new Vue({
  render: h => h(App)
}).$mount('#app')
