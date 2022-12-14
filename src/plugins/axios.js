import Vue from "vue";

import axios from "axios";
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin']='*';
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('access_token');

Vue.use(VueAxios, axios);


// Vue.config.productionTip = false;
// Vue.prototype.$http = axios;
// axios.defaults.timeout = 10000;
// axios.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.common["Authorization"] = token;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
//
// axios.interceptors.response.use(
//   response => {
//     if (response.status === 200 || response.status === 201) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   error => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         case 400:
//
//           //do something
//           break;
//
//         case 401:
//           alert("session expired");
//           break;
//         case 403:
//           router.replace({
//             path: "/login",
//             query: { redirect: router.currentRoute.fullPath }
//           });
//           break;
//         case 404:
//           alert('page not exist');
//           break;
//         case 502:
//           setTimeout(() => {
//             router.replace({
//               path: "/login",
//               query: {
//                 redirect: router.currentRoute.fullPath
//               }
//             });
//           }, 1000);
//       }
//       return Promise.reject(error.response);
//     }
//   }
// );
