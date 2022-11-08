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
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
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
