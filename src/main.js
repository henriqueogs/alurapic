import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:9001/';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VeeValidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
