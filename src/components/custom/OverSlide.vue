<template>
  <div>
    <div class="inner2">
      <div class="over">
        <h2> Over <span style="color: #1581af;">25 million learners</span>  have used Alison to empower themselves through education </h2>
      </div>
      <div class="disNone" >
        <button  class="next-btn" @click="preBtn2()"><b-icon icon="arrow-left" aria-hidden="true"></b-icon> </button>
        <button class="pre-btn" @click="nextBtn2()"><b-icon icon="arrow-right" aria-hidden="true"></b-icon> </button>
      </div>
      <div class="inner-main2" ref="dimwidth">
        <div class="hide2" v-for="(learn, index) in learners" :key="index">
          <div>
            <img :src="learn.img">
            <h5>{{learn.name}} <br> </h5>
            <p>  {{learn.learn}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabNav from "../custom/TabNav";
import _ from "lodash";
export default {
  name: "BuildCareer",
  components: {TabNav},
  data(){
    return{
      learners:[
        {img:'https://img.youtube.com/vi/x_gRYaSJcHA/mqdefault.jpg', name:'Morgan Ballou', learn:'Health and Safety Officer'},
        {img:'https://img.youtube.com/vi/8Ih6Lq9JS_M/mqdefault.jpg', name:'Ikechukwu Odiaka', learn:'Assistant Nurse'},
        {img:'https://img.youtube.com/vi/PeItMV574Hs/mqdefault.jpg', name:'Esther Anurika', learn:'Alison Graduate'},
        {img:'https://img.youtube.com/vi/4u6gAkMqweU/mqdefault.jpg', name:'Andrew De La Rose', learn:'Alison Graduate'},
        {img:'https://img.youtube.com/vi/HsTVwoDWdmo/mqdefault.jpg', name:'Sunil Sarad', learn:'Alison Graduate'},
      ],
    }
  },
  methods:{
    nextBtn2(){
      this.$refs.dimwidth.scrollLeft += this.$refs.dimwidth.offsetWidth/2
    },
    preBtn2(){
      this.$refs.dimwidth.scrollLeft -= this.$refs.dimwidth.offsetWidth/2
    },
  }
}
</script>

<style scoped>

.education1 p{
  font-size: 20px;
}

.slick-initialized .slick-slide, .slick-slide img {
  display: block;
}
.upskill:hover p {
  color: #69d269;
}
.inner2 .next-btn{
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
  top: 30%;
}
.inner2 .pre-btn{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  background: white;
  right: 80px;
}
.inner-main2::-webkit-scrollbar{
  display: none;
}
.over{
  width: 40%;
  padding: 30px ;
  text-align: left;
}
.hide2{
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
  background-color: white;
  margin-right: 15px;
}
.disNone{
  opacity: 0;
  /*width: 40%;*/
  transition: 0.5s linear;
}
.inner-main2{
  width: 60%;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: 0 auto;
}
.inner2:hover .disNone{
  opacity: 1;
}
.inner2{
  position: relative;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  background: #f3f6f7;
}

.inner-main button{
  border: 1px solid #b3bdc0;
  background: none;
  color: #5d676e;
  border-radius: 26px;
  /* transition: all .3s ease-in; */
  margin-right: 12px;
  min-width: 150px;
  padding: 5px 0;
}

a{
  text-decoration: none;
}

.box h1{
  color: white;
  text-align: left;
  padding: 15px 20px;
  font-size: 70px;
  position: absolute;
  top: 5px;
  left: 10px;
  font-weight: 700;

}
.box b-icon{
  font-weight: 700;
}

.tab-nav ul {
  justify-content: space-between;
  background: #f3f6f7;
  padding: 6px;
  width: 706px;
  margin: 24px auto;
}

.tab-nav li a, .tab-nav ul {
  display: flex;
  border-radius: 25px;
  text-decoration: none;
  color: black;
}
ol, ul {
  list-style: none;
}

.tab-nav .tab-nav__cta--active a{
  padding: 0 100px;
  text-decoration: none;
  font-weight: 500;
  background: #83c11f;
  color: #fff!important;
}
.tab-nav li{
  padding: 0 10px;
}
.tab-nav li a {
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 42px;
  transition: all .3s ease-in-out;
}
</style>

