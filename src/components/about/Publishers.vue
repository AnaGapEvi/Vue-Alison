<template>
    <div class="pub">
      <div>
        <h2 style="display:inline;">Publishers on Alison</h2>
        <icons-link></icons-link>
        <p>We partner with the best publishers across the world on a variety of interests and subject matters.
          If you're interested in becoming a publisher please <span style="color: #006c94">click here</span> </p>
      </div>
      <div class="col-md-4 text-left text-sm-center" style="margin: 0 auto">
        <b-input-group size="sm" class="mb-2" style="border-radius: 5px;overflow: hidden ">
          <b-form-input type="search" placeholder="Search terms" v-model="search" v-on:keyup="searchCareer"></b-form-input>
          <b-button is-text class="d-flex p-3 justify-content-center; align-items-center" style="background: #465159; border: none">
            <b-icon icon="search" style="color: white;border: none"></b-icon>
          </b-button>
        </b-input-group>
      </div>      <div style="display: flex; flex-wrap: wrap; width: 90%; margin: 50px auto; justify-content: space-between">
        <div v-for="publisher in publishers" class="box">
          <div class="img-box"><img :src="publisher.image" width="150px"></div>
          <p>{{publisher.text}}</p>
          <button>{{publisher.btn}} <b-icon icon="chevron-right"></b-icon></button>
        </div>
      </div>
    </div>
</template>

<script>
import IconsLink from "../custom/iconsLink.vue";

export default {
  name: "Publishers",
  components: {IconsLink},
  data(){
    return{
      publishers:[],
      search:'',
      originalPublishers:[]
    }
  },
  mounted(){
    this.getPublisher()
  },
  methods:{
    getPublisher(){
      this.axios.get('publisher').then(resp =>{
        if(resp){
          this.publishers=resp.data
          this.originalPublishers = this.publishers;

        }
      }).catch(err =>{
        return err
      })
    },
    searchCareer()
    {
      if(this.search == '')
      {
        this.publishers = this.originalPublishers;
        return;
      }
      let searchedPublishers = [];
      for(let i = 0; i < this.originalPublishers.length; i++)
      {
        let careerName = this.originalPublishers[i]['text'].toLowerCase();
        if(careerName.indexOf(this.search.toLowerCase()) >= 1)
        {
          searchedPublishers.push(this.originalCareers[i]);
        }
      }
      this.publishers = searchedPublishers;
    },
  }
}
</script>

<style scoped>
.pub{
  padding-top: 50px ;
}
.img-box{
  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
}
input{
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
}
.box{
  border: 1px solid #aaa;
  display: inline-block;
  float: none;
  height: 260px;
  margin: 0 15px 15px;
  position: relative;
  width: 280px;
}
.box button{
  position: absolute;
  width: 100%;
  margin: 0 !important;
  left: 0;
  bottom: 0;
  border: none;
  background: #2e3942;
  color: #fff;
  font-family: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding: 15px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
