import Vue from 'vue';
import Edulynx from './Edulynx.vue';
import 'vue-material/dist/vue-material.min.css';
import { MdList, MdIcon, MdSwitch, MdCheckbox } from 'vue-material/dist/components';

Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdSwitch);
Vue.use(MdCheckbox);

Vue.config.productionTip = false

Vue.component('Menu', require('./components/Menu.vue'));

new Vue({
  render: h => h(Edulynx)
}).$mount('#edulynx')
