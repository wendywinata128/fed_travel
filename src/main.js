import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import store from "./store";
import "./assets/tailwind.css";

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
