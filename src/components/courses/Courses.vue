<template>
    <div style="padding-top: 50px; background-color: #f3f6f7">
        <div class="title" >
          <div class="links">
            <h3>{{freeCourses.title}}</h3>
            <icons-link></icons-link>
          </div>
          <p>{{freeCourses.content}}</p>
          <button class="get-start-btn">Get Started</button>
        </div>
      <div style="position:relative; width: 90%; margin: 0 auto" >
        <div class="sub-container" ref="scroll">
          <h5 style="text-align: left; margin: 10px; position: absolute; top: 10px; left: 10px ">Related Subjects</h5>
          <div class="sub" >
            <div class="sub-scroll" v-for="(sub, index) in subCategories[0]" :key="index">
              <router-link to="" class="sub-route">{{sub.name}}</router-link>
            </div>
          </div>
          <div class="sub">
            <div class="sub-scroll" v-for="(sub, index) in subCategories[1]" :key="index">
              <router-link to=""  class="sub-route">{{sub.name}}</router-link>
            </div>
          </div>
        </div>
          <button  class="next-btn" @click="preBtn()"><img src="https://alison.com/html/site/img/category-page/arrow-active-left.png"> </button>
          <button class="pre-btn" @click="nextBtn()"><img src="https://alison.com/html/site/img/category-page/arrow-active-right.png"></button>
      </div>
        <div class="courses">
          <div style="width: 100%;display: flex; justify-content: space-between">
            <h4>Top 20 Online {{courseName}} Courses</h4>
            <div style="width: 50%; display: flex; justify-content: space-evenly;">
              <select class="form-select select" v-model="selected"   @change="changeLanguage(selected)" style="width: 40%">
                <option :value="null" disabled> Language</option>
                <option v-for="(language, index) in languages" v-bind:value="language" :key="index">{{ capitalizeFirstLetter(language.language)}}</option>
              </select>
              <select class="form-select select"  v-model="selected"   @change="changeType(selected)" style="width: 30%">
                <option :value="null" disabled>Course type</option>
                <option v-for="(type, index) in types" v-bind:value="type" :key="index">{{ capitalizeFirstLetter(type.type)}}</option>
              </select>
            </div>
          </div>
          <div v-for="course in courses" style="width: 20%; margin: 25px; " :key="course.id">
           <course :course="course"> </course>
          </div>
          <div style="width: 100%">
            <h3 style="  text-align: left;">Frequently Asked Questions About Online {{ $route.params.name }} Courses</h3>
            <div style="width: 100%; margin-bottom: 20px" v-for="question in questions" :key="question.id"  @click.prevent="activeClass(question.id)">
              <div class="question-title">
                <p>{{question.title}}</p>
                <button class="question-btn"><b-icon icon="chevron-down" aria-hidden="true"></b-icon> </button>
              </div>
              <div  class="isnone" :class="{ 'active': (question.id === id) }">
                <div class="question-body" >
                  <p v-for="answer in question.answers" :key="answer.id">
                   {{answer.answer}}
                 </p>
                  <button class="get-start-btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import Course from "./Course";
import axios from "axios";
import IconsLink from "../custom/iconsLink.vue";
export default {
  name: "Courses",
  components: {IconsLink, Course},
  data(){
    return{
      id:Number,
      active: false,
      course:[ { title:'Free Online Network Security Courses ', description: 'These free online network security courses will teach you how to protect your networks from an array of threats, including unauthorised access, malware and data theft. From email security to setting up firewalls, these courses will show you how to identify weaknesses in your network security as well as how to strengthen it to ensure that no external party can access your data.'} ],
      courses:[],
      courseName: this.$route.params.name,
      languages:[
        {language:'English', tr:'en'},
        {language:'Spanish', tr:'es'},
        {language:'Indonesian', tr:'id'},
        {language:'spanish(Latin America)', tr:'es-LA'},
      ],
      types:[
        {type: 'Diploma'},
        {type: 'Certificate'},
      ],
      categories: {
        "IT": "#0094c9",
        "Health": "#e42330",
        "Language": "#10a650",
        "Business" : "#f49b29",
        "Managements": "#c81a7f",
        "Personal  Development": "#2a0040",
        "Sales & Marketing": "lightgrey",
        "Engineering & Construction" : "black",
        "Teaching & Academics":"#bfd131"
      },
      required:'',
      selected: null,
      val: 'Languages',
      subCategories:[],
      questions:[],
      body:false,
      skills_online:false,
      it_courses:false,
      freeCourses:[]
    }
  },
  watch: {
    valueSearch(newValue, old){
      this.getCourses()
    }
  },
  computed: {
    valueSearch() {
      return this.$route.params.name + '/' + this.$route.params.id;
    }
  },
  mounted() {
    this.getCourses()
    this.getSubCategories()
    this.getQuestions()
    this.freeOnlineCourses()
  },
  methods:{
    activeClass(id){
      if(this.id===id){
        this.id = ''
      } else {
      this.id = id
      }
    },
    changeLanguage(data){
      axios.get(`/language-filter/${data.tr}`).then( response => {
        response.data.forEach((course) => {
          course.category.color = this.categories[course.category.name]
        })
        this.courses=response.data
      }).catch(e=>{
        this.error = e.response.data.message
      })
    },
    freeOnlineCourses(){
      const images = {
        "IT": "https://cdn01.alison-static.net/search/header-img/it.jpg",
        "Health": "https://cdn01.alison-static.net/search/header-img/health.jpg",
        "Language": "https://cdn01.alison-static.net/search/header-img/language.jpg",
        "Business" : "https://cdn01.alison-static.net/search/header-img/business.jpg",
        "Managements": "https://cdn01.alison-static.net/search/header-img/management.jpg",
        "Personal  Development": "https://cdn01.alison-static.net/search/header-img/personal-development.jpg",
        "Sales & Marketing": "https://cdn01.alison-static.net/search/header-img/marketing.jpg",
        "Engineering & Construction" :"https://cdn01.alison-static.net/search/header-img/engineering.jpg",
        "Teaching & Academics": "https://cdn01.alison-static.net/search/header-img/education.jpg"
      }
      axios.get(`/free-online-courses/` + this.$route.params.id).then( response => {
        response.data.forEach((course) => {
          course.image = images[course.category.name]
        })
        this.freeCourses=response.data[0] || {}
      }).catch(e=>{
        this.error = e.response.data.message
      })
    },
    changeType(data){
      axios.get(`/type-filter/${data.type}`).then( response => {
        response.data.forEach((course) => {
          course.category.color = this.categories[course.category.name]
        })
        this.courses=response.data
      }).catch(e=>{
        this.error = e.response.data.message
      })
    },
    getCourses() {
      this.axios.get(`/courses/` + this.$route.params.id).then(response =>{
          response.data.forEach((course) => {
            course.category.color = this.categories[course.category.name]
          })
          this.courses = response.data
        });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getSubCategories(){
      this.axios.get(`/subjects/` + this.$route.params.id).then( resp =>{
        this.subCategories = resp.data
        let arr = this.subCategories.slice(0,9)
        let arr1 = this.subCategories.slice(9)
        this.subCategories= [arr, arr1]
      })
    },
    getQuestions(){
      this.axios.get(`/get-question/` + this.$route.params.id).then( resp =>{
        this.questions = resp.data[0]
      })
    },
    nextBtn(){
      this.$refs.scroll.scrollLeft += this.$refs.scroll.offsetWidth
    },
    preBtn(){
      this.$refs.scroll.scrollLeft -= this.$refs.scroll.offsetWidth
    },
  }

}
</script>

<style scoped>
.active {
  display: block !important;
}
.isnone{
  display: none;
}
.get-start-btn{
  color: #fff;
  font-size: 14px;
  padding: 7px 15px;
  border-radius: 5px ;
  border: none;
  background: #0091c7;
}
.question-body{
  background-color: #f2f2f2;
  font-size: 14px;
  color: #5d666d;
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 20px 55px 20px 3%;
  position: relative;
  text-align: left;
  width: 100%;
}
.links {
  width: 100%;
  display: flex;
}
.links a{
  margin: 5px;
}
.question-btn{
  border:none;
  background-color: #0094c9;
  color: #fff;
  height: 55px;
  text-align: center;
  transition: background-color .5s ease;
  width: 55px;
}
.question-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e9eef2;
  color: #5d666d;
  cursor: pointer;
  height: 55px;
  line-height: 55px;
  padding: 0 0 0 3%;
  position: relative;
  width: 100%;
}
.sub-container{
  position: relative;
  background-color: #dfe0e1;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  margin: 25px auto;
  width: 100%;
  padding: 35px 10px 10px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.sub-scroll:hover{
  background: #f7f7f7;
  box-shadow: 4px 5px 7px #b3b3b3;
  color: #212121;
}
.pre-btn{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  background: white;
  right: 5px;
}
.next-btn{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 45%;
  left: 5px;
}
.sub{
  height: 100%;
  background-color: #dfe0e1;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 15px;
}
.sub-scroll .sub-route{
  width: 200px;
  text-decoration: none;
  color: #0093c7;
  font-size: .9375em;
}
.sub-scroll{
  padding: 14px;
  height: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  background: white;
  color: #0094c9;
  border-radius: 5px;
}
.sub-scroll:hover{
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  color: black;
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
.title{
  background-color: #fff;
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: auto 100%;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  position: relative;
  transition: height 1s ease-in-out;
  text-align: left;
  width: 90%;
}
.title p{
  width: 60%;
}
.title div{
  display: flex;
}
.title div h3 {
  margin-right: 20px;
}
</style>
