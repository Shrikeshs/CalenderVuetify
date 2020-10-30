import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueTextAreaAutoSize from "vue-textarea-autosize";
Vue.config.productionTip = false;
Vue.use(vueTextAreaAutoSize);
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDiir8Brpe_5yse2pONJMcQOiYllnqEXXM",
  authDomain: "calender-vue-b4f1b.firebaseapp.com",
  databaseURL: "https://calender-vue-b4f1b.firebaseio.com",
  projectId: "calender-vue-b4f1b",
  storageBucket: "calender-vue-b4f1b.appspot.com",
  messagingSenderId: "757669123299",
  appId: "1:757669123299:web:daa064f0a14637ef4361d6",
});
export const db = firebase.firestore();
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
