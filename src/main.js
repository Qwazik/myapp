import Vue from "vue";
import './plugins/vuetify'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

var defaultAppConfig = {
  apiKey: "AIzaSyATEn9BzssOARBhRzEj4ThwjiJdCfEZxZw",
  authDomain: "myapp-6938a.firebaseapp.com",
  databaseURL: "https://myapp-6938a.firebaseio.com",
  projectId: "myapp-6938a",
  storageBucket: "myapp-6938a.appspot.com",
  messagingSenderId: "627327569198"
};
Vue.use(VueFire)
firebase.initializeApp(defaultAppConfig);
export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
