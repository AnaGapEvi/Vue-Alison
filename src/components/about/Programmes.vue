<template>
  <div class="programmes">
    <div class="main">
     <div style="display: flex">
       <h2>{{program.title}}</h2>
       <icons-link></icons-link>
     </div>

      <p>{{program.description}}</p>
    </div>
    <div class="item-list">
      <div v-for="(item, index) in programItem" :key="index" class="item">
        <img :src="item.image">
        <h5>{{item.title}}</h5>
        <p>{{item.text}}</p>
        <button>More info</button>
      </div>
    </div>
  </div>
</template>

<script>
import IconsLink from "../custom/iconsLink.vue";

export default {
  name: "Programmes",
  components: {IconsLink},
  data(){
    return{
      program:{
        title:'Alison\'s Programmes',
        description:'We conduct a number of initiatives to help individuals and communities alike to empower themselves. Alison’s vision and guiding principle is to empower billions of people around the world through free high quality knowledge and workplace skills training. As part of that vision, we are committed to being a catalyst for social change, and we believe that the power of education can change peoples lives for the better. Over the years, we have introduced a number of programmes to make the social impact we so strongly believe in. Our programmes have offered unconventional, but highly effective options to traditional challenges.'
      },
      programItem:[]
    }
  },
  mounted(){
    this.getProgrammes()
  },
  methods:{
    getProgrammes(){
      this.axios.get('program').then(resp =>{
        if(resp){
          this.programItem=resp.data
        }
      }).catch(err =>{
        return err
      })
    }
  }

}
</script>

<style scoped>
.main h2{
  text-align: left;
  margin: 25px;
  display: inline-block;
  width: 50%;
}
.main p{
  font: 400 0.875em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin: 0 0 20px;
  color: #2d3942;
  padding: 20px ;
  text-align: left;
}
.main{
  background: white;
}
.programmes{
  background: #f3f5f6;
}
.item-list{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item p {
  font: 400 0.875em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin: 0 0 20px;
}
.item button:hover{
  background: #006c94;
  border: 1px solid #006c94;
}
.item button{
  background: #0091c7;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #0091c7;
  cursor: pointer;
  display: inline-block;
  max-width: 145px;
  padding: 5px 20px;
  transition: background .3s ease;
}
.item{
  width: 350px;
  border: 1px solid gainsboro;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  display: inline-block;
  margin: 10px 15px 25px;
  padding: 30px;
  text-align: center;
  vertical-align: middle;
}
</style>
