<template>
    <div style="background-color: #f3f6f7;">
<!--      <div>-->
        <div class="free-online-diploma">
          <div class="header-content">
          <h2>Free Online Diploma Programs </h2>
          <p >
            Alison’s free online diploma programs provide comprehensive training across a variety of industries,
            fields and careers. Completing a diploma course of eight to 15 hours (or a longer advanced diploma course)
            gives you the edge when it comes to building your CV and extending your education.
            <br><br>
            Diplomas are valued by employers because they impart specialist knowledge and skills. Because they’re short
            and can easily be completed over a weekend, diplomas let you apply for jobs as soon as you’re done. Completing
            more diplomas linked to your career will help you climb the ladder to secure promotions and high earnings. Furthermore,
            undertaking diploma courses on Alison is one of the most affordable ways to access high-quality education. Most importantly,
            our diplomas are designed to be completed at your own pace and are flexible enough to slot in with your schedule of family
            commitments, work obligations, community connections and whatever hobbies,
            hustles and happenings you have in your life. All in all, a free diploma just makes sense.
          </p>
            <b-button id="show-modal" @click="showModalLogin = !showModalLogin" class="login-btn">Get Started</b-button>
            <Login v-if="showModalLogin" class="modal-mask" :showModalLog="backLog"></Login>
          </div>
          <div class="header-background" />
        </div>
      <div class="courses">
        <div style="width: 100%;display: flex; justify-content: space-between">
          <h4>Top Free Online Diplomas</h4>
          <select class="form-select form-select"  v-model="selected"   @change="changeLanguage(selected)" style="width: 20%">
            <option v-for="(language, index) in languages" v-bind:value="language" :key="index">{{ capitalizeFirstLetter(language.language)}}</option>
          </select>
        </div>
        <div v-for="course in courses" :key="course.id" style="width: 20%; margin: 25px; ">
          <course :course="course"></course>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import Course from "./Course.vue";
export default {
  name: "DiplomaCourse",
  components: {Course},
  data(){
    return{
      courses: [],
      selected:null,
      showModalLogin: false,
      languages:[
        {language:'English', tr:'en'},
        {language:'Spanish', tr:'es'},
        {language:'Indonesian', tr:'id'},
        {language:'spanish(Latin America)', tr:'es-LA'},
      ]
    }
  },
  mounted() {
    this.getDiplomaCourse()
  },
  methods:{
    getDiplomaCourse(){
      const categories = {
        "IT": "#0094c9",
        "Health": "#e42330",
        "Language": "#10a650",
        "Business" : "#f49b29",
        "Managements": "#c81a7f",
        "Personal  Development": "#2a0040",
        "Sales & Marketing": "lightgrey",
        "Engineering & Construction" : "black",
        "Teaching & Academics":"#bfd131"
      }
       axios.get('/diploma-courses').then( response => {
         response.data.forEach((course) => {
           course.category.color = categories[course.category.name]
         })
         this.courses=response.data
       }).catch(e=>{
         this.error = e.response.data.message
       })
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    changeLanguage(data){
      axios.post('/language-filter', data).then( response => {
        response.data.forEach((course) => {
          course.category.color = this.categories[course.category.name]
        })
        this.courses=response.data
      }).catch(e=>{
        this.error = e.response.data.message
      })
    },
    backLog(){
      this.showModalLogin=!this.showModalLogin
    },
  }

}
</script>

<style scoped>
.login-btn{
  background: #0091c7;
  border: none;
}
.login-btn:hover{
  background: #006c94;
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
.courses{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 25px auto;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  padding: 20px 18px;
  position: relative;
}
.free-online-diploma{
  position: relative;

  /*width: 90%;*/
  /*height: 500px;*/

  /*background-repeat: no-repeat;*/
  /*background-size: auto 100%;*/
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  /*height: 500px;*/
  margin: 50px auto 25px;
  overflow: hidden;
  padding: 20px;
  transition: height 1s ease-in-out;
  width: 90%;
  text-align: left;
}

.header-content {
  width: 70%;
}

.header-background {
  width: 30%;
  min-height: 253px;
  background-repeat: no-repeat;
  /*transform-origin: left;*/
  background-image: url('https://cdn01.alison-static.net/search/header-img/diploma.jpg');
  /*mask-image: linear-gradient(to left,  rgba(0,0,0,0.5), rgba(0,0,0,0));*/
  background-size: contain;
  background-position: center;
}

.free-online-diploma p{

  color: #5d666d;
  font-size: 14px;
  line-height: 23px;
}
</style>
