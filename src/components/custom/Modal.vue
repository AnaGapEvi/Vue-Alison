<template>
  <div class="modal" @click="open">
    <div class="modal-body">
      <div style="width:90%;  margin: 10px auto">
       <div class="d-block text-center" style="width: 100%">
        <div style=" width: 100%">
          <h3 style="text-align: left">Course Types</h3>
          <div style="display:flex; width: 100%; justify-content: space-around">
            <div class="course" v-for="type in types">
              <router-link :to="{path: `/${type}`}" style="text-decoration: none; font-size: 11px; color: #5d676e;">
              <div>
                <p>{{type}}</p>
              </div>
                View all {{type}} <b-icon icon="arrow-right" style="font-size: 13px"></b-icon>
              </router-link>

              <img src="https://alison.com/html/site/img/header/diploma-courses.svg">
            </div>

          </div>
          <h3 style="text-align: left; margin-top: 15px">Course Categories</h3>
          <div class="drop">
            <div  class="box" v-for="category in categories" :key="category.id" >
              <div>
                <img :src="category.image">
              </div>
              <router-link :to="category.route" style="color: #2c3e50; text-decoration: none">
                <h5 style="line-height:80%;">{{ category.name }} </h5>
                <span>886 Courses <b-icon icon="arrow-right"></b-icon></span>
              </router-link >
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'Modal',
  props:['open'],
  data(){
    return{
      categories: [],
      name:'',
      required: true,
      types:[]
    }
  },
  created() {
    this.getCategories()
  },
  methods:{
    getCategories() {
      this.axios.get('/get-categories')
        .then((response) => {
          response.data.forEach((item) => {
            item.route = `/${item.name}/${item.id}`
          })
          this.categories = response.data
          this.getType()
        })
    },
    getType(){
      let types =this.categories[0].type
      this.types.push(types)
      const found = this.categories.find(element => element.type !== types);
      this.types.push(found.type)
      return this.types
    }
  }

};
</script>


<style lang="css" scoped>
.modal-body{
  top: 10px;
  position: absolute;
  left: 25%;
  max-width: 50%;
  background: white;
  height:auto;
  border-radius: 15px;
  padding: 15px;
}
.modal{
  top: 65px;
  height: 100vh;
  width: 100vw;
  display: flex;
  background: rgba(80, 75, 75, 0.7);
  padding: 0;
  right: 25%;
}
.box {
  margin: 10px;
  text-decoration: none;
  color: #2c3e50;
  padding: 25px 9px 5px 7px;
  width: 28%;
  font-size: 10px;
  display: flex;
  line-height: 80%;
  border-radius: 10px;
  box-shadow: 0 0 6px rgb(0 0 0 / 29%);
}
.box div p {
  line-height: 80%;
}
.box:hover {
  /*border: 1px solid #69d269;*/
  transition: 500ms ease-in-out;
  box-shadow: 0 0 6px rgba(44, 215, 32, 0.85);
  text-decoration: none;
  cursor: pointer;
}
h5 {
  color: #5d676e;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
  width: 100%;
}
span {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
.course:hover {
  box-shadow: 0 0 6px rgba(44, 215, 32, 0.85);
  transition: 500ms ease-in-out;
  color: #75bb39;
  cursor: pointer;
}
p {
  line-break: auto;
}
.course {
  width: 47%;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 6px rgb(0 0 0 / 29%);
  padding: 30px 0 0 10px;
}
.course p {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
}
.drop {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
