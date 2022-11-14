<template>
  <div class="online-learning">
    <div class="learning-main">
      <div class="learning-img">
          <h2>Learn Anywhere, Anytime For Free</h2>
          <p>We believe that learning should never stop. That’s why, we’ve developed the Alison App - so that even when you’re on the move, your journey towards betterment moves forward with you. Read less</p>
          <img src="https://cdn01.alison-static.net/public/html/site/img/app-store-badge.png">
          <img src="https://cdn01.alison-static.net/public/html/site/img/google-play-badge.png">
          <p class="learners">
            <b-icon icon="circle-fill" variant="success"></b-icon>
            <span>1,000,000+</span> learning on the Alison App
          </p>
      </div>
    </div>
    <div class="million-members">
      <ul>
        <li v-for="(member, index) in members" :key="index">
          <img :src="member.img" />
          <p> <b>{{member.key}}</b> <br>  {{member.value}}</p>
        </li>
      </ul>
    </div>
    <div class="alison-graduates">
      <div>
        <h2>What Alison Graduates</h2>
        <h2>Say about The App </h2>
      </div>
      <div class="content">
        <p>{{msg}}</p>
        <img src="https://alison.com/html/site/img/app-landing-testimonial2.png" width="80px">
        <b-icon icon="star-fill" variant="warning" v-for="star in 5" class="ml-5"></b-icon>
      </div>
    </div>
    <div class="grow">
      <img src="https://alison.com/html/site/img/app-landing-footer.png">
      <div>
        <h2>Grow While You’re On The Go</h2>
        <ul>
          <li> <img src="https://cdn01.alison-static.net/public/html/site/img/app-landing-tick.png" />Experience a personalised learning journey</li>
          <li> <img src="https://cdn01.alison-static.net/public/html/site/img/app-landing-tick.png" />Complete your courses and progress faster</li>
          <li> <img src="https://cdn01.alison-static.net/public/html/site/img/app-landing-tick.png" />In-app chat support</li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineLearning",
  data(){
    return {
      members:[
        {key:'25 Million+', value:'Members', img:'https://alison.com/html/site/img/app-landing-icon1.svg'},
        {key:'5 Million+', value:'Graduates', img:'https://alison.com/html/site/img/app-landing-icon1.svg'},
        {key:'4,000+', value:'Free Online Courses', img:'https://alison.com/html/site/img/app-landing-icon3.svg'},
        {key:'195', value:'Countries', img:'https://alison.com/html/site/img/app-landing-icon4.svg'},
      ],
      msg:'This App, is really amazing. The content provided here is just worth investing the time for  skill development. I love it. Thanks for creating this beautiful app.'
    }
  }
}
</script>

<style scoped>
.learners {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 13%);
  color: #717980;
  padding: 9px 23px 6px;
}
.grow ul li img {
  width: 30px;
  margin: 10px;
}
.grow h2{
  color: #1b232e;
  font-size: 32px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 25px;
}
.grow ul{
  /*margin: 5px 200px 0 0 ;*/
  text-align: left;
  padding: 0;
  list-style: none;

}
.grow img{
  width: 50%;
}
.grow{
  display: flex;
  /*justify-content: space-around;*/
  align-items: center;
}
.content{
  text-align: left;
}
.alison-graduates p{
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}
.alison-graduates h2{
  color: #fff;
  font-size: 38px;
  font-weight: 400;
  line-height: 54px;
  text-align: left;
}
.alison-graduates{
  color: white;
  padding: 50px;
  display: flex;
  background: #1794c9 url('https://cdn01.alison-static.net/public/html/site/img/app-landing-testimonial-bg.svg') no-repeat 0 0;
}
.alison-graduates div{
  width: 50%;
}
.learning-main{
  background: #edf5e4;
  /*height: 500px;*/
}
.learning-img p{
  width: 40%;
  margin: 30px 0;
}
.learning-img{
  /*height: 500px;*/
  background-image:  url('https://cdn01.alison-static.net/public/html/site/img/app-landing-header-desktop.png');
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: right bottom;
  text-align: left;
  padding: 100px;
}
.million-members ul{
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  margin: 25px;
  text-align: left;
}
.million-members ul li {
  display: flex;
  align-items: center;
  padding: 0;

}
.million-members ul li p{
  margin: 7px;
}
</style>
