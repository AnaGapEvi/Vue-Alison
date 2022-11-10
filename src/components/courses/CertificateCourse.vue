<template>
    <div style="background-color: #f3f6f7;">
        <div class="free-online-diploma">
          <h2>Online {{ valueSearch }} Programs  </h2>
          <p>
            Our specialist certificate programs are designed to give you job-role training
            and formal workplace skills. In fewer than three hours of active learning,
            you can complete any of our curated certificate courses to cover a gap in your existing knowledge or
            gain clarity on a new subject area. So, in a single morning or one afternoon, you can super-charge your skills - all for free.
            <br>
            <br>
            Job-role training courses offer you the aptitudes that are necessary for certain positions while formal
            workplace training will prepare you for professional examinations or assessment directly related to your
            field or industry. Select whichever category you like, find a learning level - beginner, intermediate or advanced
            - that suits your needs and start studying. Three hours later, you could have a new certificate course on your CV!
          </p>

        </div>
      <div class="courses">
        <div style="width: 100%;display: flex; justify-content: space-between">
          <h4>Top Free Online Certifications</h4>
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
      languages:[
        {language:'English', tr:'en'},
        {language:'Spanish', tr:'es'},
        {language:'Indonesian', tr:'id'},
        {language:'spanish(Latin America)', tr:'es-LA'},
        ],
      categories:{
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
      params: this.$route.params.name
    }
  },
  watch: {
    valueSearch(newValue, old){
      this.getCertificateCourse()
    }
  },
  computed: {
    valueSearch() {
      return this.$route.params.name;
    }
  },
  mounted() {
    this.getCertificateCourse()
  },
  methods:{
    getCertificateCourse(){
      const first = this.valueSearch.split(' ')[0]
       axios.get(`/type-courses/${first}`).then( response => {
         response.data.forEach((course) => {
           course.category.color = this.categories[course.category.name]
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
      axios.get(`/language-filter/${data.tr}`).then( response => {
        response.data.forEach((course) => {
          course.category.color = this.categories[course.category.name]
        })
        this.courses=response.data
      }).catch(e=>{
        this.error = e.response.data.message
      })
    }
  }
}
</script>

<style scoped>
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
  background-image: url('https://cdn01.alison-static.net/search/header-img/certificate.jpg');
  background-repeat: no-repeat;
  background-size: auto 300px;
  background-color: #fff;
  background-position: 100% 0;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  margin: 50px auto 25px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  transition: height 1s ease-in-out;
  width: 90%;
  text-align: left;
}
.free-online-diploma p{
  width: 60%;
  color: #5d666d;
  font-size: 14px;
  line-height: 23px;
}
</style>
