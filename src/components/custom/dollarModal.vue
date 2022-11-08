<template>
  <div class="con" @click.self="dollar">
    <div class="content">
      <div class="dollar">
        <div class="box">
          <p>Become an Alison Affiliate in one click, and start earning money by sharing any page on the Alison website.</p>
          <router-link to="https://alison.com/affiliates/learn-to-earn" ><button class="dollar-btn">Become an Affiliate</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dollarModal",
  props:['dollar']
}
</script>

<style scoped>
.box{
  width: 50%;
  float: right;
}
.con{
  margin: -10px !important;
  padding: 0 !important;
  width: 100%;
  top: 75px;
  background: rgba(0,0,0,.6);
  min-height: 100vh;
  position: absolute;
}
.content{
  background: white;
  /*position: relative;*/
  width: 464px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 29%);
  display: flex;
  margin-bottom: 10px;
  position: absolute;
  right: 1%;
  top: 5px;

}
.dollar{
  width: 100%;
  height: 150px;
  background-image: url("https://alison.com/html/site/img/affiliates/not-affiliate.svg");
  background-size: 50%;
  background-position:left;
  background-repeat: no-repeat;
  border-radius: 25px;
}
.dollar-btn{
  background: #f99d27;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  width: 178px;
  border: none;
}
.dollar p{
  font-size: 14px;
  color: #2c3e50;
  text-align: left;
  margin: 5px;
}
</style>
