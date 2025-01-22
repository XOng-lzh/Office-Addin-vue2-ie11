import Vue from "vue";
import App from "./App.vue";
import "babel-polyfill";
import "core-js";
import "regenerator-runtime/runtime";
import Es6Promise from "es6-promise";

Es6Promise.polyfill();
Vue.config.productionTip = false;

window.Office.onReady(() => {
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
});
