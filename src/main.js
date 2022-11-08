// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueCarousel from 'vue-carousel';
import Vuesax from 'vuesax'
import vsButton from "vuesax";
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'
import VueSocialauth from 'vue-social-auth'


Vue.use(Vuesax)
Vue.use(vsButton)
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: '623424837790-4re684v9gip1nnojpmbhui324b1i4h46.apps.googleusercontent.com',
      client_secret: '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',
      // redirectUri: 'https://vue-alison-auth.herokuapp.com/auth/google/callback',
      redirectUri: 'http://localhost:8080/auth/google/callback',
    },
    facebook: {
      clientId: '657624482470751',
      client_secret: '239596347338ded2545a05f53cc42170',
      // redirectUri: 'http://localhost:8080/auth/facebook/callback'
      redirectUri: 'https://vue-alison-auth.herokuapp.com/auth/facebook/callback',
    },
  }
});

require('./plugins')

require('./components/custom/index')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  activeClass: 'active-link',
  components: { App },
  template: '<App/>'
})
