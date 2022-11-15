<template>
  <div >
    <div class="main">
      <div >
        <h2>{{empower.title}}</h2>
        <icons-link class="link"></icons-link>
      </div>
      <p class="p">{{question.description}}</p>
    </div>
    <h3>{{question}}</h3>
    <div class="list-item">
      <div v-for="(empower, index) in empowers" :key="index" class="item">
        <img :src="empower.image">
        <h5>{{empower.title}}</h5>
        <p>{{empower.text}}</p>
        <button class="btn">{{empower.btn}}</button>
      </div>
    </div>
    <div class="empower-footer">
        <h4>Want to send us a comment or suggestion?</h4>
      <p><b>Are there other ways you could help us that are not listed above? Click the image below and tell us about it.</b></p>
      <img src="https://cdn01.alison-static.net/public/html/site/img/empower-icons/suguestions.png">
      <p>pr@alison.com</p>
      <icons-link></icons-link>
    </div>
  </div>
</template>

<script>
import IconsLink from "../custom/iconsLink.vue";

export default {
  name: "Empower",
  components: {IconsLink},
  data(){
    return{
      empower:{
        title:'Empower Us',
        description:'We partner with the best publishers across the world on a variety of interests and subject matters. If you\'re interested in becoming a publisher please click here'
      },
      question:'So, how can you help? Here’s how:',
      empowers:[]
    }
  },
  mounted(){
    this.getProgrammes()
  },
  methods:{
    getProgrammes(){
      this.axios.get('/empower').then(resp =>{
        if(resp){
          this.empowers=resp.data
        }
      }).catch(err =>{
        return err
      })
    }
  }
}
</script>

<style scoped>
.empower-footer img{
  margin: 20px;
}
.empower-footer p{
  font-weight: 700 !important;
  margin: 25px;
}
.empower-footer{
  text-align: center;
  background: #f3f6f7;
  margin: 50px 0 0;
  padding: 40px 0;
}

.main h2{
  text-align: center;
  margin: 25px;
  display: inline-block;
  width: 30%;
}
.link{
  width: 30%;
}
.p{
  font: 400 0.875em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #2d3942;
  text-align: left;
}
.main{
  width: 100%;
  background: white;
  text-align: center;
}
.main div{
  display: flex;
  margin: 0 auto;
}
.list-item{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item p{
  font: 400 0.875em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;

  /*margin: 0 0 20px;*/
}
.item button:hover{
  background: #006c94;
  border: 1px solid #006c94;
  color: white;
}
.btn{
  position: absolute;
  bottom: 15px;
  left: 25%;
  background: #0094c9;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  width: 50%;
  padding: 4px 15px;
}
.item{
  margin: 10px;
  width: calc(25% - 25px);
  position: relative;
  border: 1px solid gainsboro;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  display: inline-block;
  /*margin: 10px 15px 25px;*/
  padding: 30px;
  text-align: center;
  vertical-align: middle;
}
</style>
