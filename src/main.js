/*!

 =========================================================
 * Vue Paper Dashboard - v1.0.1
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate';
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";


Vue.use(VeeValidate);
Vue.use(PaperDashboard);
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
