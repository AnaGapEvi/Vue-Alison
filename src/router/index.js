import Vue from 'vue'
import Router from 'vue-router'
import Alison from '@/components/Alison'
import BuildCareer from "../components/careers/careers";
import Personality from "../components/personality/personality";
import Course from "../components/courses/course";
import Login from "../components/auth/Login";
import ForgotPassword from "../components/auth/forgotPassword";
import Register from "../components/auth/Register";
import BusinessContactUs from "../components/courses/BusinessContactUs";
import AuthHome from "../components/auth/AuthHome.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/:provider/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    },
    {path: '/', name: 'Alison', component: Alison  },
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register},
    {path: '/forgot', name: 'ForgotPassword', component: ForgotPassword},
    {path: '/dashboard', name: 'AuthHome', component: AuthHome},
    {path:'/business/contact-us', name: 'BusinessContactUs', component: BusinessContactUs },
    ... BuildCareer,
    ...Personality,
    ...Course
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})
