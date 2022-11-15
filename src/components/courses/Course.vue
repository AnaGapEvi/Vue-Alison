<template>
  <div class="course">
    <img :src="course.image"/>
    <template>
      <div style="display:flex; margin-bottom: 10px" >
        <p style="font-size: 12px; background: black; width: 30%; margin: 2px; color: white; border-radius: 2px" >{{course.type}}</p>
        <p class="cat-course"  v-if="course.category" :style="{ background: course.category.color}">{{course.category.name}}</p>
      </div>
    </template>
    <p style="font-size: 15px; padding: 2px"><b>{{course.name}}</b></p>
    <button class="btn-course">Start Now</button>
    <div class="start-now">
      <p><i>{{course.publish}}</i></p>
      <p class="description">{{course.description}}</p>
      <router-link to="" class="route"><span class="more">More Information</span> <span class="question">?</span> </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Course",
  props:['course'],
}
</script>
<style scoped>
.course{
  position: relative;
  text-align: center;
  margin: 5px auto;
  width: 100%;
  height: 350px;
  box-shadow: 0 1px 7px 0 rgb(50 50 50 / 20%);
  cursor: pointer;
  overflow: hidden;
  background-color: #f2f2f2;
}
.description {
  font-size: 12px;
}
.cat-course{
  font-size: 12px;
  border-radius: 2px;
  width: auto;
  padding: 0 5px;
  margin: 2px;
  color: white;
}
.course img{
  margin: 0;
  padding: 0;
  width: 100%;
}
.start-now{
  position: absolute;
  height: 81.7%;
  top:0;
  background-color: #f2f2f2;
  padding: 20px;
  display: none;
  transition: background .3s ease;
}
.course:hover .start-now{
  display: block;
  transition: background .3s ease;
}
.btn-course{
  background: #0091c7;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  width: 145px;
  padding: 10px 20px;
  transition: background .3s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  border: 1px solid #0091c7;
}
.btn-course:hover{
  background: #aaa;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  max-width: 145px;
  padding: 10px 20px;
  transition: background .3s ease;
}
.route{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 15px;
}
.more{
  color: #0094c9;
  cursor: pointer;
  display: block;
}
.question
{
  width: 20px;
  height: 20px;
  background-color: #0094c9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
