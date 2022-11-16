<template >
  <div class="" style="width: 100%; z-index: 200; box-shadow: 0 3px 6px rgba(0,0,0,.08);" >
    <div style="width: 100%; box-shadow: 0 3px 6px rgba(0,0,0,.08); display: flex;align-items: center; background-color: white; padding: 5px; color:black">
      <b-navbar-brand href="#" style="width: 30%;padding: 5px ">
        <div style="display: flex; align-items: center" @click="closeAllmodals">
          <router-link to="/" style="line-height: 0;text-decoration: none" >
            <img src="https://alison.com/html/site/img/header/alison-free-courses.svg" width="100%;"/>
            <p style="font-size: 10px; color: black">EMPOWER YOURSELF</p>
          </router-link>
          <b-nav-form style="display: flex">
            <div style="display: flex; margin-left: 15px">
                <b-form-input placeholder="What do you want to learn?" style="border-radius: 5px 0 0 5px" v-model.trim="search" autocomplete="off" :result="searchResult" v-on:keyup="searchProducts" ></b-form-input>
                <b-button variant="dark" style="border-radius: 0 5px 5px 0" type="submit" @click.prevent="searchItemCourse()">
                  <b-icon icon="search"></b-icon>
                </b-button>
            </div>
          </b-nav-form>
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse"  style="width: 70%; display: flex;align-items: center; justify-content: space-between;align-items: center">
        <div style="display: flex; width: 60% ; ">
            <button class="btn" @click="backOpenModal()" style="outline: none; font-size: 14px">
              Explore Diplomas & Certificates
              <b-icon icon="caret-down-fill" style="font-size: 10px" ></b-icon>
            </button>
           <modal-direction v-if="modalOpen" :open="openModal"></modal-direction>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <b-nav-item href="#">
                <router-link to="/careers" class="discover-careers" style="text-decoration: none; display: flex; font-size: 14px; justify-content: space-between; color: #465159">
                  Discover Careers
                </router-link>
              </b-nav-item>
              <b-navbar-nav class="ml-auto">
                  <button class="btn" @click="backModalMore()" style="outline: none; font-size: 14px">More<b-icon icon="caret-down-fill" style="font-size: 10px" ></b-icon>       </button>
                  <more-modal v-if="backMore"  :moreModal="backMoreModal" ></more-modal>
<!--                <b-button id="show-modal" @click="showModalLogin = true" class="login-btn">Log In</b-button>-->
<!--                <Login v-if="showModalLogin" class="modal-mask" :showModalLog="backLog"></Login>-->
              </b-navbar-nav>
            </div>
        </div>
        <b-nav-item style=" display: flex; width: 40%; justify-content: flex-end">
          <div style="display: flex; width: 100%; justify-content: space-between;">
            <div class="dollar" @click="showDollar = !showDollar">
              <b-icon icon="currency-dollar" class="dollar-icon" ></b-icon>
            </div>
            <dollar-modal v-if="showDollar" :dollar="showModalDollar" class="modal-dollar"></dollar-modal>
            <div style="display: flex; height: 100%" v-if="email===''">
              <b-button id="show-modal" @click="showModalLogin = true" class="login-btn">Log In</b-button>
              <Login v-if="showModalLogin" class="modal-mask" :showModalLog="backLog" :closeLog="closeLog"></Login>
              <b-button id="show-modal-register" @click="showModalRegister = true" class="register-btn">Sign Up</b-button>
              <Register v-if="showModalRegister" class="modal-mask" :showModal="back" :close="close"> </Register>
              <div
                style="width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid black">
                <b-icon icon="globe2" variant="dark"></b-icon>
              </div>
            </div>
            <div v-else style="display: flex; align-items: center; ">
              <button class="auth-btn">
                 <b-icon icon="play-circle"></b-icon>
                <a href="https://alison.com/resume/courses" title="Continue Learning" class="header__user-continue">
                  <span class="icon-start-topic"></span> Continue Learning
                </a>
              </button>
              <button class=person @click="openAuth()"></button>
              <user-tabmenu v-if="authModal"  :authModal="openAuth" :logout="logout"></user-tabmenu>
            </div>

          </div>
        </b-nav-item>
      </b-collapse>
    </div>
    <ul v-if="courses.length>0" class="search-name" >
      <li v-for="course in courses" v-model="search" @click="searchName(course.name)" :key="course.id" style="display:flex; align-items: center">
        <div class="li-container">
          <div class="loopa">
              <img src='data:image/jpeg;base64,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'>
          </div>
        </div>
        <p @click="searchItemCourse()" style="cursor: pointer; padding-right: 7px">{{course.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import ModalDirection from "../custom/Modal";
import Login from "../auth/Login";
import Register from "../auth/Register";
import axios from "axios";
import UserTabmenu from './userTabmenu.vue';
import DollarModal from "./dollarModal.vue";

export default {
  name: "navbar",
  components: {
    DollarModal,
    Register,
    Login,
    ModalDirection,
    UserTabmenu
  },
  data() {
    return {
      showDollar:false,
      backMore: false,
      modalOpen: false,
      authModal:false,
      showModalLogin: false,
      showModalRegister:false,
      searchResult:"",
      courses:[],
      search:'',
      email:'',
      error:'',
      // user:this.user
    }
  },
  watch: {
    valueSearch(newValue, old){
      this.getAuth()
    }
  },
  computed: {
    valueSearch() {
      this.getAuth()
      return this.email;
    }
  },
  // watcher(){
  //   this.getAuth()
  // },
  // mounted() {
  //   if (localStorage.getItem('access_token')){
  //     this.getAuth()
  //   }
  // },
  methods: {
    closeAllmodals(){
      this.backMore = false
      this.modalOpen = false
      this.showDollar=false
      this.authModal=false
    },
    close(){
      this.showModalLogin = true
      this.showModalRegister =false
    },
    closeLog(){
      this.showModalLogin = false
      this.showModalRegister = true
    },
    backModalMore(){
      this.modalOpen=false
      this.authModal=false
      this.showDollar=false
      this.backMore=!this.backMore
    },
    searchItemCourse(){
      if(this.search!='') {
        this.$router.push({name: "SearchResult", query: {search: this.search}})
        this.search = ''
        this.courses = []
      }
    },
    back(){
      this.showModalRegister=!this.showModalRegister
    },
    showModalDollar(){
      this.modalOpen=false
      this.backMore=false
      this.authModal=false
      this.showDollar=!this.showDollar
    },
    backLog(){
      this.showModalLogin=!this.showModalLogin
    },
    backMoreModal(){
      this.modalOpen=false
      this.showDollar=false
      this.authModal=false
      this.backMore=!this.backMore
    },
    openAuth(){
      this.modalOpen=false
      this.backMore = false
      this.showDollar=false
      this.authModal=!this.authModal
    },
    openModal() {
      this.backMore = false
      this.showDollar=false
      this.authModal=false
      this.modalOpen = !this.modalOpen;
    },
    backOpenModal(){
      this.backMore = false
      this.authModal=false
      this.showDollar=false
      this.modalOpen = !this.modalOpen;
    },
    searchProducts(){
      if(this.search!=='') {
        axios.get(`/find-search-course-name/${this.search}`).then(resp => {
          this.courses = resp.data
        }).catch(e => {
          this.courses = []
          this.error = e.data.message
        })
      }else {
          this.courses=[]
       }
    },
    searchName(item){
      this.search=item
      this.courses=[]
    },
    logout(){
      axios.get('/logout').then(result => {
        localStorage.removeItem('access_token');
        this.email=''
        this.$router.push({path: "/"});
      }).catch(error => {
        return error
      })
    },
    getAuth(){
      return new Promise((resolve, reject) => {
        axios.get('/auth-user', {
          headers: {
            Authorization: 'Bearer '+localStorage.getItem('access_token')
          }
        })
          .then(result => {
            // this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.token;
            this.email = result.data.user.firstname
            resolve(true)
          }).catch(error => {
          reject(error)
        })

      })
    },
  }
}
</script>

<style scoped>
.search-name::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.search-name{
  min-width: 285px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 8%);
  text-decoration: none;
  background: white;
  z-index: 10000;
  position: absolute;
  top: 65px;
  left: 131px;
  max-height: 500px;
  overflow-y: auto;;
}

ul {
padding: 10px 0;
}

ul li{
  list-style: none;
  text-align: left;
  padding: 5px 0;
  border-bottom: 1px solid lightgray ;
  margin: 0 !important;
}
.li-container{
 display: flex;
 width: auto;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 5px;
}
p {
  margin: 0;
}
.loopa {
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loopa img{
  width: 15px;
  height: 15px;
}
.person{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  border: 2px solid gray;
  background-image: url("https://alison.com/images/users/default/26681657.jpg");
  background-size: cover;
}
ul li:hover{
  color: #006c94;
}
.discover-careers{
  text-decoration: none;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  color: #465159
}
.discover-careers:hover{
  color: black;
}
.dollar{
  margin-right: 15px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #cb6c0e;
  transition: all .25s ease-in;
}
.dollar .dollar-icon{
  color: #cb6c0e;
  font-weight: 700;
}
.dollar:hover{
  background:#cb6c0e;
}
.dollar:hover .dollar-icon{
  color:white;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-dollar {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 10px;
  right: 10px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
h5 {
  color: #5d676e;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
  width: 100%;
}
.login-btn:hover{
  color: #6ea21f;
  background: none;
  border: none;
}
.login-btn{
  color: #83c11f;
  margin-right: 24px;
  background: none;
  border: none;
  font-weight: 700;
}
p {
  line-break: auto;
}
.register-btn{
  background: #83c11f;
  border-radius: 25px;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  margin-right: 13px;
  padding: 7px 27px 8px;
  border: none;
  transition: all .25s ease-in;
}
.register-btn:hover {
  background-color: #6ea21f;
}
.auth-btn{
    background-color: #fff;
    border: 1px solid #83c11f;
    border-radius: 25px;
    color: #83c11f;
    font-size: 14px;
    font-weight: 500;
    margin-right: 14px;
    padding: 9px 19px 9px 11px;
    transition: all .3s ease-in;
}
.auth-btn a{
  text-decoration: none;
  color:#83c11f;
}
.auth-btn:hover{
  background-color: #83c11f;
    border: 1px solid #83c11f;
    border-radius: 25px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-right: 14px;
    padding: 9px 19px 9px 11px;
    transition: all .3s ease-in;
}
.auth-btn:hover a{
  color:#fff;
}
</style>
