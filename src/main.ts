import 'babel-polyfill'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading: require('./common/images/default.png')
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
