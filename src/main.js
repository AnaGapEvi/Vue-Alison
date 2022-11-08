import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import vsButton from "vuesax";
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'
import VueSocialauth from 'vue-social-auth'
import {env} from "shelljs";

Vue.use(Vuesax)
Vue.use(vsButton)

console.log({clientId: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI})
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: '623424837790-4re684v9gip1nnojpmbhui324b1i4h46.apps.googleusercontent.com',
      client_secret: "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",
      redirectUri: "https://vue-alisonproject-auth.herokuapp.com/auth/google/callback",
      // redirectUri: 'http://localhost:8080/auth/google/callback',
    },
    facebook: {
      clientId: process.env.FACEBOOK_ID,
      client_secret: process.env.FACEBOOK_SECRET,
      // redirectUri: 'http://localhost:8080/auth/facebook/callback'
      redirectUri: process.env.FACEBOOK_REDIRECT
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
