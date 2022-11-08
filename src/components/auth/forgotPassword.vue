<template>
  <div class="forgot">
    <div class="forgot-password">
      <div>
        <h2>Forgot password?</h2>
        <p>Please enter you email address and we will mail you a link to reset your password.</p>
      </div>
      <div style="height: 500px">
        <validation-observer ref="observer">
          <b-form >
            <validation
              name="email"
              rules="required|email"
            >
              <b-form-group
                label-class="form-label"
                label="Email Address"
                label-for="email"
                slot-scope="{ errors }"
                :invalid-feedback="errors[0]"
              >
                <b-form-input
                  id="email"
                  v-model="email"
                  :state="errors[0] ? false : null"
                  trim
                />
              </b-form-group>
            </validation>
            <div class="mt-3">
            <button class="form-btn" @click="forgot_password()">Reset my password</button>
            </div>
            <span style="color: #e59898" v-if="error">{{error}}</span>
          </b-form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgotPassword",
  data(){
    return{
      email:'',
      error:null
    }
  },
  methods:{
    forgot_password(){
      this.axios.put('/forgot', this.user)
        .then( response => {
          this.$router.push({name: "Login"});
        })
        .catch((error) => {
          this.error= error.response.data.message
        })
    }
  }
}
</script>

<style scoped>
.form-btn{
  width: 95%;
  background: #83c11f;
  color: white;
  border-radius: 40px;
  text-align: center;
  padding: 10px;
  border: none;
  margin-top: 50px;
}
.form-inout-email{
  width: 95%;
  border: none;
  margin-top: 50px;
  padding: 10px;
  border-radius: 10px;
}
.forgot{
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
}
.forgot-password{
  padding: 15px;
  color: white;
  background: black;
  width: 60%;
  border-radius: 25px;
}
.forgot-password h2{
  /*font-weight: 700;*/
  font-size: 40px;
}
</style>
