<template>
  <div>
    <div class="begin">
      <h1><b>Not Sure Where To Begin?</b></h1>
      <h5>What is your main goal on Alison?</h5>
      <div class="people">
        <div class="upskill one">
          <h5>I want to</h5>
          <p><b>upskill
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
          </b></p>
        </div>
        <div class="upskill two">
          <h5>I want to</h5>
          <p><b>change careers
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
          </b></p>
        </div>
        <div class="upskill three">
          <h5>I want to</h5>
          <p><b>explore hobbies & interests
            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
          </b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeginTo",
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>
<style scoped>
.people {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.one {
  background-image: url("../../assets/flug.svg");
}
.two {
  background-image: url("../../assets/flugs.svg");
}
.three {
  background-image: url("../../assets/puzzle.svg");
}
.upskill {
  background-size: 63px auto;
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 300px;
  border-radius: 15px;
  background-color: white;
  margin: 25px;
  padding: 15px 25px;
  text-align: left;
  border: 2px solid white;
  box-shadow: 0 6px 20px rgb(51 51 51 / 30%);
  transition: all .3s ease-in-out;
}
.upskill:hover {
  border: 2px solid #22e822;
}
.upskill:hover p{
  color: #69d269;
}
.begin {
  padding: 33px 0 40px;
  background-size: 111px auto;
  background-position: left 20px;
  background-image: url("../../assets/men.svg");
  background-repeat: no-repeat;
}
</style>

