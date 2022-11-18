<template>
  <div>
    <div class="banner">
        <h1>{{ main.title }}</h1>
        <p>{{ main.text }}</p>
       <router-link to="" tag="span">{{ main.span }}</router-link>
    </div>
    <div class="courses-box">
      <div class="certificate" v-for="course in courses" :style="{ background: course.background}">
        <img :src="course.img" width="80px">
        <h2>{{course.name}}</h2>
        <h5>{{course.title}}</h5>
        <div class="progressbar modified" data-animate="false">
          <div class="circle"><canvas width="150" height="150"></canvas>
            <div style="font-size: 35px; margin-left: -8px">{{course.hour}}<br>hrs</div>
          </div>
        </div>
        <p>{{course.description}}</p>
<!--        <span title="I am hovering over the text">This is the text I want to have a mousover</span>-->
<!--        <a href=" " title="This is some text I want to display." style="background-color:#FFFFFF;color:#000000;text-decoration:none">This link has mouseover text.</a>-->
        <button class="btn-see">See all Diploma Courses</button>
      </div>
    </div>
    <p style="margin: 25px auto">To see why our learners enroll and certify in these courses, check out our main <span style="cursor: pointer; color: #006c94">Graduate Outcomes</span>, or read <span style="cursor: pointer;color: #006c94">Testimonials</span> directly from our graduates</p>
    <a href="https://alison.com/graduate-outcomes" title="Graduate Outcomes" class="d-block"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlHwW0RVl9RM5teDmsXZVdH631ZTt3ZWSrg&usqp=CAU" width="20px"/></a>
    <router-link to="">Discover Graduate Outcomes</router-link>
    <hr style="width: 30px;border-top: 2px solid #0091c7; border-radius: 10px; margin: 30px auto">
    <a href="https://alison.com/testimonials" title="Graduate Testimonials" class="d-block"><b-icon icon="chat"></b-icon></a>
    <router-link to="">Read Graduate Testimonials!</router-link>
    <hr style="width: 30px;border-top: 2px solid #0091c7; border-radius: 10px; margin: 30px auto">
    <icons-link></icons-link>
  </div>
</template>

<script>
import IconsLink from "../custom/iconsLink.vue";

export default {
  name: "AboutAlisonCourses",
  components: {IconsLink},
  data(){
    return{
      main: {
        title: 'About Alison Courses',
        text: 'Alison offers over 4000 free online courses across nine distinct categories. The types of courses across the categories include:',
        span: 'Certificate Courses, and Diploma Courses'
      },
      courses:[

        {hour:'2-3', background:'#f3f6f7', img:'https://cdn-icons-png.flaticon.com/512/1547/1547295.png', name:'Certificate Courses',title:'Average hour duration:', description:'There are times when you may wish to specialise in a whole subject area, and there are times where you may prefer to gain critical knowledge of individual concepts within a subject area.\n' +
            '      Alison’s Certificate courses will help you focus your learning on distinct topics, to provide you with specific expertise in your field or industry. By concentrating your energy on singular concepts, the niche skills you gain could set you apart from the rest.\n' +
            '\n' +
            '      Our Certificate courses include an abundance of subjects, such as:\n' +
            '      languages, media studies, journalism and public relations, health and fitness, business studies, computer programming and networking, and many more!'},
        {hour:'8-10',background:'#e9eef2', img:'https://cdn.iconscout.com/icon/free/png-256/academy-3-444459.png', name:'Diploma Courses',title:'Average hour duration:', description:'With the help of our intensive and comprehensive Diploma courses, you will gain valuable skills and training on key topics, all under one roof.\n' +
            'Diploma courses are specifically designed to give you a more extensive and thorough understanding of a subject area, by helping you master multiple concepts within a subject.\n' +
            '\n' +
            'Successfully completing an Alison Diploma course will give you an edge, and greatly enhance your employability and career prospects.\n' +
            '\n' +
            'Our Diploma courses span a variety of professional subjects, such as:\n' +
            'workplace safety and health, business management and entrepreneurship, food safety, nursing and patient care, customer service, and much more!'}
      ]



    }
  }
}
</script>

<style scoped>
.circle canvas {
  vertical-align: middle;
}
.circle div {
  color: #2d3942;
  font-size: 2.275em;
  left: 5px;
  line-height: 45px;
  position: absolute;
  text-align: center;
  top: 30px;
  width: 100%;
}
.circle {
  text-align: center;
}
.modified {
  background: url('https://cdn01.alison-static.net/public/html/site/img/clock_face.png') no-repeat 10px 10px;
  margin: 25px auto;
  padding: 0 10px 10px;
  width: 160px;
  position: absolute;
  left: 37%;
}
.certificate p{
  margin: 230px 10px 80px;
  font-size: 14px;
  text-align: left;
}
.certificate h2{
  margin: 20px;
}
.certificate{
  position: relative;
}
.banner p{
  margin: 0!important;
  padding: 0!important;
}
.btn-see{
  background: #0091c7;
  color: #fff;
  border-radius: 3px;
  margin: 25px auto 20px;
  padding: 10px 25px;
  text-align: center;
  border: none;
}
.banner span{
  color: #0093c9;
  cursor: pointer;
}
.banner h1{
  font-size: 3.75em;
  line-height: 1.1666666667em;
}
.banner {
  padding-top: 50px;
  height: 300px;
  background: url(https://cdn01.alison-static.net/public/html/site/img/banner-bg.jpg) no-repeat 0 0/cover;
  color: #fff;
  text-align: center;
}
.courses-box div{
  width: 50%;
  text-align: center;
  padding: 10px;
}
.courses-box{
  display: flex;
}
</style>
