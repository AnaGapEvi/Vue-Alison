<template>
  <div class="tab-nav" >
    <ul >
      <li class="tab-nav__cta " v-for="member in members" :key="member.id">
        <button :class="{ active: (member.id === activeId) }" v-on:click="selectMember(member.id)" style="display: flex; align-items: center; gap: 10px;color: #5d676e">
          <i :class="member.icon"></i>
          <router-link  :to="member.route" class="url" style="color: #5d676e">
           {{member.status}}
          </router-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabNav",
  data(){
    return {
      activeId: 0,
      members: [
        {id: 1, status: 'Learn Get Certificates', route: '/', icon:'fa fa-books'},
        {id: 2, status: 'Build Your Career ', route: '/build-your-career', icon:'fas fas-solid fa-briefcase'},
        {id: 3, status: 'Earn On Alison', route: '/earn-money', icon:'fa fa-usd'},
      ]
    }
  },
  mounted() {
      if(this.$route.path === '/'){
        this.activeId = 1;
      }
  },
  methods: {
    selectMember: function (id) {
      this.activeId = id;
    }
  }
}
</script>

<style scoped>

.tab-nav {
  top: 33px;
  left: 50%;
  position: fixed;
  margin-top: 35px;
  transform: translate(-50%,0);
  background: #fff;
  z-index: 2;
  width: 100%;
}

.tab-nav ul {
  justify-content: space-between;
  background: #f3f6f7;
  padding: 6px;
  width: 706px;
  margin: 24px auto;
}
button{
  border: none;
  background: none;
  /*box-shadow: 0px 10px 10px 0px black;*/

}
.tab-nav li a, .tab-nav ul {
  display: flex;
  border-radius: 25px;
  text-decoration: none;
  color: black;
}
ol, ul {
  list-style: none;
}

.tab-nav li{
  padding: 0 10px;
}
.tab-nav li a {
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 42px;
  transition: all .3s ease-in-out;
}
button.active {
  padding: 3px 50px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 25px;
  background: #83c11f;
  color: white !important;
}
button.active a{
  color: white !important;
}
</style>
