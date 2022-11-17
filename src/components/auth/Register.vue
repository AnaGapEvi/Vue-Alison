<template>
  <div class="register" @click.self="showModal">
   <div class="sign-up" >
      <div class="login-left">
        <h1>Sign Up For Free</h1>
        <p class="sub-msg">Join the World’s Largest Free Learning Community</p>
      </div>
      <div class="login-right">
        <div class="tabs" >
          <div class="active"><router-link to="/register">Sign Up</router-link></div>
          <div class="active" v-if=" $route.path === '/register'"><router-link  to="/login">Log In</router-link></div>
          <div class="login" v-else><button class="btn-register"  @click="close" > Log In</button></div>
        </div>
          <div class="login-inner-tabs">
            <div class="login-inner-left">
              <div class="section">
                <div class="social-login">
                  <a @click.prevent="AuthProvider('facebook')">
                    <div>
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/facebook-square.svg"/>
                    </div> Continue with Facebook
                  </a>
                </div>
                <div class="social-login">
                  <a @click.prevent="AuthProvider('google')" >
                    <div>
                      <img src="https://cdn01.alison-static.net/public/html/site/img/header/google-square.svg"/>
                    </div> Continue with Google
                  </a>
                  <div id="google-custom" style="display:none;"></div>
                </div>
              </div>
              <div id="login-buttons">
                <p style="display: flex; gap: 20px">Already have an Alison account?<router-link to="/login">Log In</router-link></p>
              </div>
              <div class="or-line">
                <span>OR</span>
              </div>
            </div>
            <div class="login-inner-right">
              <div class="form-group">
                <p>This is the name that will appear on your Certification</p>

                <validation-observer ref="observer" >
                  <b-form style="position: relative">
                    <div style="width: 100%; display: flex">
                    <validation
                      name="firstname"
                      rules="required"
                      style="display: inline-block"
                    >
                      <b-form-group
                        label-class="form-label"
                        slot-scope="{ errors }"
                        :invalid-feedback="errors[0]"
                      >
                        <b-form-input
                          id="firstname"
                          style="border: 1px solid gray; border-radius: 5px; width: 100%; padding: 5px;"
                          v-model="form.firstname"
                          placeholder="Firstname"
                          :state="errors[0] ? false : null"

                          trim
                        />
                      </b-form-group>
                    </validation>
                    <validation
                      name="lastname"
                      rules="required"
                      style="display: inline-block"
                    >
                      <b-form-group
                        label-class="form-label"
                        slot-scope="{ errors }"
                        :invalid-feedback="errors[0]"
                      >
                        <b-form-input
                          id="lastname"
                          style="border: 1px solid gray; border-radius: 5px;width: 100%; padding: 5px"
                          v-model="form.lastname"
                          placeholder="Lastname"
                          :state="errors[0] ? false : null"

                          trim
                        />
                      </b-form-group>
                    </validation>
                      </div>
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
                          style="border: 1px solid gray; border-radius: 5px; width: 100%; padding: 5px!important;"
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
                    <div class="terms-conditions">
                      <input type="checkbox" id="checkbox" value="true" v-model="checked" />
                      <label for="signup_tc" class="form-checkbox tc-check">I agree to the <a href="https://alison.com/about/terms-of-use" target="_blank">Terms and Conditions</a></label>
                      <input name="signup_emails" type="hidden" value="1">
                    </div>
<!--                    <span style="color: #e59898" v-if="error!==''">{{error}}</span>-->
                    <div style="position: relative; height: 100px">
                      <img style="position: absolute;z-index: 100; bottom: 30px; left: 50%" src="https://cdn01.alison-static.net/public/html/site/img/header/pointer.svg">
                      <button class="sub-log" @click.prevent="register(form)">Sign Up</button>
                    </div>
                  </b-form>
                </validation-observer>


<!--                <form>-->
<!--                  <div class="input-field name name-float first-name">-->
<!--                    <input class="form-control"  placeholder="First Name" v-model="form.firstname" autocomplete="off" minlength="5" type="text" required>-->
<!--                  </div>-->
<!--                  <div class="input-field name-float last-name ">-->
<!--                    <input class="form-control"  placeholder="Surname" v-model="form.lastname" autocomplete="off" minlength="2"  type="text" required>-->
<!--                  </div>-->
<!--                  <div class="clearfix"></div>-->
<!--                  <div class="input-field-email ">-->
<!--                    <input class="form-control"  v-model="form.email" placeholder="E-mail" autocomplete="off"   type="email" required />-->
<!--                  </div>-->
<!--                  <div class="input-field eye">-->
<!--                    <input class="form-control form-pass"   minlength="6" required="" name="signup_password"  value="form.password" v-model="form.password">-->
<!--                    <vs-button @click.prevent="show()" dark  shadow icon="visibility" class="ic"></vs-button>-->
<!--                    <span class="error">{{error}}</span>-->
<!--                  </div>-->
<!--                  <div class="hide-on-social">-->
<!--
<!--                    <div class="login-form__submit">-->
<!--                      <img style="position: absolute; top: 248px; right: 20%" src="https://cdn01.alison-static.net/public/html/site/img/header/pointer.svg">-->
<!--                      <button class="sub-log signup-button" @click.prevent="form_submit">Sign Up</button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </form>-->
              </div>

              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../auth/Login";
export default {
  name: "Register",
  props: ['showModal', 'close', 'AuthProvider', 'register'],
  component: {Login},
  data() {
    return {
      max: 10,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: null
      },
      showModalLogin: false,
      showModalRegister: false,
      error: '',
      passwordFieldType: "password",
      checked:false,
    }
  },
  methods: {

    backLog() {
      this.showModalLogin = !this.showModalLogin
    },
    back() {
      this.showModalRegister = !this.showModalRegister
    },
    show() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },

   },
}
</script>

<style scoped>
.error{
  color: #f4254e;
  position: absolute;
  bottom: -55%;
  width:100%;
  text-align: right;
  font-size: 12px;
}
.eye{
  display: flex;
  position: relative;
}
.ic{
  width: 10%;
  padding:0 10px 0 7px;
  border-radius: 5px 0 0 5px;
  background: none;
  border: green;
  color: white;
}
.form-pass{
  width: 92%;
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
  align-items: center;
  padding: 5px;
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
  margin: 50px auto 10px;
  padding: 13px 10px;
  text-align: center;
  transition: all .3s ease-in-out;
  width: 90%;
  border: none;
}
.terms-conditions {
  color: #868d92;
  line-height: 29px;
  text-align: left;
}

 .form-group .input-field-email input {
  background: #f3f6f7;
  border-radius: 4px;
  color: #5d676e;
  font-size: 12px;
  height: 40px;
}

.btn-register {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: 0;
  display: inline-block;
  font: 400 1em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  outline: none;
  padding: 10px 20px;
  width: 100%;
  background: none;
}
.form-group {
  padding: 10px ;
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
  margin-top: 33px;
  position: relative;
}
.login-inner-left {
  background-color: white;
  width: 100%;
  padding-top: 50px;
}
.sign-up{
  position: relative;
  border-radius: 25px;
  width: 70%;
  padding:  0 0 0;
  margin: 0 auto;
  height: 600px;
  background: url("https://cdn01.alison-static.net/public/html/site/img/homepage/login-bg.png") repeat top/100% auto;
  box-shadow: 0 6px 20px rgb(51 51 51 / 30%);

}
.register{
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: 100%;
  /*position: relative;*/
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.6);
  min-height: 100vh;
}
.tabs .active {
  background: #fff;
  box-shadow: 0 -3px 6px rgb(210 216 222 / 39%);
  width: 20%;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  text-align: center;
}
.tabs .login {
  background: #eaeff4;
  box-shadow: 0 -3px 6px rgb(210 216 222 / 39%);
  width: 20%;
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
  height: 420px;
  border-radius: 0 0 0 25px;
}
.login-inner-tabs .login-inner-right {
  float: left;
  background-color: white;
  width: 50%;
  height: 420px;
  border-radius: 0 0 25px 0 ;
  padding: 15px;
}
.tabs .active a{
  color: #83c11f;
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
  color: #5d676e;
  display: block;
  padding: 11px 0 10px;
  transition: background .3s ease-in;
  outline: none;
  text-decoration: none;
}
</style>
