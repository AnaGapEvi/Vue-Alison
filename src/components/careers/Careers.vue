<template>
  <div>
    <div class="banner">
      <div class="about-banner">
        <h1 class="banner-title">Career Guide</h1>
        <img src="https://cdn01.alison-static.net/public/html/site/img/careers/headling-border.svg">
        <p>Alison’s career guide will help you discover more about your career path and identify the exact courses you need to excel in your career.</p>
      </div>
    </div>
    <div class="container search-bar-outer">
      <div class="row search-bar">
        <div class="col-md-4 col-md-4--modified text-right text-sm-center">
          <p class="top-action-paragraph">Get started by <strong>selecting your preferred career category, or</strong></p>
        </div>
        <div class="col-md-4 text-left text-sm-center">
          <b-input-group size="sm" class="mb-2" style="border-radius: 5px;overflow: hidden ">
            <b-form-input type="search" placeholder="Search terms" v-model="search" v-on:keyup="searchCareer"></b-form-input>
            <b-button is-text class="d-flex p-3 justify-content-center; align-items-center" style="background: #465159; border: none">
              <b-icon icon="search" style="color: white;border: none"></b-icon>
            </b-button>
          </b-input-group>
        </div>
      </div>
    </div>
    <div class="careers">
      <div class="career-section" v-for="career in careers">
        <div style="position: relative">
          <div class="career">{{career.title}}</div>
            <div class="career2">
              <div>
                <span>{{career.title}}</span>
                <p>{{career.description}}</p>
                <div style=" color: #0093c7; font-size: 17px; display: flex; padding: 0; margin: 0; align-items: center; width: 100%">
                  <p style="color: #0093c7; width: 60%"><b>View Careers</b></p>
                  <b-icon icon="arrow-right" style="width: 20%"></b-icon>
                </div>
              </div>
          </div>
          <img :src="career.image" width="350px" height=" 266px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Careers",
  data(){
    return{
      careers: [],
      search:'',
      originalCareers: []
    }
  },
  mounted() {
    this.getCareers()
  },
  methods:{
    getCareers(){
      axios.get('/careers').then(resp=>{
        this.careers=resp.data
        this.originalCareers = this.careers;
      }).catch(error =>{
        this.error = error.response.data.message
      })
    },
    searchCareer()
    {
      if(this.search == '')
      {
        this.careers = this.originalCareers;
        return;
      }
      let searchedCareers = [];
      for(let i = 0; i < this.originalCareers.length; i++)
      {
        let careerName = this.originalCareers[i]['name'].toLowerCase();
        if(careerName.indexOf(this.search.toLowerCase()) >= 0)
        {
          searchedCareers.push(this.originalCareers[i]);
        }
      }
      this.careers = searchedCareers;
    },
  }
}
</script>
<style scoped>
.banner-title{
  color: #fff;
  font-family: Roboto,sans-serif;
  font-size: 44px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 46px;
  margin: 20px 0;
  opacity: 1;
  padding-top: 30px;
  text-shadow: 0 0 20px #000;
}
.career2 p{
  margin-top: 25px;
  font-family: Roboto,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;
  color: #5d676e;
  overflow: hidden;
  text-overflow: ellipsis; display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
.career2 span{
  font-family: Roboto,sans-serif;
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0;
  color: #465159;
  height: 80px;
}
.career{
  padding: 25px;
  height: 266px;
  position: absolute;
  background-color: rgba(28,35,46,0.62);
  width: 350px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto,sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0;
  color: rgba(255,255,255,.91);
  box-shadow: 5px 10px;
}
.career-section:hover .career2{
  display: block !important;
  box-shadow: 0 0 6px rgba(42, 173, 6, 0.29);
  transition: all 2s linear;
}
.career-section:hover{
  transition: 500ms ease-in-out;
}
.career2{
  text-align: left;
  padding: 25px;
  height: 100%;
  position: absolute;
  background-color: white;
  transition: opacity 1s ease-out;
  display: none;
  width: 100%;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  font-family: Roboto,sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0;
  color: black;
}
.career-section{
  height: 266px;
  margin: 15px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgb(51 51 51 / 30%);
}
.careers{
  padding: 0 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  transition: 2s ease-in-out;
}
.careers img{
  overflow: hidden;
  border-radius: 20px;
}
.row p {
  font-family: Roboto,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;
  color: #2d3941;
}
.container.search-bar-outer .col-md-4--modified {
  width: 35%;
}
.text-right {
  text-align: right;
}
.container .search-bar {
  margin-top: 29px;
  margin-bottom: 20px;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}
.container.search-bar-outer {
  max-width: 100%;
}
.container {
  width: 100%;
  padding: 0 15px;
}
.banner{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 250px;
  background-image: url("https://alison.com/html/site/img/careers/careers-categories-page-header-img.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.banner h1 {
  font-size: 44px;
  font-weight: 700;
  line-height: 46px;
  color: #fff;
  margin: 20px 0 0 0 ;
  padding-top: 30px;

}
.banner p {
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: #eaeff4;
  min-width: 280px;
  max-width: 610px;
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 20px;
}
</style>
