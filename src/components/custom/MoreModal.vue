<template>
  <div class="modal" @click="moreModal">
    <div class="modal-body">
      <div class="more" v-for="(more, index) in mores" :key="index">
        <img :src="more.img">
        <router-link v-if="more.url" :to="more.url" style="text-decoration: none; color: #1c232e; line-height: 2px; text-align: left; margin-left: 10px; padding-top: 5%">
          <p style="font-size: 15px">{{more.title}}</p>
          <p style="font-size: 13px; ">{{more.body}}</p>
        </router-link>
        <router-link v-if="more.href" :to="more.href" style="text-decoration: none; color: #1c232e; line-height: 2px; text-align: left; margin-left: 10px; padding-top: 5%">
          <p style="font-size: 15px">{{more.title}}</p>
          <p style="font-size: 13px; ">{{more.body}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['moreModal'],
  data(){
    return{
      mores: [
        {title: "Workplace Personality Assessment", body: "Discover Your Strengths & Weaknesses", img: "https://alison.com/html/site/img/header/wpa.svg", url:"/psychometric-test/personality"},
        {title: "Mental Health Assessment", body: "Assess Your Mental Wellbeing", img:"https://alison.com/html/site/img/header/mental-health-assessment.svg", url:"/"},
        {title: "Resume Builder", body: "Create Your Professional Resume", img: "https://alison.com/html/site/img/header/resume-builder.svg", url:"/login"},
        {title: "Alison Blog", body: "News, Insights, Tips And Stories From Alison", img: "https://alison.com/html/site/img/header/alison-blog.svg", href:"/https://blog.alison.com/"},
        {title: "Alison For Business", body: "NeUpskill Your Employees", img: "https://alison.com/html/site/img/header/alison-for-business.svg", url:"/business/contact-us"},
        {title: "Get Alison Premium", body: "Remove Ads", img: "https://alison.com/html/site/img/header/premium.svg", url:"/"},
      ],
    }
  },
  methods:{
    // back(){
    //   this.showModalRegister=!this.showModalRegister
    //   this.moreModal = false
    // },
  }
}

</script>
<style scoped>
.modal{
  /*position: relative;*/
  top: 65px;
  height: 100vh;
  display: flex;
  background: rgba(80, 75, 75, 0.7);
  padding: 0;
  right: 25%;
}
.modal-body{
  top:10px;
  position: absolute;
  left: 55%;
  max-width: 32%;
  background: white;
  height:auto;
  border-radius: 15px;
  padding: 15px;
}
.more{
  /*position: absolute;*/
  width: 95%;
  margin-left: 50% ;
  margin-top: 80px;
  background: white;

}

@keyframes rotate {
  100%{
    transform: rotate(360deg)
  }

}

.more{
  /*border: 1px solid gray;*/
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 10px;
  color: #2d3941;
  box-shadow: 0 0 6px rgb(0 0 0 / 29%);
}
.more:hover{
  background-color: rgba(165, 245, 165, 0.73);
  transition: 500ms ease-in-out;
  box-shadow: 0 0 6px rgba(42, 173, 6, 0.29);
  stroke: none;
  stroke-dasharray: 50 700;
  stroke-dashoffset: 150;
  fill: none;
  cursor: pointer;
}
</style>
