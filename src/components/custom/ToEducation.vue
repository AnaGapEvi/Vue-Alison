<template>
  <div>
    <div class="education">
      <div class="education1">
        <p class="speech">“Education underpins all social progress. Our aim is to harness technology to make all education and skills training available to anyone, anywhere for free”</p>
        <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/mike.png" width="20%">
      </div>
      <div class="education2">
        <img src="https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg">
        <h5 style="font-weight: 400">Founded In <span style="color: #0093c7; font-weight: 300"> Ireland </span> <br> Developed Worldwide </h5>
        <p>Learn about Our <b> Story</b> </p>
      </div>
      <div class="education4"> </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ToEducation',
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.speech {
  color: #686868;
  font-style: italic;
  font-size: 20px;
  margin-bottom: 26px;
  max-width: 384px;
  display: inline-block;
  line-height: 28px;
  font-family: 'Roboto Mono', Monaco, courier, monospace;
}
.education{
  display: flex;
  position: relative;
  background-color: #f5fcec;
}
.education1{
  width: 50%;
  padding: 58px 150px;
  text-align: left;
}
.education1 p{
  font-size: 20px;
}
.education2{
  padding: 80px;
  text-align: left;
  width: 50%;
  background: url('https://cdn01.alison-static.net/public/html/site/img/homepage/ireland.png') top right/auto 100% no-repeat #E6F3FD;
}
.education4{
  background: url('../../assets/plan.svg') center bottom no-repeat ;;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
