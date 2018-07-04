import Vue from 'vue';
import Login from './pages/login.vue';
import FindBack from './pages/findBackPass.vue';
import Register from './pages/register.vue';
import Api from './fetch/api.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';

Vue.prototype.api = Api;
Vue.use(ElementUI);
Vue.use(Router);

const router = new Router({
  routes:[
    {
      path: '/',
      component:Login,
      children:[
        {
          path: 'findBack',
          name: 'findBack',
          component: FindBack
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }]
    }
  ],
  mode:"history"
})

new Vue({
  router,
  el: '#app',
  render: h => h(Login)
})
