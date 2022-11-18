<template>
  <div class="hubs">
    <h1>Explore Alison's</h1>
    <p class="hub-description">Hubs are our version of a one-stop shop: a place where you can easily find all the related courses about a specific subject or topic. We have curated our best free online courses on everything from...
      <button>Read More</button>
    </p>
    <div style="display:flex; align-items: center; justify-content:space-evenly; width: 75%; margin: 0 auto">
      <div class="search-block">
        <input type="search" style="padding: 6px; border-radius: 5px 0 0 5px;border: 1px solid #5d676e;" v-model="search" @keyup="searchItem">
        <p style="background-color: #5d676e; width: 40px; padding: 7px;margin: 0!important; border-radius: 0 5px 5px 0">
          <b-icon icon="search" variant="light"></b-icon>
        </p>
      </div>
      <div class="search-block">
        <p class="sort">Sort by</p>
        <select v-model="selected" @click="sortHubs(selected)">
          <option selected value="acs">Alphabetically (A-Z)</option>
          <option value="desc" >Alphabetically (Z-A)</option>
          <option value="rand">Most Popular</option>
        </select>
      </div>
      <div style="width: 20%; padding: 15px">
        <b-icon icon="grid-fill" style="font-size: 30px; color: #5d676e" @click="gridFull=true"></b-icon>
        <b-icon icon="list-ul" style=" font-size: 30px;color: #5d676e" @click="gridFull=false"></b-icon>
      </div>
    </div>
    <div>
      <div class="box-section" v-if="gridFull">
        <div class="hub" v-for="(hub,index) in hubs" :key="index">
          <div>
            <img :src="hub.image" width="200px">
          </div>
          <h2>{{hub.title}}</h2>
          <p> {{hub.course_count}} COURSES  {{hub.article_count}} ARTICLES</p>
          <router-link to="" tag="div" class="hover-hub">
            <h2>{{hub.title}}</h2>
            <p>{{hub.description.slice(0,300)}}...Read More</p>
          </router-link>
        </div>
      </div>
      <div v-else class="box-section-list">
        <div class="hub-list" v-for="(hub,index) in hubs" :key="index">
          <div>
            <img :src="hub.image" width="95px">
          </div>
          <div>
            <h5>{{hub.title}}</h5>
            <p>{{hub.description.slice(0,120)}}...</p>
          </div>
          <p> {{hub.course_count}} COURSES :  {{hub.article_count}} ARTICLES</p>
          <b-icon icon="chevron-right"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hubs",
  data(){
    return{
      search:'',
      hub:true,
      hubs:[],
      sortList:[],
      desc:false,
      selected:'',
      searchHubs:[],
      gridFull:true
    }
  },
  mounted(){
    this.getHubs()
  },

  methods:{
    searchItem(){
      if(this.search === '')
      {
        this.hubs = this.searchHubs;
        return;
      }
      let searchedCareers = [];
      for(let i = 0; i < this.searchHubs.length; i++)
      {
        let careerName = this.searchHubs[i]['title'].toLowerCase();
        if(careerName.indexOf(this.search.toLowerCase()) >= 0)
        {
          searchedCareers.push(this.searchHubs[i]);
        }
      }
      this.hubs = searchedCareers;
    },
    getHubs(){
      this.axios
        .get('/hubs')
        .then( response =>{
          this.hubs=response.data
          this.searchHubs = this.hubs
        })
    },
    sortHubs(sort){
      if(sort==='desc'){
        this.sortListDesc = this.hubs.sort((a, b) =>
          b.title.localeCompare(a.title));
        this.hubs = this.sortListDesc
      } else if(sort==='acs'){
        this.sortListAsc = this.hubs.sort((a, b) =>
          a.title.localeCompare(b.title));
        this.hubs = this.sortListAsc
      } else {
        for (let i = this.hubs.length -1; i > 0; i--) {
          let j = Math.floor(Math.random() * i)
          let k  = this.hubs[i]
          this.hubs[i] = this.hubs[j]
          this.hubs[j] = k
        }
      }
    }

}
}
</script>

<style scoped>
.hub-list{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(243,246,247,.502) 0 0 no-repeat padding-box;
  border: 1px solid #dadfe1;
  border-radius: 12px;
  height: 86px;
  margin: 13px auto;
  transition: all .25s ease-in-out;
  text-align: left;
  padding: 5px 10px;

}
.hub-list h5{
  color: #2d3941;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  text-align: left;
}
.hub-list p{
  color: #5d676e;
  font-size: 12px;
  letter-spacing: 0;
  position: static;
}
.hub h2{
  color: #2d3941;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin-top: 15px;
}
.hub p{
  color: #5d676e;
  display: inline-block;
  font-size: 12px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 16px;
  opacity: 1;
  text-transform: uppercase;
  text-align: left!important;
  margin: 0!important;
  width: 100%;
}
.hub img{
  border-radius: 7px;
  height: 162px;
  opacity: 1;
  transition: opacity .5s ease-in-out;
  width: 100%;
}
.hub{
  height: 248px;
  background: rgba(243,246,247,.502) 0 0 no-repeat padding-box;
  border: 1px solid #dadfe1;
  border-radius: 12px;
  opacity: 1;
  padding: 11px;
  position: relative;
  width: 28%;
  margin: 15px;
  transition: all .25s ease-in-out;
}
.hover-hub:hover{
  opacity: 1;
}
.hover-hub{
  background: rgba(243, 246, 247) 0 0 no-repeat padding-box;
  position: absolute;
  width: 100%;
  height: 85%;
  top:0;
  left: 0;
  opacity: 0;
  border-radius: 12px 12px 0 0;
  transition: all .3s ease-in-out;
  padding: 10px;
  overflow: hidden;

}
.hub .hover-hub p{
  font-size: 14px;
  text-transform: lowercase;
  font-weight: 500;
  font-family: Verdana, sans-serif;
  height: 150px;
}
.box-section{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
.sort{
  margin: 0 5px!important;
}
.search-block{
  display: flex;
  width: 30%;
  align-items: center
}
.search-block select{
  padding: 7px 20px;
  border: 1px solid #5d676e;
  border-radius: 5px;
}
.hubs{
  padding: 30px;
}
h1{
  font-weight: 900;
  font-size: 40px;
}
h1:after{
  content:' 50+ Hubs';
  color: #006c94;
  font-weight: 900;
  font-size: 40px;
}
.hub-description {
  width: 90%;
  margin: 20px auto;
}
.hub-description button {
  border: none;
  background: none;
}
</style>
