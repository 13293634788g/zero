import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import Myplugin from "@/Myplugin/Myplugin.js"
import "./style/index.css" //引入全局样式
Vue.use(Myplugin)
Vue.use(ElementUI);
// 拦截axios
if(process.env.NODE_ENV==="development"){
  require("./Mock/index")
}
Vue.config.productionTip = false;
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)