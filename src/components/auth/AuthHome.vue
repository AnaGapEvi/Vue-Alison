<template>
  <div class=dashboard>
    <div class="left-asside">
      <div class="person"></div>
      <p style="text-align:center; margin: 0px; padding:0; font-size: 16px"><b>{{user.firstname}}</b></p>
      <p style="text-align:center; margin: 0px; padding:0"><router-link to="" style="text-decoration: none; color: black">View Profile</router-link></p>
      <p style="text-align:center; margin: 0px">Alison ID {{user.id}}</p>
      <p class="root withSVG"><b-icon icon="play-circle-fill"></b-icon>Continue Leraning</p>
      <p class="root withSVG"><b-icon icon="heart-fill"></b-icon>For You</p>
      <router-link class="root" to="/dashboard"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/dashboard.svg')"></div>Your Dashboard</router-link>
      <router-link to="" class="root"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/your-resume.svg')"></div>Resume Builder</router-link>
      <router-link to="" class="root"><div class="icons" style="background-size: 50%; background-image: url('https://cdn-icons-png.flaticon.com/512/3135/3135704.png')"></div>Learner Report</router-link>
      <router-link to="" class="root"><div class="icons" style="background-size: 50%; background-image: url('https://cdn-icons-png.flaticon.com/512/91/91202.png')"></div>Upgrade to Premium</router-link>
      <router-link to="" class="root"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/your-certificates.svg')"></div>Get Certificate</router-link>
      <router-link to="" class="root"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/settings.svg')"></div> Account Settings</router-link>
      <router-link to="" class="root withSVG"><b-icon icon="question-square-fill"></b-icon> Help</router-link>
      <div class="icons" style=" background-image: url('https://alison.com/html/site/img/header/logout.svg')"></div><button @click="logout()" class="log-btn"> Logout </button>
    </div>
    <div class="main">
      <div class ="main-title">
       <p style="font-size: 28px"> Good Afternoon, <b>{{user.firstname}}</b></p>
        <ul class="list">
          <li><img src="https://cdn-icons-png.flaticon.com/512/1164/1164620.png" width="20px">Learn & Get Certificate</li>
          <li><b-icon icon="briefcase-fill" mr=15></b-icon>Build Your Carees</li>
          <li><i class="fa fa-usd"></i> Earn Now</li>
        </ul>
      </div>
      <div class =recomendations>
        <div class="recomendations-img">
          <div class="recom-descrip">
            <p class="title"><b>Get Personalised Course & Career Recommendations!</b></p>
            <p class="tell">Tell us what your learning goals and career objectives are, and we will recommend the best courses for you to enrol in.</p>
            <button class="green-btn"> Get Recommendations  </button>
          </div>
        </div>
      </div>
      <span class="grow">{{user.firstname}} track and grow your <b>stats and achievements</b></span>
      <div class ="weekly">
          <div class="recom-descrip">
              <p class="set-weekly">Set A Weekly Study Reminder</p>
              <p>Learners who set study reminders are 75% more likely to complete a course. You can change this any time.</p>
          </div>
          <div class="radio">
            <input type="radio" name="learn">
            Learn 2 days a week
          </div>
          <div class="radio">
            <input type="radio" name="learn">
            Learn 3 days a week
          </div>
          <div class="radio">
            <input type="radio" name="learn">
            Learn 5 days a week
          </div>
      </div>
      <div style="display:flex; justify-content:space-evenly; margin: 40px auto">
        <div class="clock">
          <div>
              <div style="display: flex; justify-content: space-between">
                <span class="title-reminder">Learning Statistics</span>
                <router-link to="" style="font-size: 12px;margin-top: 15px; width:25%; color: #1783b1">Learner Report</router-link>
              </div>
              <div style="display:flex">
                <div class="mins">
                  <p><b>O Mins</b><br> Your Total Time Learning</p>
                  <p>Course Completion Percentage 0%</p>
                  <p>Courses Completed</p>
                  <p>Courses In Progress</p>
                </div>
                <div class="box">
                  <p class="sandxak">
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div class="clock">
              <p class="medal-title">Medals</p>
              <div class=medals>
                <div style="margin: 5px; display: flex; align-items: center;width: 30%" v-for="(medal, index) in medals" :key="index">
                  <img class="img" :src= "medal.img" width="65px" height="65px" />
                  <!--                <span>0</span>-->
                  <p class="descriptionP" style="text-align: left;font: 12px/14px Roboto; letter-spacing: 0; color: #777e83; font-family: Roboto,sans-serif; min-width: 66px; margin: 0 !important;">
                    <span v-html="medal.title"></span><br>{{medal.description}}
                  </p>
                </div>
              </div>
              <p class="medal-title">Next Medal</p>
              <div class="medal-desc">
                <p style="margin: 0 !important;">You are <b> 1 day</b> away from earning</p>
                <input type="range" value="50%" disabled>
                <img  :src="medals[2].img" width="30px"/>
              </div>
              <button class="medal-btn">Continue Learning</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabNav from '../custom/TabNav.vue'
import userTabmenu from '../custom/userTabmenu.vue'
export default {
  components: { userTabmenu, TabNav },
  name: "AuthHome",
  data(){
    return{
      user:{},
      token: localStorage.getItem('access_token'),
      medals:[
        {title: 'Gold', description:"Learn 2 days  in a week to earn Gold", img:'https://alison.com/html/site/img/angular-shop/dashboard/medals-gold.svg'},
        {title: 'Silver', description:'Learn 2 days in a week to earn Silver', img:'https://alison.com/html/site/img/angular-shop/dashboard/medals-silver.svg'},
        {title: 'Bronze', description:'Learn 1 day in a week to earn Bronze', img:'https://alison.com/html/site/img/angular-shop/dashboard/medals-bronze.svg'}
      ]
    }
  },
  mounted(){
    if (this.token!==''){
      this.getAuth()
    }
  },
  methods:{
      getAuth(){
        this.axios.get('/auth-user', {
          headers: {
            Authorization: 'Bearer '+localStorage.getItem('access_token')
          }
        }).then(result => {
            this.user = result.data.user
          }).catch( error => {
              return error
        })
    },
    logout(){
      this.axios.get('/logout').then(result => {
        localStorage.removeItem('access_token');
        this.token=''
        this.$router.push({path: "/"});
        // window.location.reload()
      }).catch(error => {
          return error
      })
    },
  }
}
</script>

<style scoped>
.medal-desc{
   display: flex;
  align-items: center;justify-content: space-between;
  padding: 15px 40px;
}
.set-weekly{
  text-align: left;
  font-weight: 800;
  letter-spacing: 0;
  font-family: Roboto,sans-serif;
  color: #000;
  text-transform: capitalize;
  opacity: .7;
  margin-bottom: 8px !important;
  font-size: 16px;
}
.medal-btn{
  height: 55px;
  width: 100%;
  border: none;
  color: white;
  font-weight: 700;
  background-color: #83c124;
  cursor: pointer;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 0 0 8px 8px;
}
.medal-title{
  font-size: 16px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 15px
}
.medals{
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
  width: 100%;
  padding: 25px 0;
}
.box{
  background-image: url(https://alison.com/html/site/img/angular-shop/dashboard/statistics_empty.svg);
  background-position: center;
  background-repeat: no-repeat;
  /* height: 300px; */
  width: 50%;

}

.descriptionP span {
  margin-bottom: 10px;
  font-weight: 700;
  display: inline-block;
}

.sandxak{
    text-align: center;
    font: 14px/21px Roboto;
    letter-spacing: 0;
    color: #777e83;
    opacity: 1;
    font-family: Roboto,sans-serif;
    font-size: 14px;
}
.mins{
  background-image: url(https://alison.com/html/site/img/angular-shop/dashboard/clock_illustration@2x.png);
  background-position: right top;
  background-repeat:no-repeat ;
  background-size: 20%;
  border: 1px solid #D2D8DE;
  border-radius: 15px;
  width: 40%;
  padding: 0 !important;
  margin: 25px 15px;

}
.mins p{
  border-bottom: 0.5px solid #D2D8DE;
  width: 100%;
  margin: 20px 0 !important;
  padding: 5px 5px ;
  font-size: 14px !important;
}
.title-reminder{
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 19px;
    color: #465159;
    margin-left: 16px;
    margin-top: 16px;

}
.clock{
    box-shadow: 0 0 6px #504e4e29;
    background: #FFFFFF 0 0 no-repeat padding-box;
    border-radius: 12px;
    width: 42.5%;

    /* border: 1px solid black */
}
.radio{
  background: #FFFFFF 0 0 no-repeat padding-box;
    border: 1px solid #D7D7D7;
    border-radius: 8px;
    opacity: 1;
    padding: 16px 18px;
    height: 73px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 20%;
    margin: 5px;
    text-align: left;
}
.radio input{
  margin-right: 10px ;
}
.recom-descrip{
  /* padding: 20px auto; */
  margin: 10px auto;
  text-align: center;

}
.grow{
  letter-spacing: 0;
  opacity: 1;
  font-family: Roboto,sans-serif;
  font-size: 20px;
  margin-bottom: 23px;
  color: #2d3941;
  width: 100%;
  text-align: left;
  margin-left: 5% !important;
}

.tell{
    max-width: 372px;
    text-align: center;
    font: 12px/16px Roboto;
    letter-spacing: 0;
    font-size: 12px !important;
    margin: 10px auto !important;
    color: #5d676e;
    opacity: 1;
    text-align:center !important;
}
.log-btn{
  border: none;
  background: none;
  color: #2d3941;
  font-size: 15px;
}
.dashboard-list{
    display:flex;
    margin: 10px;
    align-items: center;
    /* justify-content: space-between */
}
.root.withSVG  svg{
  margin-right: 25px;
  font-size: 15px
}
.recomendations{
    width: 90%;
    display: flex;
    margin: 40px auto;
    align-items: center;
    background-size: cover;
    border: 2px solid #D8E7ED;
    border-radius: 12px;
    height: 170px;
    justify-content: space-between;
    background: linear-gradient(262deg,#F5FCFD 0%,#E7F3F8 100%);
}
.weekly{
    background: #FFFFFF 0 0 no-repeat padding-box;
    box-shadow: 0 0 6px #504e4e29;
    border-radius: 12px;
    opacity: 1;
    padding: 24px 30px;
    width: 90%;
    margin: 20px auto;
    height: 170px;
    display: flex;
    align-items:center;
    justify-content: space-around;

}
.green-btn{
    background-color: #83c11f!important;
    border: 0;
    border-radius: 40px;
    padding: 13px 63px;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: 500;
    color:white
}
.recomendations .title{
  letter-spacing: .02px;
    color: #2d3941;
    opacity: 1;
    font-family: Roboto Black,sans-serif!important;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
}
.recomendations-img{
  width: 100%;
  height: 170px;
  background-image: url(https://cdn01.alison-static.net/public/html/site/img/angular-shop/dashboard/personalization_illustration_full.svg);
}
.root{
    color: gray;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-top: 20px;
}
.root:hover{
    color: black;
    font-weight: 500;
}
.list{
  font-size: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 50%;
  text-decoration: none;
  list-style: none;
  margin-bottom: 20px;
  margin-top: 60px;
}
.list li:hover{
  color: green;
  border-bottom: 3px solid green;

}
.list li{
  /* color: green; */
  border-bottom: 3px solid lightgray;
}
.main p{
  text-align: left;
    letter-spacing: 0;
    color: #2d3941;
    opacity: 1;
    font-family: Roboto,sans-serif;
    font-size: 15px;
    margin-bottom: 25px;
    margin-left: 45px;
    /* min-height: 34px; */
}
.main-title{
  background-image: url(https://alison.com/html/site/img/angular-shop/dashboard/dashboard-top-right-img.svg);
  background-repeat: no-repeat;
  background-position:  right 10% bottom ;
  font-size: 28px;
  /* padding: 60px 200px 10px 10px; */
  text-align: left;
  color:#2d3941;
  background-color: #f3f6f7;
}
.dashboard{
  display: flex;
  min-height: 100vh;
  margin-top: 15px ;
}
.left-asside{
  z-index: 100;
  width: 19%;
  text-align: left;
  padding-left: 15px ;
  box-shadow: 0 0 3px  #888;
  }
.person{
  width: 90px;
  height: 90px;
  margin: 20px auto;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px solid;
  border: 4px solid lightgrey;
  background-image: url("https://alison.com/images/users/default/26681657.jpg");
  background-size: cover;
}
.icons{
  width: 30px;
  height: 30px;
  /* margin: 20px auto; */
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  /* border: 1px solid lightgrey; */
  /* background-image: url("https://alison.com/images/users/default/26681657.jpg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px ;
}
.main{
  background: #fcfcfc;;
  /* min-height: 100vh; */
  /* width: 100%; */
}
</style>
