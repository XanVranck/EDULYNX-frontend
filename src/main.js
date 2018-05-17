import Vue from 'vue';
import Edulynx from './Edulynx.vue';
import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/black-green-light.css'
import router from './router/router.js'
import { MdList, MdIcon, MdSwitch, MdCheckbox, MdToolbar, MdContent, MdCard } from 'vue-material/dist/components';

Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdSwitch);
Vue.use(MdCheckbox);
Vue.use(MdToolbar);
Vue.use(MdContent);
Vue.use(MdCard);

Vue.config.productionTip = false;

new Vue({
    router,
  render: h => h(Edulynx)
}).$mount('#edulynx');
