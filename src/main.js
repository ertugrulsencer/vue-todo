import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue();

new Vue({
  el: "#todoApp",
  render: h => h(App)
});
