<template>
    <div class="login-section" @click.self="showModalLog">
      <div class="sign-in">
        <div class="login-left">
          <h1>Welcome Back!</h1>
          <p class="sub-msg">What will you learn today? Find out, with Alison.</p>
        </div>
        <div class="login-right">
          <div class="tabs">
            <div class="active signup" v-if="$route.path === '/login' "><router-link  to="/register" >Sign Up</router-link></div>
            <div class="active" v-else><button class="btn-signup" @click="closeLog" style="color: gray">Sign Up</button></div>
            <div class="login">Log In</div>
          </div>
          <div class="login-inner-tabs">
            <div class="login-inner-left">
              <div class="section">
                <div class="social-login">
                  <a @click.prevent="AuthProvider('facebook')" >
                    <div>
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/facebook-square.svg"/>
                    </div>
                    Continue with Facebook
                  </a>
                </div>
                <div class="social-login">
                  <a @click.prevent="AuthProvider('google')" >
                    <div>
                      <img src="https://alison.com/html/site/img/header/google-square.svg"/>
                    </div>
                    Continue with Google
                  </a>
                  <div id="google-custom" style="display:none;"></div>
                </div>
              </div>
              <div id="login-buttons">
                  Don't have an Alison account? <router-link to="/login">Sign Up </router-link>
              </div>
              <div class="or-line">
                <span>OR</span>
              </div>
            </div>
            <div class="login-inner-right">
              <div class="form-group ">
                <validation-observer ref="observer">
                  <b-form style="position: relative">
                    <validation
                      name="email"
                      rules="required|email"
                    >
                      <b-form-group
                        label-class="form-label"
                        label-for="email"
                        slot-scope="{ errors }"
                        :invalid-feedback="errors[0]"
                      >
                        <b-form-input
                          id="email"
                          style="border: 1px solid gray; border-radius: 5px; width: 100%; display: inline-block"
                          v-model="form.email"
                          :state="errors[0] ? false : null"
                          trim
                        />
                      </b-form-group>
                    </validation>
                    <validation
                      name="password"
                      rules="required|min:6"
                      class="group"
                    >
                      <b-form-group
                        label-class="form-label "
                        label-for="password"
                        slot-scope="{ errors }"
                        :invalid-feedback="errors[0]"
                      >
                        <b-form-input
                          id="password"
                          v-model="form.password"
                          :type="passwordFieldType"
                          :state="errors[0] ? false : null"
                          trim
                          style="border: 1px solid gray; border-radius: 0 5px 5px 0; width: 90%; display: inline-block"
                        />
                        <vs-button transparent icon="visibility" @click.prevent="show()" class="ic" ></vs-button>
                      </b-form-group>
                    </validation>
                    <router-link style="color: #83c11f; font-size: 13px; text-decoration: none" to="/forgot">Forgot password?</router-link>
                    <span style="color: #e59898" v-if="error!==''">{{error}}</span>
                    <div style="position: relative; height: 100px">
                      <img style="position: absolute;z-index: 100; bottom: 30px; left: 50%" src="https://cdn01.alison-static.net/public/html/site/img/header/pointer.svg">
                      <button class="sub-log"  @click.prevent="login_user()">Log In</button>
                    </div>
                  </b-form>
                </validation-observer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Register from "./Register.vue";
export default {
  name: "Login",
  components: {Register},
  props:['showModalLog', 'closeLog'],
  data(){
    return {
      max: 10,
      form:{
        email:'',
        password:null,
      },
      error:'',
      passwordFieldType: "password",
      showModalRegister:false,
    }
  },
  methods:{
    back(){
      this.showModalRegister=!this.showModalRegister
      this.showModalLog = false
    },
    AuthProvider(provider) {
      console.log(provider)
      var self = this
      this.$auth.authenticate(provider).then(response =>{
        self.SocialLogin(provider,response)
      }).catch(err => {
         return {err:err}
      })
    },
    SocialLogin(provider,response){
      this.$http.post('/auth/'+provider, response).then(resp => {
        this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.token;
        localStorage.setItem('access_token', resp.data.token);
        this.showModalLog()
        this.$router.push({path: "/dashboard"})
        // window.location.reload()
      }).catch(err => {
        console.log({err:err})
      })
    },
    login_user() {
      // if(this.form.email !== "" && this.form.password !== "") {
          return new Promise((resolve, reject) => {
            this.axios.post('/login', this.form)
              .then(result => {
                localStorage.setItem('access_token', result.data.token);
                resolve(true)
                this.showModalLog()
                this.$router.push({path: "/dashboard"})
                // window.location.reload()
              }).catch( error => {
              this.error=error.response.data.message
              this.form.password = ''
            })
          })
      //   } else {
      //   this.error = 'All fields is required'
      // }
    },
    show() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
  }
}
</script>

<style scoped>

.login-section{
  padding: 0 !important;
  margin: 0 !important;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.6);
  min-height: 100vh;
}

.ic{
  width: 10%;
  padding:0 10px 0 7px;
  border-radius: 5px 0 0 5px;
  background: none;
  border: green;
  color: white;
}
.signup:hover{
  color: #6ea21f;
}
.social-login a{
  align-items: center;
  margin: 0 auto;
  width: 100%;
}
.social-login {
  align-items: center;
  border: 1px solid #b3bdc0;
  border-radius: 4px;
  color: #5d676e;
  display: flex;
  font-size: 12px;
  margin: 0 auto 12px;
  max-width: 348px;
  padding: 6px 10px;
  width: 80%;
}
.social-login a{
  display: flex;
}
#login-buttons a {
  color: #83c11f;
  font-weight: 700;
}
#login-buttons {
  color: #5d676e;
  font-size: 14px;
  margin: 0 auto;
  max-width: 348px;
  width: 80%;
  display: flex;
}
.tabs a {
  color: #5d676e;
  display: block;
  padding: 11px 0 10px;
  transition: background .3s ease-in;
}
.login-inner-right p {
  color: #868d92;
  font-size: 13px;
  margin-bottom: 0;
  text-align: left;
}
.sub-log {
  background: #83c11f;
  border-radius: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 1.125em;
  margin: 0 auto ;
  padding: 13px 10px;
  text-align: center;
  transition: all .3s ease-in-out;
  /*width: 100%;*/
  border: none;
  width: 80%;
  position: absolute;
  left: 5%;
  bottom: 0;
}

.btn-signup{
  border: none;
  border-radius: 0;
  display: inline-block;
  font: 400 1em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  outline: none;
  padding: 10px 20px;
}
.form-group {
  padding: 15px;
}
.login-inner-right p {
  color: #868d92;
  font-size: 13px;
  margin-bottom: 0;
  text-align: left;
}
.or-line {
  position: absolute;
  border: 1px solid black;
  background: #eaeff4;
  height: calc(100% - 37px);
  opacity: .8;
  right: 50%;
  text-align: center;
  top: 200px;
  width: 2px;
}
.or-line span {
  background: #fff;
  border: 2px solid #eaeff4;
  border-radius: 50%;
  color: #b3bdc0;
  font-size: 16px;
  left: 50%;
  padding: 9px 0;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-inner-left a{
  text-decoration: none;
  color: #2d3941;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.login-left {
  padding-bottom: 6px;
  padding-top: 33px;
  position: relative;
}
.login-inner-left {
  background-color: white;
  width: 100%;
  padding-top: 50px;
}
.sign-in{
  border-radius: 25px;
  width: 70%;
  height: 550px;
  background: url("https://cdn01.alison-static.net/public/html/site/img/homepage/login-bg.png") repeat top/100% auto;
  box-shadow: 0 6px 20px rgb(51 51 51 / 30%);
  margin: 0 !important;
  padding: 0 !important;
}

.tabs .active {
  background: #eaeff4;
  box-shadow: 0 -3px 6px rgb(210 216 222 / 39%);
  width: 20%;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  text-align: center;
}

.tabs .login {
  background: white;
  color: #83c11f;
  box-shadow: 0 -3px 6px rgb(210 216 222 / 39%);
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  text-align: center;
}
.tabs {
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  border-radius: 12px 12px 0 0;
  text-align: center;
  cursor: pointer;
  float: left;
}
.login-inner-tabs {
  width: 100%;
  background-color: white;
  position: relative;
}
.login-inner-tabs .login-inner-left {
  float: left;
  background-color: white;
  width: 50%;
  height: 372px;
  border-radius: 0 0 0 25px;
}
.login-inner-tabs .login-inner-right {
  float: left;
  background-color: white;
  width: 50%;
  height: 372px;
  border-radius: 0 0 25px 0 ;
}
.tabs .active a{
  color: #5d676e;
  font-weight: 500;
}
.tabs .active a:hover{
  color: #5d676e;
  font-weight: 500;
}
.tabs .login a:hover{
  color: #83c11f;
  font-weight: 500;
}
.login-right{
  background: 0 0;
  overflow: hidden;
  padding-top: 0;
  position: relative;
}
.login-left h1{
  color: #fff;
  font-size: 45px;
  font-weight: 500;
}
.login-left p {
  color: #fff;
  font-size: 16px;
  letter-spacing: .32px;
  margin-bottom: 15px;
}
.tabs div a {
  color: #83c11f;
  display: block;
  padding: 11px 0 10px;
  transition: background .3s ease-in;
  outline: none;
  text-decoration: none;
}
</style>
