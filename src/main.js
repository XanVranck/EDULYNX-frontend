import Vue from 'vue';
import Edulynx from './Edulynx.vue';
import 'vue-material/dist/vue-material.min.css';
import router from './router/router.js'
import 'vue-material/dist/theme/black-green-dark.css'
import { MdList, MdIcon, MdSwitch, MdCheckbox, MdToolbar, MdContent, MdCard, MdButton, MdLayout } from 'vue-material/dist/components';
import StarRating from 'vue-star-rating';

Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdSwitch);
Vue.use(MdCheckbox);
Vue.use(MdToolbar);
Vue.use(MdContent);
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdLayout);
Vue.component('star-rating', StarRating);

Vue.config.productionTip = false;

new Vue({
    router,
  render: h => h(Edulynx)
}).$mount('#edulynx');
