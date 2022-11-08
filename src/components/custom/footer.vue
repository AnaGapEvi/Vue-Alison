<template>
  <div class="foot">
    <div class="footer">
      <div>
        <p>ABOUT ALISON</p> <hr>
        <router-link to="#" v-for="(about,index) in aboutAlison" :key="index">{{about}}</router-link>
      </div>
      <div>
        <p>LEARNING</p><hr>
        <router-link to="#" v-for="(about, index) in learning" :key="index">{{about}}</router-link>
      </div>
      <div>
        <p>CATEGORIES</p> <hr>
        <router-link  v-for="category in categories" :to="category.route" :key="category.id">{{category.name}}</router-link>
      </div>
      <div>
        <p>MORE</p> <hr>
        <router-link to="#" v-for="(m, index) in more" :key="index">{{m}}</router-link>
      </div>
      <div>
        <p> <b></b>CONNECT <b></b></p> <hr>
        <router-link to="#" v-for="(about, index) in connect" :key="index"><b-icon :icon="about.icon"></b-icon> {{about.name}}</router-link>
      </div>
      <button class="up" @click="upbtn()">
        <b-icon icon="chevron-up" aria-hidden="true"></b-icon>
      </button>
    </div>
    <div class="footer-footer">
      <img src="https://cdn01.alison-static.net/public/html/vendor/img/logo.svg" width="15%">
      <div>
        <p>© Alison 2022</p><hr>
        <p>Privacy</p><hr>
        <p> Terms </p><hr>
        <p>Cookie Policy </p>
        <p>Sitemap</p><hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data(){
    return{
      aboutAlison:[
        'Our Story',
        'Open Positions',
        'Alison Programmes',
        'Empower Us',
        'Our Publishers',
        'Blog',
        'Hubs',
        'Index'],
      learning:[
        'Get the App',
        'COVID19 Emergency course',
        'About Alison Courses',
        'Alison Testimonials',
        'East Africa Graduate Outcomes',
        'Accreditation',
        'Premium Learning',
        'Refer a Friend',
        'Pricing'
      ],
      more: [
        'Become a Self Publisher',
        'Become a Course Creator',
        'Training Webinars',
        'Alison for Business',
        'Graduate Outcomes',
        'Free Personality Test',
        'Free Wellbeing Check-up',
        'Media Centre',
        'Affiliate Programme',
      ],
      connect:[
        {name:'FAQ', icon: 'chat-quote'},
        {name:'Facebook', icon: 'facebook'},
        {name:'Twitter', icon: 'twitter'},
        {name:'LinkedIn', icon: 'linkedin'},
        {name:'Instagram', icon: 'instagram'},
        {name:'TikTok', icon: ''},
        {name:'YouTube', icon: 'youtube'},
        {name:'Customer Support', icon: 'envelope'},
      ],
      categories: [],
      urls:['/IT/1',
        '/Health/2',
        '/Language/3',
        '/Business/4',
        '/Managements/5',
        '/Personal%20%20Development/6',
        '/Sales%20&%20Marketing/7',
        '/Engineering%20&%20Construction/8',
        '/Teaching%20&%20Academics/9',]
    }
  },
  mounted() {
    this.getCategories ()
  },
  methods:{
    upbtn(){
      window.scrollTo(0,0);
    },
    getCategories() {
        this.axios.get('/get-categories')
          .then((response) => {
            this.categories = response.data
            this.categories.map((object, index) => {
              object.route =  this.urls[index];

            });
          })
      }
  }
}
</script>

<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
.up:hover{
transform: scale(1);
animation: pulse 1s infinite;
}
.up{
  border: 1px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
  position: absolute;
  right: 15px;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center
}
.foot{
  background: #2e3942;
  text-align: center;
}
.footer{
  background-image: url('https://cdn01.alison-static.net/public/html/site/img/footer-triangles.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 50px;
  position: relative;
}
.footer div{
  display: flex;
  flex-direction: column;
  text-align: left;
  /*width: 20% ;*/
  padding: 25px;
}
.footer div a{
  color: white;
  text-decoration: none;
  font-size: 14px;
}
.footer div a:hover{
  color: rgba(255, 255, 255, 0.66);
}
.footer div hr{
  color: #0093c7;
  width: 80%;
}
.footer div p{
  color: white;
}
.footer-footer{
  background: #1c232e;
  text-align: left;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding:  50px;
}
.footer-footer div{
  display: flex;
  margin: 10px;
  color: white;
}
.footer-footer p{
  margin: 10px;
  color: gray;
}
.footer-footer p:hover{
  margin: 10px;
  color: white;
}
.footer-footer div hr {
  color: white;
}
</style>
