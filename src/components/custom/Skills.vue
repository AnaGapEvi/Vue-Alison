<template>
  <div class="inner">
    <div style="width: 70%; margin: 0 auto">
      <h2>Advance Your Career. Learn In-demand Skills.</h2>
      <p> Upskill in business analytics, health care, graphic design, management and more.</p>
      <div>
        <button  class="next-btn" @click="preBtn()"><b-icon icon="chevron-left" aria-hidden="true"></b-icon> </button>
        <button class="pre-btn" @click="nextBtn()"><b-icon icon="chevron-right" aria-hidden="true"></b-icon> </button>
      </div>
      <div class="inner-main" ref="dim" v-if="skills.length">
          <div class="hide" >
            <button class="next" v-for="(skill, index) in skills[0]" :key="index">
              <router-link :to="skill.route" style="text-decoration: none;color: #5d676e;">{{skill.name}}</router-link>
            </button>
          </div>
          <div class="hide" >
            <button class="next" v-for="(skill, index) in skills[1]" :key="index">
              <router-link :to="skill.route" style="text-decoration: none;color: #5d676e;">{{skill.name}}</router-link>
            </button>
          </div>
        </div>
    </div>
    <div style="padding-top: 30px">
      <router-link to="#" class="icon-skill" > View More Skills > </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills:null
    }
  },
  mounted() {
    this.getSkills()
  },
  methods: {
    nextBtn(){
      this.$refs.dim.scrollLeft += this.$refs.dim.offsetWidth
    },
    preBtn(){
      this.$refs.dim.scrollLeft -= this.$refs.dim.offsetWidth
    },
    getSkills() {
      this.axios.get('/get-skills')
        .then((response) => {
          const data = response.data.map((object) => {
            object.route =  `${object.name}/${object.id}`
            return object
          });
          let arr = data.slice(0,19)
          let arr1 = data.slice(20, 40)
          this.skills= [arr, arr1]
        })
    }
  }
}
</script>

<style scoped>

.inner p{
  font-size: 16px;
  line-height: 28px;
  color: #646464;
  margin-bottom: 37px;
}
.inner{
  position: relative;
  padding: 30px;
  background: url('https://cdn01.alison-static.net/public/html/site/img/homepage/rocket.svg') no-repeat 0 50px;
}

.inner-main::-webkit-scrollbar{
  display: none;
}
.inner-main{
  width: 760px;
  margin: 0 auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 10px;
}
.hide{
  /* margin: 10px; */
  width: 90%;
  /*margin: 10px auto;*/
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.hide button{
  border: 1px solid #b3bdc0;
  background: none;
  ;color: #5d676e;
  /* display: block; */
  font-size: 16px;
  font-weight: 500;
  border-radius: 26px;
  /* width: 400px; */
  /* transition: all .3s ease-in; */
  margin-right: 12px;
  /*min-width: 200px;*/
  padding: 12px 20px;
  white-space: nowrap;
}
.inner-main button:hover{
  background: #f4f9ff;
  border-color: #0091c7;
  color: #0091c7;
  transition: all 200ms ease-in;
}
.inner .next-btn{
  width: 45px;
  height: 45px;
  position: absolute;
  top: 173px;
  left: 240px;
  display: flex;
  color: #0093c7;
  border:  1px solid  #0093c7;
  border-radius: 50%;  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  background: white;
}
.inner .pre-btn{
  width: 45px;
  height: 45px;
  position: absolute;
  top: 173px;
  right: 240px;
  /*border: none;*/
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  background: white;
  color: #0093c7;
  border:  1px solid  #0093c7;
  border-radius: 50%;
}
.icon-skill
{
  color: #83c11f;
  display: block;
  font-weight: 700;
  margin: 0 auto;
  transition: all .3s ease-in;
  width: 146px;
  text-decoration: none;
}
</style>
