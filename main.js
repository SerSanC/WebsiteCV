import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import './bootstrap/resume.css'
import '../src/boostrap/vendor/jquery/jquery.min.js'
import "../src/boostrap/vendor/bootstrap/js/bootstrap.bundle.min.js"
import "../src/boostrap/vendor/jquery-easing/jquery.easing.min.js"
import "../src/boostrap/js/resume.min.js"
import "../src/boostrap/vendor/fontawesome-free/css/all.min.css"
import "../src/boostrap/vendor/bootstrap/css/bootstrap.min.css"
import "../src/boostrap/css/resume.min.css"
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')