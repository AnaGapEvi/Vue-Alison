<template>
    <div class="login-section" @click.self="showModalLog">
      <div class="sign-in">
        <div class="login-left">
          <h1>Welcome Back!</h1>
          <p class="sub-msg">What will you learn today? Find out, with Alison.</p>
        </div>
        <div class="login-right">
          <div class="tabs">
            <div class="active signup" v-if="$route.path === '/login' "><router-link  to="/register">Sign Up</router-link></div>
            <div class="active"  v-else><button @click="closeLog" style="background: none; color: gray">Sign Up</button></div>
            <div class="login ">Log In</div>
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
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/google-square.svg"/>
                    </div>
                    Continue with Google
                  </a>
                  <div id="google-custom" style="display:none;"></div>
                </div>
                <div class="social-login">
                  <a @click.prevent="AuthProvider('microsoft')" >
                    <div>
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/microsoft-square.svg"/>
                    </div>
                    Continue with Microsoft
                  </a>
                </div>
                <div class="social-login">
                  <a href="/auth/linkedin?redirect_url=https://alison.com/register&amp;route_name=" rel="nofollow" title="Register/Log In with LinkedIn">
                    <div>
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/linkedin-square.svg"/>
                    </div>
                    Continue with Linkedin
                  </a>
                </div>
                <div class="social-login">
                  <a href="/auth/linkedin?redirect_url=https://alison.com/register&amp;route_name=" rel="nofollow" title="Register/Log In with LinkedIn">
                    <div>
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/yahoo-square.svg"/>
                    </div>
                    Continue with Linkedin
                  </a>
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
              <div class="form-group email-signup slide-on-social">
                <form  accept-charset="UTF-8" data-signup-form="" id="signup-form" name="register-form"><input name="_token" type="hidden" value="2ACIGXlINYAK0EBvCUbyJzOXHVi4ICIQHGK8d7eK">
                  <div class="clearfix"></div>
                  <div class="input-field-email">
                    <input class="form-control" id="emailNew" v-model="form.email" placeholder="E-mail" autocomplete="off" required="" name="signup_email" type="email">
                  </div>
                  <div class="input-field eye">
                    <input class="form-control form-pass"  minlength="6" required="" name="signup_password" :type="passwordFieldType" value="form.password" aria-autocomplete="list" v-model="form.password">
                    <vs-button transparent icon="visibility" @click.prevent="show()" class="ic"></vs-button>
                  </div>
                  <router-link style="color: #83c11f; font-size: 13px; text-decoration: none" to="/forgot">Forgot password?</router-link>
                  <span class="error">{{error}}</span>
                  <div class="hide-on-social">

                    <div class="login-form__submit">
                      <img style="position: absolute; top: 243px; right: 20%" src="https://cdn01.alison-static.net/public/html/site/img/header/pointer.svg">
                      <button class="sub-log signup-button" @click.prevent="login_user()">Log In</button>
                    </div>

                  </div>
                </form>
              </div>
              <div class="form-group social-signup" style="display: none">
                <form>
                  <input name="_token" type="hidden" value="2ACIGXlINYAK0EBvCUbyJzOXHVi4ICIQHGK8d7eK">
                  <p class="terms-conditions">
                    <input id="signup_tc_social" name="signup_tc_social" type="checkbox">
                    <label for="signup_tc_social" class="form-checkbox tc-check">I agree to the <a href="https://alison.com/about/terms-of-use" target="_blank">Terms and Conditions</a></label>
                    <input name="signup_emails_social" type="hidden" value="1">
                    <input class="submit-login signup-button" type="submit" value="Sign in">
                  </p>
                </form>
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
      this.$http.post('/auth/'+provider, response).then(response => {
        console.log(response.data)
        localStorage.setItem('access_token', response.data.token);
        this.showModalLog()
        this.$router.push({name: "dashboard"})
        window.location.reload()
      }).catch(err => {
        console.log({err:err})
      })
    },
    login_user() {
      if(this.form.email !== "" && this.form.password !== "") {
          return new Promise((resolve, reject) => {
            this.axios.post('/login', this.form)
              .then(result => {
                localStorage.setItem('access_token', result.data.token);
                resolve(true)
                this.showModalLog()
                this.$router.push({path: "/dashboard"})
                window.location.reload()
              }).catch( error => {
              this.error=error.response.data.message
              this.form.password = ''
            })
          })
        } else {
        this.error = 'All fields is required'
      }
    },
    show() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
  }
}
</script>

<style scoped>
.error{
  color: #f4254e;
  /*position: absolute;*/
  bottom: -55%;
  width:100%;
  text-align: center;
  font-size: 12px;
}
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
.eye{
  display: flex;
}
.form-pass{
  width: 92%;
}
.ic{
  width: 100px;
  margin: 0;
  padding:0 10px 0 7px;
  border-radius: 0 5px 5px 0;
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
.login-form__submit .sub-log {
  background: #83c11f;
  border-radius: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 1.125em;
  margin: 80px auto 10px;
  padding: 13px 10px;
  text-align: center;
  transition: all .3s ease-in-out;
  width: 100%;
}
.terms-conditions {
  color: #868d92;
  line-height: 29px;
  /*margin: 12px 0 10px;*/
  text-align: left;
}
.input-field input, .login-container .form-group .input-field-email input {
  background: #f3f6f7;
  border-radius: 4px;
  color: #5d676e;
  font-size: 12px;
  height: 40px;
}
.form-group .input-field-email {
  margin-top: 11px;
}
.form-group .name-float{
  float: left;
  width: calc(50% - 8px);
}
.form-group .name-float .last-name{
  margin-left: 8px;
}
.form-group .input-field-email input {
  background: #f3f6f7;
  border-radius: 4px;
  color: #5d676e;
  font-size: 12px;
  height: 40px;
}
.form-group .input-field-email {
  margin-top: 11px;
  margin-bottom: 11px;
}
button, input, select, textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: 0;
  border-radius: 0;
  display: inline-block;
  font: 400 1em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  outline: none;
  padding: 10px 20px;
  width: 100%;
}
.form-group {
  padding: 55px 38px 30px;
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
