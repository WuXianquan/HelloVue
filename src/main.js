import Vue from 'vue';
import Login from './pages/Login.vue';
import api from './fetch/api.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';

Vue.prototype.api = api;
Vue.use(ElementUI);
Vue.use(Router);

new Vue({
  el: '#app',
  render: h => h(Login)
})
