import Vue from "vue";

import axios from "axios";
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin']='*';
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('access_token');

// axios.interceptors.request
// axios.interceptors.response
Vue.use(VueAxios, axios);
