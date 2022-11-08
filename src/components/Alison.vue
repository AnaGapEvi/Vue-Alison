<template>
  <div style="padding-top: 80px">
    <div class="intro">
      <h2><b>Free Online Courses With Certificates & Diplomas</b></h2>
      <form @submit="searchItemCourse()">
        <div style="display: flex; width: 50%; text-align: center; border: 1px solid gray; border-radius: 41px; margin: 5px auto; padding: 10px; align-items: center; justify-content:center;">
          <b-icon icon="search" aria-hidden="true"></b-icon>
          <input placeholder="What do you want to learn today?"  style="font-size: 20px; text-align: center; padding: 5px 10px; margin-left: 10px ;border: none; outline: none; width: 80%" v-model="search">
        </div>
      </form>
      <p style="margin-top: 20px">25 Million Learners. 15 Years. 100% Free Courses</p>
      <div class="intro-bottom-pics-container">
        <div class="intro-bottom-pic pic1"/>
        <div class="intro-bottom-pic pic2"/>
      </div>
    </div>
    <div class="categories">
      <div class="cat"/>
      <h2 >Explore 4000+ Free Courses</h2>
      <div class="user">
        <p style="font-weight: 700;">{{userQuantity}}  people are learning on Alison today</p>
      </div>
      <div class="contain">
        <div class="category" v-for="category in categories" :key="category.id">
          <router-link :to="{path: '/'+category.name+'/'+category.id}" class="pategory-route">
            <img :src="category.image" width="42px" height="42px" style="margin: 10px">
            <p>{{ category.name }}</p>
            <p style="font-size: 13px">850 courses
              <b-icon style="font-size: 13px" icon="arrow-right" aria-hidden="true"></b-icon>
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="begin">
      <h1><b>Not Sure Where To Begin?</b></h1>
      <h5>What is your main goal on Alison?</h5>
      <div class="people">
        <div class="upskill one">
          <h3>I want to</h3>
          <p><b>upskill
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
          </b></p>
        </div>
        <div class="upskill two">
          <h3>I want to</h3>
          <p><b>change careers
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
          </b></p>
        </div>
        <div class="upskill three">
          <h3>I want to</h3>
          <p><b>explore hobbies & interests
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
          </b></p>
        </div>
      </div>
    </div>
    <div class="slide">
      <course-type></course-type>
      <b-button class="btn">Explore More Courses</b-button>
    </div>
    <div class ="leading-experts">
      <h2> Learn From The World's Leading Experts</h2>
      <div class="leading">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/google.png" width="88px" height="28">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/cambridge.png" width="110px" height="25">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/stanford.png" width="105px" height="25">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/saylor.png" width="129px" height="25">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/openstax.png" width="105px" height="25">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/mit.png" width="45px" height="25">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/microsoft.png" width="110px" height="25">
      </div>
    </div>
   <skills-slide></skills-slide>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <h3>
            Get to know yourself better!</h3>
          <p>Discover your career strengths & weaknesses</p>
          <button>Take The Free Personality Assessment </button>
        </div>
          <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/know-yourself.svg" width="250px">
      </div>
      <div class="box3">
        <h3>Get hired for your dream job!</h3>
        <p>Build your free resume in minutes!</p>
        <button>Create My Professional Resume</button>
      </div>
      <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/get-hired.svg" width="250px">
    </div>
    <over-slide></over-slide>
    <div class="story-intro">
      <div class="main-upskill">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/upskill.png" width="70%">
      </div>
      <div class="main-upskill">
        <h2> A Faster Way For Your Employees <br> To Grow And Upskill</h2> <br>
        <p>Our range of solutions has something to offer all businesses and organizations. Whether you’re a non-profit or a commercial entity, we can tailor a plan for your needs.</p>
        <button>Explore Alison For Business </button>
      </div>
    </div>
    <div class="alison-mobile">
      <div class="mobile" />
      <div class="alison">
        <h1>Learn Anywhere</h1>
        <p>Download the Alison App and learn anywhere, anytime!</p>
        <a href="https://play.google.com/store/apps/details?id=com.alison.mobile.flutter&gl=IE" target="_blank"><button class="btn1"></button></a>
        <a href="https://apps.apple.com/us/app/alison-online-courses/id1558468968" target="_blank"><button class="btn2"></button></a>
      </div>
      <div class="alison">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/app.png" width="80%">
      </div>
    </div>
    <to-education></to-education>
  </div>
</template>

<script>
import TabNav from "./custom/TabNav";
import CourseType from "./courses/CourseType";
import Skills from "./custom/Skills.vue";
import axios from 'axios';
export default {
  name: 'Alison',
  components: {CourseType, TabNav},
  data() {
    return {
      isActive: false,
      categories: [],
      skills:[],
      userQuantity:null,
      search:''
    }
  },
  mounted() {
    this.getCategories()
    this.getSkills()
    this.getRegUsers()
  },
  methods: {
    searchItemCourse(){
      this.$router.push({name: "SearchResult", query: { search:this.search}})
      this.search=''
      this.courses=[]
    },
    getCategories() {
      axios.get('/get-categories')
        .then((response) => {
          this.categories = response.data
        })
    },
    getSkills() {
      axios.get('/get-skills')
        .then((response) => {
          this.skills = response.data
        })
    },
    getRegUsers() {
      axios.get('/yesterday-users')
        .then((response) => {
          this.userQuantity = response.data
        })
    }
  }
}
</script>
<style scoped>
.user:after {
  background: #83c11f;
  border-radius: 100%;
  content: "";
  height: 12px;
  left: 28px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
}
.user{
  background: #fff;
  border-radius: 6px;
  bottom: 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 21%);
  color: #717980;
  font-size: 16px;
  left: 40px;
  padding: 16px 28px 16px 48px;
  position: absolute;
  text-align: center;
  transform: translateY(50%);
  width: 430px;
  display: flex;
  align-items: center;
}
.box{
  height: 200px;
  display: flex;
  background-color: #e5f1d7;
  align-items: center;
}
.box img{
  position: absolute;
  right: 0;
}
.box2{
  transform:skewX(25deg);
  z-index: 1;
}
.box3{
  z-index: 1;
}
.category .pategory-route{
  text-decoration: none;
  color: #5d676e;
}
.box3 button{
  padding: 12px 39px;
  border-radius: 25px;
  background-color: #83c124;
  color: white;
  border: 1px solid #83c11f;
}
.box2 button{
  padding: 12px 39px;
  border-radius: 25px;
  background-color: #83c124;
  color: white;
  border: 1px solid #83c11f;
}
.box3 button:hover{
  padding: 12px 39px;
  background: #638d1f;
  transition: all .3s ease-in-out;
  border: 1px solid #638d1f;
  overflow: hidden;
  position: relative;
}
.box1 button:hover{
  padding: 12px 39px;
  border-radius: 25px;
  color: #fff;
  background: #638d1f;
  display: inline-block;
  transition: all .3s ease-in-out;
  border: 1px solid #638d1f;
  overflow: hidden;
  position: relative;
}
.box1{
  height:100%;
  position:relative;
  overflow:hidden;
  width:50%;
  background-color: #d2e7bb;
  transform-origin: 100% -50%;
  transform:skewX(-25deg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.box1 img{
  transform:skewX(25deg);
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -10;
}
.people {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.one {
  background-image: url("../assets/flug.svg");
}
.slick-initialized .slick-slide, .slick-slide img {
  display: block;
}
.two {
  background-image: url("../assets/flugs.svg");
}

.three {
  background-image: url("../assets/puzzle.svg");
}
.upskill {
  background-size: 63px auto;
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 300px;
  border-radius: 15px;
  background-color: white;
  margin: 25px;
  padding: 15px 25px;
  text-align: left;
  border: 2px solid white;
}
.upskill:hover {
  border: 2px solid #22e822;
}
.upskill:hover p {
  color: #69d269;
}
.categories {
  position: relative;
  width: 100%;
  padding: 18px 10px;
  font-size: 18px;
  line-height: normal;
  font-weight: 400;
  background: linear-gradient(85deg, #75bb39 0, #56ae68 100%);
}
.categories h2{
  text-align: center;
}
.intro {
  position: relative;
  width: 90%;
  height: 350px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
}
.intro-bottom-pics-container {
  bottom: 0;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
}
.intro-bottom-pic {
  height: 100%;
  width: 311px;
  background-repeat: no-repeat;
}
.pic1 {
  background-image: url("../assets/girl.svg");
  background-size: 100%;
  transform: translateY(6px);
}
.pic2 {
  background-image: url("../assets/boy.svg");
  background-size: cover;
}
.cat {
  position: absolute;
  width: 99%;
  height: 60%;
  background: url('../assets/download6.svg');
}
.category:hover {
  transform: scale(108%);
}
.category {
  z-index: 1;
  padding: 10px;
  width: 183px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: 11px;
  transform-origin: center;
  transition: 0.5s linear;
  position: relative;
  text-align: center;
}
.contain {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 15px auto;
  justify-content: center;
  z-index: 1;
}
.begin {
  padding: 33px 0 40px;
  background-color: #f3f6f7;
  background-size: 111px auto;
  background-position: left 20px;
  background-image: url("../assets/men.svg");
  background-repeat: no-repeat;
  text-align: center;
}
.slide{
  width: 80%;
  margin: 10px auto;
}
.btn{
  width: 40%;
  padding: 12px 39px;;
  background-color: #83c124;;
  border: none;
  border-radius: 25px;
  margin: 15px;
  color: white;
}
.leading-experts{
  width: 100%;
  color: #2d3941;
  background: #f3f6f7;
  padding: 34px 0;
}
.leading-experts div{
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
}
.leading{
  width: 100%;
  padding: 25px;
}
.leading-experts h2{
  color: #2d3941;
  font-size: 20px;
  margin-bottom: 33px;
  font-weight: 500;
  text-align: center;
  opacity: .88;
}
.testimonials h2{
  /*font-size: 25px;*/
  font-weight: 300;
  line-height: 38px;
  margin: 85px 52px 85px 20px;
  width: 350px
}
.testimonials h3 span{
  font-weight: 500;
}
.main-upskill{
  width: 50%;
  padding: 40px;
}
.main-upskill h2{
  margin-top: 40px;
  text-align: left;
}
.main-upskill button{
  margin-top: 30px;
  padding: 12px 39px;
  border-radius: 25px;
  color: #fff;
  background: #83c11f;
  display: inline-block;
  transition: all 500ms ease-in-out;
  border: 1px solid #83c11f;
  overflow: hidden;
  position: relative;
}
.main-upskill p{
  text-align: left;
  margin-top: 30px;
}
.story-intro{
  display: flex;
  transition-duration: 1s ;
}
.story-intro button{
  padding: 12px 39px;
  border-radius: 25px;
  color: #83c124;
  border: 1px solid #83c124;
  background: none;
}
.story-intro button:hover{
  padding: 12px 39px;
  background: #638d1f;
  color: white;
  transition: all 500ms ease-in-out;
  border: 1px solid #638d1f;
  overflow: hidden;
  position: relative;
}
.alison-mobile{
  width: 100%;
  background: linear-gradient(90deg,#0093c7 40%,#0878a1 60%);
  display: flex;
  z-index: 1;
}
.mobile {
  position: absolute;
  width: 100%;
  height: 30%;
  background: url('../assets/planet.svg');
  float: left;
}
.alison {
  width: 50%;
  text-align: left;
  margin-top: 75px;
  margin-left: 150px;
  z-index: 1;
  color: white;
}
.alison .btn1{
  border: none;
  margin: 20px 30px 0 0;
  border-radius: 7px;
  width: 180px;
  height: 50px;
  background-image: url("https://cdn01.alison-static.net/public/html/site/img/homepage/android.png");
  background-size: 100% 100%;
}
.alison .btn2{
  border: none;
  border-radius: 7px;
  width: 180px;
  height: 50px;
  background-image: url("https://cdn01.alison-static.net/public/html/site/img/homepage/apple.png");
  background-size: 100% 100%;

}
</style>
