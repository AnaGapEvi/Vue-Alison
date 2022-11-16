<template>
  <div id="app">
    <nav-bar class="nav" v-if="$route.path !== '/login' && $route.path !== '/register'  && $route.path !== '/forgot'" :user=user />
    <header v-else id="header-simple" class="header-simple">
      log mi {{isLogin}}
      <div class="header-simple-logo-container">
        <router-link to="/" >
          <img src="https://alison.com/html/site/img/header/alison-free-courses.svg" alt="Free Online Courses, Classes and Tutorials">
        </router-link>
      </div>
    </header>
    <div v-if="$route.path ==='/' || $route.path === '/build-your-career' || $route.path=== '/earn-money'">
      <tab-nav></tab-nav>
    </div>
    <div class="cont">
     <router-view/>
   </div>
    <div v-if="$route.path !== '/login' && $route.path !== '/register'  && $route.path !== '/forgot' && $route.path !== '/business/contact-us'">
      <footer-bar ></footer-bar>
    </div>
  </div>
</template>

<script>
import Footer from "./components/custom/footer.vue";
import TabNav from "./components/custom/TabNav";
// import  _  from "lodash"
export default {
  name: 'App',
  components: {TabNav, Footer},
   data(){
    return{
      route:[ '', 'build-your-career', 'earn-money'],
      isLogin: false,
      user:{}
    }
   },
  mounted() {
    if (localStorage.getItem('access_token')){
      this.getAuth()
      }
  },
  methods: {
    getAuth() {
      return new Promise((resolve, reject) => {
        this.axios.get('/auth-user', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
          }
        })
          .then(result => {
            this.user = result.data.user
            console.log(this.user)
            resolve(true)
          }).catch(error => {
          reject(error, 'error')
        })

      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.nav{
  position: fixed;
}
.cont{
  padding-top: 58px;
}
.header-simple {
  background: #fff;
  box-shadow: 0 3px 6px rgb(0 0 0 / 8%);
  height: 58px;
  border-bottom: black 2px solid;
  padding: 10px 0;
}
</style>
