import Vue from 'vue'
import App from './App.vue'

// import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router';
import login from './components/login.vue';
import hola from './components/hola.vue';
import componente from './components/componente.vue';
import inicio from './components/inicio.vue';
import admin from './components/admin.vue';
import Reservado from './components/Reservado.vue';
import register from './components/register.vue';
import regExitoso from './components/regExitoso.vue';
import loginadmin from './components/loginadmin.vue';
import pruebaModel from './components/prueba/pruebaModel.vue';


Vue.config.productionTip = false
Vue.use(VueRouter);
// Vue.use(BootstrapVue);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'
// los path son los google/ lo que se escribe en el buscador del link 
// {path: },
const routes = [
  {path: '/',component:inicio},
  {path: '/login/',name:'login', component:login},
  {path: '/hola',name: 'hola',component:hola},
  {path: '/hola/componente',component:componente},
  {path: '/admin',component:admin},
  {path: '/Reservado', component:Reservado},
  {path: '/register', component:register},
  {path: '/regExitoso', component:regExitoso},
  {path: '/admin', component:loginadmin},
  {path: '/modal', component:pruebaModel},
]

const router= new VueRouter({
  routes,
  mode: 'history'//para que no recargue la pagina al cambiar ruta 

})


new Vue({
  router,
 
  render: h => h(App),
}).$mount('#app')
