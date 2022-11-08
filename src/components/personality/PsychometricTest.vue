<template>
  <div class="billboard">
    <div class="bill-load">
        <div class="loading one">
          <h1>
            Understand <br>
            who you truly are.
          </h1>
          <p>
            Designed by expert psychologists, Alison’s free workplace personality assessment enables you to
            realise your career dreams by providing you with an extremely accurate report of who you are and
            why you do things the way you do.
          </p>
          <button>
            <a title="Go and take our test" href="/psychometric-test/personality/1/assessment" class="cta cta--green">
              Start Your Free Workplace Personality Assessment <span class="arrow"></span>
              <b-icon icon="arrow-right"  style="font-size: 20px"></b-icon>
            </a>
          </button>
        </div>
        <div class="loading two">
          <img src="https://alison.com/html/site/img/psychometrics/header-img.png" >
        </div>
      <div class="row p-cards">
        <div  class="p_card" >
          <img :src="discover[0].img">
          <p>Discover your professional <span> strengths and weaknesses </span></p>
        </div>
        <div  class="p_card" >
          <img :src="discover[1].img">
          <p>Get  <span> personalised course recommendations </span> to <span>  upskill</span> yourself</p>
        </div>
        <div  class="p_card" >
          <img :src="discover[2].img">
          <p>Explore    and your interests  <span> careers that match your personality, </span> your <span> strengths,</span> and your <span>interests </span></p>
        </div>
      </div>
      </div>
    <div class="bill">
      <div class="loading two">
        <img src="https://alison.com/html/site/img/psychometrics/scientific.svg" >
      </div>
      <div class="loading one">
        <h1>
          Short. Simple. Scientific
        </h1>
        <p>
          Designed by expert psychologists, Alison’s free workplace personality assessment enables you to
          realise your career dreams by providing you with an extremely accurate report of who you are and
          why you do things the way you do.
        </p>
        <button>
          <a title="Go and take our test" href="/psychometric-test/personality/1/assessment" class="cta cta--green">
            Start Your Free Workplace Personality Assessment <span class="arrow"></span>
            <b-icon icon="arrow-right"  style="font-size: 20px"></b-icon>
          </a>
        </button>
      </div>
    </div>
    <div class="benefits">
      <img src="../../assets/bg.svg" class="img1">
      <img src="../../assets/bg2.svg" class="img2">
      <h2>
        <strong>Benefits</strong> of taking the world’s best <br><strong>free workplace personality assessment.</strong>
      </h2>
      <div class="benefits__row">
        <div class="benefit" v-for="ben in benefits">
          <img :src="ben.img">
          <p><b>{{ben.title}}</b></p>
        </div>

      </div>
      <button>
        <a title="Go and take our test" href="/psychometric-test/personality/1/assessment" class="cta cta--green">
          Get Your Personality Assessment Results <span class="arrow"></span>
          <b-icon icon="arrow-right"  style="font-size: 20px"></b-icon>
        </a>
      </button>
    </div>
    <div class="bill2">
      <div class="loading two">
        <img src="https://alison.com/html/site/img/psychometrics/companies.png" >
      </div>
      <div class="loading one">
        <h1> Companies value psychometric assessments <span>when hiring new employees.</span>  </h1>
        <p>Alison’s workplace personality assessment measures key traits that are of interest to employers. Your assessment report is easy to share.</p>
        <button>
          <a title="Go and take our test" href="/psychometric-test/personality/1/assessment" class="cta cta--green">
            Stand out from the crowd <span class="arrow"></span>
            <b-icon icon="arrow-right"  style="font-size: 20px"></b-icon>
          </a>
        </button>
      </div>
    </div>
    <div class="bill3">
      <div class="loading two">
        <img src="https://alison.com/html/site/img/psychometrics/experts.svg" >
      </div>
      <div class="loading one">
        <h2>
          A scientific approach, <br><strong>designed by experts.</strong>
        </h2>
        <p>Alison’s Workplace Personality Assessment is produced by experts with decades of industry expertise in creating psychometric tests that help individuals and organisations measure personality traits, cognitive abilities and behavioural styles.</p>
        <button>
          <a title="Go and take our test" href="/psychometric-test/personality/1/assessment" class="cta cta--green">
            Stand out from the crowd <span class="arrow"></span>
            <b-icon icon="arrow-right"  style="font-size: 20px"></b-icon>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PsychometricTest",
  data(){
    return {
      benefits:[
        {title:'Know Your Best Self', img:'https://alison.com/html/site/img/psychometrics/self.svg'},
        {title:'Find your purpose', img:'https://alison.com/html/site/img/psychometrics/purpose.svg'},
        {title:'Achieve your goals', img:'https://alison.com/html/site/img/psychometrics/goals.svg'},
        {title:' Increase your confidence', img:'https://alison.com/html/site/img/psychometrics/confidence.svg'},
        {title:'  Progress in your career', img:'https://alison.com/html/site/img/psychometrics/career.svg'},
      ],
      discover:[
        {img:'https://alison.com/html/site/img/psychometrics/discover-strengths.svg'},
        { img: 'https://alison.com/html/site/img/psychometrics/recommendations.svg'},
        { img: 'https://alison.com/html/site/img/psychometrics/explore.svg'},
      ]
    }
  },
}
</script>

<style scoped>
.bill3{
  padding: 120px 0;
  background: #873694;
  color: white;
  display: flex;
  justify-content: space-evenly;
}
.bill3 h2 {
  font-size: 52px;
  margin-bottom: 20px;
}
.bill3 p{
  font-size: 20px;
  max-width: 470px;
  margin-bottom: 55px;
}
.bill3 button{
  width: 65%;
  text-align: center;
  background-color: #83c124;
  border: none;
  border-radius: 25px;
  padding: 15px 45px;
  margin-top: 25px;
  display: flex;
  align-items: center;
}
.bill3 button a{
  text-decoration: none;
  color: white;
}
.img1{
  position: absolute;
  left: 0;
  top: 100px;
}
.img2{
  position: absolute;
  right: 0;
  bottom: 20px;
}
.benefits__row {
  display: flex;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 80px auto 100px;
}
.benefits h2{
  font-size: 52px;
  margin-bottom: 20px;
  color: #465159;
}
.benefits{
  padding: 100px 0 ;
  position: relative;
  background: #fafafa;;

}
.benefits button{
  background-color: #83c124;
  border: none;
  border-radius: 25px;
  padding: 15px 45px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.benefits button a{
  text-decoration: none;
  color: white;
}
.benefit{
  width: 15%;
}
.benefits h2 strong {
  font-weight: 800;
}
.bill .two{
  padding: 50px 100px;
}

.bill2 .two{
  padding: 100px;
}
.bill2 .one{
  padding-top:  90px;
}
.row{
  bottom: -150px;
  z-index: 1;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
}
.p_card p span
{
  color: #75bb39;
}
.p-cards .p_card{
  border-radius: 15px;
  width: 23%;
  padding: 40px 20px 20px;
  background: #fff;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 10px 20px 0 rgb(136 129 129 / 10%);
}
.billboard {
  padding-top: 50px;

}
.bill-load{
  position: relative;
  padding: 10px 150px 150px;
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(180deg,#fff 0,#f0f0f0 100%);
}
.bill{
  position: relative;
  padding: 150px 50px 100px 50px;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}
.bill2{
  position: relative;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}
.bill2 h1 span {
  font-weight: 300;
}
.loading{
  width: 47%;
  text-align: left;
}
.loading a{
  outline: none;
  text-decoration: none;
  transition: all .25s ease-in;
  color: white;
}
.loading button{
  background-color: #83c124;
  border: none;
  border-radius: 25px;
  padding: 15px 45px;
  margin-top: 25px;
  display: flex;
  align-items: center;
}
.loading h1 {
  font-weight: 700;
  font-size: 52px;
  color: #465159;
  margin-bottom: 20px;
}
.bill .one{
  padding: 50px;
}
</style>
