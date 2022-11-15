<template>
  <div class="publish">
    <div class="block">
      <h2>Become an Alison Self-Publisher</h2>
      <p>If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a global audience and earn an income through our shared revenue offering. Join our community of self-publishers today!</p>
      <div class="publish-block">
        <div class="img-block">
          <img src="https://cdn01.alison-static.net/public/html/site/img/generic/self_publishing_01.jpg" width="60%">
        </div>
        <div>
          <button class="publish-btn">SIGN UP NOW</button>
          <icons-link class="links"></icons-link>
          <p>Know other experts? Tell them about Alison self-publishing!</p>
        </div>
      </div>
    </div>
    <div class="difference">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/self_publishing_02.jpg" width="350px">
      <h2>Why become an Alison Self-Publisher?</h2>
      <ul>
        <li v-for="difference in differences">{{difference}}</li>
      </ul>
    </div>
    <div class="successful">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/sp-extra-01.png" width="350px">
      <h2>How do I become a self-publisher on Alison?</h2>
      <p> It’s easier than you may think! If you have expertise in your field, excellent training material that you have developed and you know how to lead online learners through a fulfilling course, we want to hear from you. Complete the application form and let’s start the self-publishing journey together.</p>
      <h2>What makes a successful self-publisher?</h2>
      <ul>
        <li>Excellent English language writing skills.</li>
        <li>Expert knowledge in a sought-after field.</li>
        <li>The ability to accurately and quickly distill lots of information into a series of modules using text, images and videos.</li>
      </ul>
      <h2>Who does self-publishing suit best?
      </h2>
      <p>Anyone who meets our strict criteria for quality and expertise can be a self-publisher. Many members of our self-publishing education family are:</p>
      <ul>
        <li>Retired, part-time or even full-time lecturers, teachers or researchers.</li>
        <li>Senior professionals with a passion for training, mentoring or teaching.</li>
        <li>Experts who want to find another channel or platform to extend their business.</li>
      </ul>
    </div>
    <div class="difference">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/self_publishing_03.jpg" width="350px">
      <h2>Why become an Alison Self-Publisher?</h2>
      <ul>
        <li>
          The more in demand your topic, the more learners you will attract to your course.
        </li>
        <li>
          The higher learners rank your course, the more income you are likely to generate. Learners want courses that are high quality, relevant, interesting, useful, accurate and up-to-date.
        </li>
        <li>
          he more teaching collateral you include – such as well-produced videos, webinars, imagery, downloadable PDFs – the more engagement you will have.
        </li>
        <li>
          Our most profitable self-publishers use their other online accounts to promote their courses. This is something you could do too!
        </li>
      </ul>

    </div>
    <div class="successful">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/sp-extra-02.png" width="350px">
      <h2>What support do you we offer Self-Publishers?</h2>
      <p>We are committed to partnering with you every step of the way. We run regular webinars for self-publishers, where you can connect with an Alison Trainer and ask all your questions. Once you have submitted a test course, you will be assigned a publishing account manager who will guide you through the process of publishing your first course.</p>
      <p>Once your course is published, then the marketing magic will kick in. We will promote your course with paid advertising on social media and search. We have an extensive global community of over 19 million learners, and we will use email marketing to reach them.</p>
      <p>Your personalised digital dashboard will help you track how your course enrolments are progressing and give you insights on your learners’ location and their devices</p>
      <h2>What self-publishing courses are most in-demand by online learners?</h2>
      <ul>
        <li>Full-Stack Development, Mobile App Development, Cloud Computing</li>
        <li>UX Design, Game Design, Distributed Computing</li>
        <li>Data Science, Artificial Intelligence, Blockchain Technology</li>
        <li>Business analysis, Crop Produce Analysis, Infrastructure Development</li>
        <li>Video Production, Creative Writing, Email Marketing, Affiliate Marketing</li>
        <li>Sport Therapy, Personal Care</li>
      </ul>
      <h2>What does the Qualified Alison Publishing training programme offer?</h2>
      <p>Alison developed a training programme to create entrepreneurial opportunity for those who would like to build and publish online courses. Your journey to becoming a fully Qualified Alison Publisher happens in three stages.</p>
      <ul>
        <li>Level 1 is achieved once your application is submitted and you have successfully completed the required training courses.</li>
        <li>Level 2 is when your work meets strict quality standards and you create and publish your first course on the Alison website.</li>
        <li>Level 3 is when you publish four or more high-quality courses on the Alison website.</li>
      </ul>
      <div class="successful-footer">
        <button class="btn-apply"> Apply Now</button>
        <button class="btn-free"> Free Webinar</button>
        <div class="links">
          <icons-link></icons-link>
        </div>
      </div>
    </div>
    <div class="difference-question">
      <h2>Steps to start earning as a Self-Publisher</h2>
      <div v-for="(publisher, index) in publishers" :key="index" class="question-block" @click="show(index)">
        <div class="question-block-title">
          <h5>{{publisher.title}}</h5>
          <b-icon icon="chevron-down" v-if="index !==id" variant="success" class="font-18"></b-icon>
          <b-icon icon="chevron-up" v-else></b-icon>
        </div>
        <div class="question-block-answer" :class="{ 'active': (index === id)}">
          <p>{{publisher.description}}</p>
        </div>
      </div>
      <div class="difference-question-links">
        <button class="btn-apply"> Apply Now</button>
        <button class="btn-free"> Free Webinar</button> <br>
        <icons-link></icons-link>
      </div>
    </div>
    <div class="articles">
      <h3>Related Courses and Articles</h3>
      <div class="article-cicle">
        <div v-for="article in articles">
          <img :src="article.img" width="100%">
          <p>{{article.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconsLink from "../custom/iconsLink.vue";

export default {
  name: "SelfPublishing",
  components: {IconsLink},
  data(){
    return{
      id: Number,
      differences:['You can make a difference in the world by sharing your knowledge and expertise with a global audience who are keen to learn.',
        'Earn an income by monetizing your skills and experience through our shared revenue offering.',
        'Showcase your skills and build your personal brand as an expert in your field.',
        'Expand your reach across emerging markets. Over 85% of Alison learners live outside developed economies',
        'Use your knowledge and expertise to create and publish courses that will help you earn a passive income for your future.'
      ],
      publishers:[
        {title:'1. Sign up', description:'Sign up for an Alison account'},
        {title:'2. Complete the Application Form', description:'Tell us about yourself by completing the Self-Publishers application form. Once we have your details we will take you through each step of the publishing journey.'},
        {title:'3. Gain Access to the Publishing Tool', description:'Once you have submitted the publishing application form, you will receive an email with a link to access the Publishing Tool.'},
        {title:'4. Complete the Training Courses', description:'Before you start creating your course, you first need to complete two free training courses. The first training module is E-Learning Theory and Practice and outlines how to create an online course from a pedagogic point of view. You will learn how to structure your course and how to keep the learner engaged through content. The second training module is the Alison Publisher Tool Training Course, and it explains how to use the publishing tool. Each course will take you about 90 minutes to complete.'},
        {title:'5. Build Your Sample Course', description:'When you have completed the steps above, you will receive some content to create a sample course. This will give you a flavour of what publishing is all about. Download this simple step-by-step guide on how to use the publishing tool.'},
        {title:'6. Submit Your Sample Course', description:'You will not receive feedback for this sample course build, but you will be notified by email if your sample course passed our quality standard checklist to progress your application.'},
        {title:'7. Create Your Own Course', description:'If your sample course is approved, you may now begin to create your own course using the skills you have learnt from the self-publisher training process. You will be assigned a Publishing Account Manager (PAM) who will review your course and provide you with feedback to ensure that your course is ready for publishing. Once your course meets the Alison standard, it will be published.'},
        {title:'8. Course Advertising and Marketing', description:'Once your course is published, we will advertise your course to a global audience and to our learner database. There are many activities and tactics available to us to make sure your course gets the attention of as many learners as possible.'},
        {title:'9. Monitor Course Performance', description:'Once your course is published, you will be able to track its performance. We will give you access to a link through which you can review your course’s daily, weekly, monthly, quarterly or annual performance(s). Our standard format of reporting covers the following: number of visitors, active learners, enrols, completes and certificate purchases. We will also give you a record of your advertising and certification revenue which you are entitled to.'},
        {title:'10. Receive Payment', description:'With your initial publishing and marketing work done, you can sit back and earn 24/7 from interested learners who are accessing your course(s) online. It is important to note that it does take up to 24 months before you can earn a regular income. Of course, you can augment your earnings even more by constantly marketing your course to your personal network and by publishing new courses.'},
      ],
      articles:[
        {img:'https://cdn01.alison-static.net/courses/1541/alison_courseware_intro_1541.jpg', title:'First Training Module'},
        {img:'https://cdn01.alison-static.net/public/html/site/img/generic/SP-Image-6.png', title:'Publishing Tool Training Guide'},
        {img:'https://cdn01.alison-static.net/public/html/site/img/generic/course_creator_01.jpg', title:'Become A Course Creator'}
      ]
    }
  },
  methods:{
    show(id){
      if(this.id===id){
        this.id = ''
      } else {
        this.id=id
      }
    }
  }
}
</script>

<style scoped>
.articles{
  width: 93%;
  margin: 0 auto;
  padding: 50px 35px;
  background: white;
}
.articles .article-cicle{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.article-cicle div p{
  background: #f3f6f7;
  padding: 15px;
}
.article-cicle div{
  width: 25%;
}
.articles img{
  width: 100%;
  display: block;
}
.difference-question-links a{
  margin: 5px;
}
.difference-question-links button{
  margin: 25px;
}
.difference-question-links{
  background: #f3f6f7;
  padding: 15px;
  width: calc(100% + 30px);
  transform: translateX(-15px);
}
.question-block-answer.active {
  display: block;
  height: fit-content;
}
.question-block-title{
  border: 1px solid #f3f6f7;;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.question-block-answer{
  border: 1px solid #dcdcdc;
  padding: 10px 20px;
  display: none;
  height: 0;
  transition: all 1s ease;
}
.question-block{
  width: 90%;
  background: #f3f6f7 0 0 no-repeat padding-box;
  margin: 15px auto;
  text-align: left;
}
.difference-question{
  background: white;
  padding: 15px 15px 0 15px;
  margin: 25px 50px;
  box-shadow: 0 3px 6px #d0d0d8
}
.btn-apply{
  background: #0091c7;
  color: #fff;
  border: 1px solid #0091c7;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background .3s ease;
}
.btn-apply:hover{
  background: white;
  color: #0091c7;
  border: 1px solid #0091c7;
}
.btn-free{
  border: 1px solid #83c11f;
  color: #83c11f;
  background: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background .3s ease;
}
.links {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.btn-free:hover{
  border: 1px solid #83c11f;
  color: white;
  background: #83c11f;
}
.successful p{
  text-align: left;
}
.successful ul{
  text-align: left;
  list-style: none;
}
.successful ul li {
  line-height: 3em;
  list-style-image: url(https://cdn01.alison-static.net/public/html/site/img/generic/generic-thick.png);
  margin-left: 25px!important;
  text-align: left ;
}
.successful h2{
  text-align: left;
  color: #1c232e;
  font-size: 1.25em;
  font-weight: 500;
  margin-bottom: 10px
}
.successful{
  background: white;
  margin: 25px 50px;
  padding: 25px 25px 0 25px;
  box-shadow: 0 3px 6px #d0d0d8
}
.successful img{
  float: left;
  padding-bottom: 25px;
  padding-right: 50px;
  /*margin: 15px 25px 5px 25px;*/
}
.difference ul li {
  line-height: 3rem;
  list-style-image: url(https://cdn01.alison-static.net/public/html/site/img/generic/generic-thick.png);
  margin-left: 25px!important;
  text-align: left ;
}
.difference ul{
  list-style: none;
  text-align: left;
}
.difference h2{
  color: #1c232e;
  font-size: 22px;
  font-weight: 600;
  margin: 25px;
  text-align: left;
}
.difference img{
  float: right;
}
.difference{
  background: white;
  margin: 25px 50px;
  box-shadow: 0 3px 6px #d0d0d8
}
.block{
  background: white;
  width: calc(100% + 50px);
  margin: 0 !important;
  padding: 20px;
}
.publish{
  background: #f3f6f7;
  padding: 0 0  25px 0;
}
.successful-footer{
  background: #f3f6f7;
  width: calc(100% + 50px);
  transform: translateX(-25px);
  padding: 50px;
}
.publish-block{
  width: 100%;
  display: flex;
}
.publish-btn{
  display: block;
  border: 1px solid #83c11f;
  text-shadow: none;
  background-color: #83c11f;
  color: #fff;
  font-weight: 700;
  max-width: 190px;
  padding: 5px 10px;
  margin: 20px 0;
  border-radius: 5px;
}
.img-block{
  width: 50%;
}
.links p{
  margin-top: 70px;
}
.links{
  text-align: left;
  width: 100%;
}
</style>
