import Vue from 'vue';
import Edulynx from './Edulynx.vue';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css' 
import { MdList, MdIcon, MdSwitch, MdCheckbox, MdToolbar } from 'vue-material/dist/components';

Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdSwitch);
Vue.use(MdCheckbox);
Vue.use(MdToolbar);

Vue.config.productionTip = false

new Vue({
  render: h => h(Edulynx)
}).$mount('#edulynx')
