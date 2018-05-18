import Vue from 'vue';
import Edulynx from './Edulynx.vue';
import 'vue-material/dist/vue-material.min.css';
import router from './router/router.js'
import 'vue-material/dist/theme/black-green-dark.css'
import VueMaterial from 'vue-material'
import StarRating from 'vue-star-rating';
import AddItemDialog from './components/AddItemDialog';

Vue.use(VueMaterial);
Vue.component('star-rating', StarRating);
Vue.component('add-item-dialog', AddItemDialog);

Vue.config.productionTip = false;

new Vue({
    router,
  render: h => h(Edulynx)
}).$mount('#edulynx');
