import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.use(VueFullPage);
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')