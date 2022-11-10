<template>
    <div style="position: relative">
      <div class="title-course">
        <h4 v-for="(course, index) in courses" :key="index">
          <button :class="{ active: (index === activeId) }" @click="getCourseType(course.name, index)" >
            {{course.name}}
          </button>
        </h4>
      </div>
      <div >
        <div style="display: flex;  gap: 15px;   overflow-x: hidden; scroll-behavior: smooth;" ref="widthType">
          <div  v-for="course in courseType" style="min-width: 24.5%; margin-top: 20px" :key="course.id">
            <course :course="course"> </course>
          </div>
        </div>
      </div>
      <div class="disNone" >
        <button  class="next-btn" @click="preBtn()"><b-icon icon="chevron-left" aria-hidden="true"></b-icon> </button>
        <button class="pre-btn" @click="nextBtn()"><b-icon icon="chevron-right" aria-hidden="true"></b-icon> </button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Course from "./Course";
export default {
  name: "CourseType",
  components: {Course},
  data(){
      return {
        activeId: 0,
        courseType:[],
        courses:[{name:'Popular Course'}, {name:'Top Diplomas'}, {name:'Top Certificates'}, {name:'New Courses'}]
      }
   },
  watch(){

  },
  computed:{
    // return
  },
  mounted() {
     this.getCourseType(this.courses[0].name, this.activeId)
  },
  methods:{
    getCourseType(course, index){
      console.log(course)
      axios.get(`/top-course/${course}`).then( resp => {
        this.courseType= resp.data
        this.activeId = index;
      }).catch( error =>{
        return error
      })
    },
    getCourseTypeTop(index){
      axios.get('/top-diplomas').then( resp => {
        this.courseType=[]
        this.courseType= resp.data
        console.log(this.courseType)
        this.activeId = index;
      }).catch( error =>{
        return error
      })
    },
    getTopCertificates(index){
      axios.get('/top-certificates').then( resp => {
        this.courseType=[]
        this.courseType= resp.data
        this.activeId = index;

      }).catch( error =>{
        return error
      })
    },
    newCourses(index){
      axios.get('/new-courses').then( resp => {
        this.courseType=[]
        this.courseType= resp.data
        this.activeId = index;
      }).catch( error =>{
        return error
      })
    },
    nextBtn(){
        this.$refs.widthType.scrollLeft += this.$refs.widthType.offsetWidth/4
      },
    preBtn(){
        this.$refs.widthType.scrollLeft -= this.$refs.widthType.offsetWidth/4
    },
  }
}
</script>

<style scoped>
.active {
  color: green;
  padding-bottom: 10px ;
  border-bottom: #6ea21f 5px solid;
  margin-bottom: -12px;
}
.disNone{
  width: 115%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: -7.5%;

}
.title-course{
  position: relative;
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 3px solid lightgrey;
}
button{
  background: none;
  border: none;
}
.under {
  background: #6ea21f;
  border-radius: 2px;
  bottom: -3px;
  height: 4px;
  opacity: 0;
  position: absolute;
  /*transition: left .8s cubic-bezier(.64,.57,.265,1.2);*/
  width: 60px;
}
.next-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: #0093c7;
  border: 1px solid #0093c7;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/

}
.pre-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: #0093c7;
  border: 1px solid #0093c7;
}
</style>
