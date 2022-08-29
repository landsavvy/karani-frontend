import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import local from "./store/local"
import axios from "axios"
import mixins from "./store/mixins"
window.axios = axios

Vue.prototype.$axios = axios
Vue.config.productionTip = false;

Vue.mixin(mixins)
async function start() {
  let token = localStorage.getItem('authToken');
  if (token) {

    console.log("added token")
    await local.saveToken(token)
  }
  console.log("app initialized")
  await local.initSocket()
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app")
}
start()
