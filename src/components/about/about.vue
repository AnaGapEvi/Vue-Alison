<template>

</template>

<script>
import axios from "axios";

export default {
  name: "about",
  data(){
      return{

      }
    },
  mounted(){
    this.getAbout()
  },

  methods:{
    getAbout(){
      axios.get('/aur-us').then(resp =>{
        return resp.data
      })

    }
  }
}
</script>

<style scoped>

</style>
