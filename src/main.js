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
      clientId: '623424837790-4re684v9gip1nnojpmbhui324b1i4h46.apps.googleusercontent.com',
      client_secret: "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",
      redirectUri: "https://vue-alisonproject-auth.herokuapp.com/auth/google/callback",
    },
    facebook: {
      clientId: "657624482470751",
      client_secret: "239596347338ded2545a05f53cc42170",
      redirectUri: "https://vue-alisonproject-auth.herokuapp.com/auth/facebook/callback"
    },
  }
});

require('./plugins')

require('./components/custom/index')

Vue.config.productionTip = false

window.axios.interceptors.response.use(
  response => response,
  error => {
    // Show the user a 500 error
    if (status >= 500) {
      console.log({500:error});
    }

    // Handle Session Timeouts
    if (status === 401) {
      console.log({401:error});
      app.refreshToken();
    }

    // Handle Forbidden
    if (status === 403) {
      console.log({403:error});
    }

    return Promise.reject(error)
  }
);
new Vue({
  el: '#app',
  router,
  activeClass: 'active-link',
  components: { App },
  template: '<App/>',
  methods:{
    methods: {
      refreshToken: function() {
        console.log('refreshing the token');
      }
    }

  }
})
