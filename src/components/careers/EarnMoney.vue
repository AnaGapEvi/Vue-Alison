<template>
  <div class="earn">
    <div style="padding-top: 100px">
      <h1><b>Earn Money  By Empowering Millions</b></h1>
      <div class="intro__header-outer">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/earn-money-underline.svg">
      </div>
      <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly;  transition: 1s ease; padding:10px 100px">
        <router-link to="/psychometric-test/personality" class="bo">
          <div class="box">
            <div class="second">
              <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/earn-3.svg" >
            </div>
            <div class="first">
              <p><b>Affiliates Programme <b-icon icon="arrow-right" ></b-icon></b></p>
            </div>
          </div>
        </router-link>
        <router-link to="/" class="bo">
          <div class="box">
            <div class="second">
              <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/earn-1.svg" >
            </div>
            <div class="first">
              <p><b>Refer Your Friends<b-icon icon="arrow-right" ></b-icon></b></p>
            </div>
          </div>
        </router-link>
        <router-link to="/login" class="bo">
          <div class="box">
            <div class="second">
              <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/earn-2.svg" >
            </div>
            <div class="first">
              <p><b> Teach On Alison <b-icon icon="arrow-right" ></b-icon></b></p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="earn-money">
      <div class="money">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/affiliate.svg" width="100%">
      </div>
      <div class="story__intro">
          <h2>Become A Member Of The Alison Affiliate Programme</h2>
          <img style="display: none" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/affiliate.svg">
          <p class="sub">
            By becoming an Alison Affiliate Programme Member, you can earn income for yourself and help empower friends, families, companies and communities by introducing them to free learning. </p>
          <a class="but" href="https://alison.com/affiliates/learn-to-earn" title="Become An Affiliate Member">
            Become An Affiliate Member </a>
      </div>
    </div>
    <div class="earn-money2">

      <div class="story__intro">
        <h2>Become An Alison Course Creator</h2>
        <img style="display: none" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/affiliate.svg">
        <p class="sub">
          As a Course Creator, you will earn revenue by working with Alison’s publishing partners to convert their teaching material to online courses for our learners. You will write modules, course descriptions and learning outcomes that accurately reflect the course content and get online students excited about learning.        </p>
        <a class="but" href="https://alison.com/affiliates/learn-to-earn" title="Know More About Creating Courses">
          Know More About Creating Courses </a>
      </div>
      <div class="money">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/empower-your-friends.svg" width="100%">
      </div>
    </div>
    <div class="earn-money">
      <div class="money">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/teach-on-alison.svg" width="100%">
      </div>
      <div class="story__intro">
          <h2>Teach On Alison, Earn Money & Inspire Millions</h2>
          <img style="display: none" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/affiliate.svg">
          <p class="sub">
            If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a global audience and earn an income through our shared revenue offering. Join our community of self-publishers today!          </p>
          <a class="but" href="https://alison.com/affiliates/learn-to-earn" title="Publish Your Course On Alison">
            Publish Your Course On Alison </a>
      </div>
    </div>
    <div class="earn-money2">

      <div class="story__intro">
        <h2>Become An Alison Course Creator</h2>
        <img style="display: none" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/affiliate.svg">
        <p class="sub">
          As a Course Creator, you will earn revenue by working with Alison’s publishing partners to convert their teaching material to online courses for our learners. You will write modules, course descriptions and learning outcomes that accurately reflect the course content and get online students excited about learning.        </p>
        <a class="but" href="https://alison.com/affiliates/learn-to-earn" title="Know More About Creating Courses">
          Know More About Creating Courses </a>
      </div>
      <div class="money">
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/become-an-alison-creator.svg" width="100%">
      </div>
    </div>

    <div class="business story">
      <div class="coins" style="display: none"></div>
      <div class="inner">
        <div class="story__intro">
          <h2>Increase Your Income By Introducing Businesses &amp; Organisations To Alison</h2>
          <img style="display: none" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/homepage/business-mobile.svg">
          <a class="but but--white" href="https://alison.com/business/contact-us" title="Explore Alison For Business">Explore Alison For Business</a>
        </div>
      </div>
    </div>
    <over-slide></over-slide>
    <div >
    <begin-to></begin-to>
    </div>
  </div>
</template>

<script>
import TabNav from "../custom/TabNav";
export default {
  name: "EarnMoney",
  components: {TabNav},
  data(){
    return {
      activeItem: null,
    }
  },
}
</script>

<style scoped>
.business h2 {
  color: #fff;
  font-size: 28px;
  line-height: 40px;
  margin: 36px 0 32px;
}
.earn-money h2{
  padding-top: 10%;
}
.business {
  background: url('https://cdn01.alison-static.net/public/html/site/img/homepage/earn-business.png') no-repeat 100% 0/auto 100%,linear-gradient(90deg,#0094c9,#097ea7);
  position: relative;
}
.business .coins {
  background: url('https://cdn01.alison-static.net/public/html/site/img/homepage/coins.svg ') no-repeat 0 0/100%;
  display: block!important;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 150px;
}
.business .inner {
  justify-content: flex-start;
  padding-left: 213px;
}
.business .inner{
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding-left: 213px;
}
.story .inner {
  display: flex;
  align-items: start;
  /*justify-content: space-around;*/
}
.story__intro{
  width: 50%;
  padding: 20px;
  text-align: left;
}
.earn-money .story h2 {
  color: #2d3941;
  text-align: left;
  font-size: 26px;
  line-height: 54px;
  margin-bottom: 21px;
}
.sub {
  font-size: 16px;
  line-height: 28px;
  color: #646464;
  margin-bottom: 37px;
}
.sub p {
  font: 400 0.875em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin: 0 0 20px;
}
.story .but {
  margin-bottom: 70px;
}
.but {
  padding: 12px 39px;
  border-radius: 25px;
  color: #fff;
  background: #83c11f;
  display: inline-block;
  transition: all .3s ease-in-out;
  border: 1px solid #83c11f;
  overflow: hidden;
  position: relative;
}
a{
  outline: none;
  text-decoration: none;
}
.earn-money2{
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0;
}
.earn-money{
  display: flex;
  justify-content: space-evenly;
  background: #edf5e4;
  margin: 50px 0;
}
.money{
  width: 40%;
  padding: 80px;
}
.first{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
}
.bo:hover {
  color: #75bb39;
  transform: scale(1.05);
}
.story__intro a:hover{
  padding: 12px 39px;
  background: #638d1f;
  color: white;
  transition: all 500ms ease-in-out;
  border: 1px solid #638d1f;
  overflow: hidden;
  position: relative;
}
.second{
  background-size: 100% 100%;
  background: linear-gradient(90deg,#6db845 0,#55ae6a 50%);
  height: 65%;
  position: relative;
  /*border-radius: 20px 20px 0 0;*/
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
.box{
  width: 95%;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0 0 6px rgb(0 0 0 / 29%);
  overflow: hidden;
}
.box b-icon{
  font-weight: 700;
}
.box:hover{
  transition: all .3s ease-in-out;
}
.bo{
  width: 27%;
  text-decoration: none;
  color: #1c232e;
  font-size: 18px;
  transition-duration: 500ms;
}
.intro__header-outer {
  text-align: center;
}
.earn-intro h1 {
  font-size: 36px;
  color: #2d3941;
  font-weight: 700;
  margin-bottom: 50px;
  font: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
}
.earn{
  padding-top: 50px;
}
</style>
