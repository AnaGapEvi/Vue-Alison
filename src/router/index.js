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
import About from "../components/about/about.vue";
import OnlineLearning from "../components/about/OnlineLearning.vue";
import SelfPublishing from "../components/about/SelfPublishing.vue";
import Programmes from "../components/about/Programmes.vue";
import Empower from "../components/about/Empower.vue";
import Coronavirus from "../components/about/Coronavirus.vue";
import Publishers from "../components/about/Publishers.vue";
import Hubs from "../components/about/Hubs.vue";

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
    {path:'/our-story', name: 'About', component: About },
    {path:'/online-learning-app', name: 'OnlineLearning', component: OnlineLearning },
    {path:'/publish/self-publishing', name: 'SelfPublishing', component: SelfPublishing },
    {path:'/programmes', name: 'Programmes', component: Programmes },
    {path:'/empower', name: 'Empower', component: Empower },
    {path:'/coronavirus', name: 'Coronavirus', component: Coronavirus },
    {path:'/publishers', name: 'Publishers', component: Publishers },
    {path:'/hubs', name: 'Hubs', component: Hubs },
    ... BuildCareer,
    ...Personality,
    ...Course
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})
