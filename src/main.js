import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import store from "./store";
import "./assets/tailwind.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false;
new Vue({
  created() {
    AOS.init({
      duration: 1000,
    });
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
