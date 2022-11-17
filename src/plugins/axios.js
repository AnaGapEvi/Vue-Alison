import Vue from "vue";

import axios from "axios";
import VueAxios from 'vue-axios'
import router from "../router";
import App from "../App.vue";

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin']='*';
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('access_token');

// axios.interceptors.request
// axios.interceptors.response
Vue.use(VueAxios, axios);


this.axios.interceptors.response.use(
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
  methods: {
    refreshToken: function() {
      console.log('refreshing the token');
    }
  }
})
