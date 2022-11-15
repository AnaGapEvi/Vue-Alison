<template>
  <div class="coronavirus">
    <div class="aside-covid">
      <h5><b>Thank You To Our Language Translation Volunteers</b></h5>
      <img src="https://alison.com/html/site/img/coronavirus/thank-you.png" width="50%"/>
      <p class="aside-text">Alison would like to thank all the volunteers for their time and effort in helping us reach as many people as possible worldwide. Their patience and willingness to continue translating new information as it became available was can not be underestimated.
        Please click on our 'Hall of Fame' link to learn more about our volunteers.
        <button class="btn-aside">View Hall Of Fame</button>
      </p>
    </div>
    <div class="main-covid">
      <h5 style="text-align: left"><b>{{covid.title}}</b></h5> <br>
      <p>{{covid.description}}</p>
      <div class="img-block">
        <img :src="imgBlock.img">
        <div class="text">
          <h5><b>{{imgBlock.title}}</b></h5>
          <p >{{imgBlock.text}}</p>
        </div>
      </div>
        <div class="img-block">
          <div class="text">
            <h5><b>There are also several other courses on virology which might pique your interest. Here is a list of some of them:</b></h5>
            <div style="display: flex; justify-content: space-between">
              <div v-for="(item, index) in list" :key="index" style="display:flex;">
                <img :src="item.img"  style="height: 51px; margin-right: 12px;width: 77px;">
                <a :href="item.link" style="font-size: 14px">{{item.title}}</a>
              </div>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Coronavirus",
  data(){
    return{
      covid:{ title:'Living with Covid', description: 'At the very start of the Covid-19 pandemic, the world was panic-stricken and unsure of the future. Alison\'s learning platform created the course, \'Coronavirus: What you need to know\', to help mitigate the hysteria and help individuals understand this disease. The course was a unique initiative based on the World Health Organisations guidelines, providing a PDF certificate for completing the course, which was available free of charge\n' +
          'Alison reached out to our vast database, asking for volunteers to translate the original English course into their languages. The response was overwhelming and the course was translated into 70 + languages. The European Economic and Social Committee (EESC) awarded Alison the Civil Solidarity Prize for helping to educate as many people as possible about the virus, its spread and its effects.\n' +
          'Although the coronavirus is far from over, these translated courses are no longer relevant as individuals, medical facilities and governments worldwide have the necessary localised information and processes now in place.'
      },
      imgBlock:{
        title:'Coronavirus: What You Need to Know',
        text:'If you would still like to study the course and are interested in its content, you will be able to complete the English course which is updated regularly as new information and strains of the coronavirus become significant.',
        img:'https://alison.com/html/site/img/coronavirus/coronavirus-course.png'
      },
      list:[
        {img:'https://alison.com/html/site/img/coronavirus/alison_courseware_intro_4768.jpg', title:'Monkeypox - What You Need to Know', link:'https://alison.com/course/monkeypox-what-you-need-to-know'},
        {img:'https://alison.com/html/site/img/coronavirus/alison_courseware_intro_1368.jpg', title:'HIV/AIDS - Awareness & Prevention', link:'https://alison.com/course/hiv-aids-awareness-and-prevention-revised-2018'},
        {img:'https://alison.com/html/site/img/coronavirus/alison_courseware_intro_1424.jpg', title:'Understanding the Ebola Virus: History, Treatment and Prevention', link:'https://alison.com/course/understanding-the-ebola-virus-history-treatment-and-prevention-revised'},
        {img:'https://alison.com/html/site/img/coronavirus/alison_courseware_intro_2685.jpg', title:'Basics of Virology', link:'https://alison.com/course/basics-of-virology'}
      ]
    }
  }
}
</script>

<style scoped>
.text{
  padding: 15px;
  text-align: left;
}
.coronavirus{
  display: flex;
  padding: 50px;
}
.btn-aside{
  display: block;
  margin: 15px auto 5px;
  background: #83c124;
  border-radius: 23px;
  color: #fff;
  height: 46px;
  max-width: 100%;
  min-width: 202px;
  padding: 14px;
  width: 202px;
  border: none;
  font-size: 15px;
}
.main-covid{
  width: 73%;
}
.main-covid p{
  font-size: 14px !important;
  text-align: left;
}
.img-block{
  background: #f3f6f7;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  padding: 21px 17px;
}
.img-block img{
  width: 200px;
}
.img-block p{
  font-size: 14px !important;
}
.aside-covid .aside-text{
  background: #f3f6f7;
  border-radius: 6px;
  padding: 20px 17px;
  color: #4d5860;
  font-size: 14px !important;
  line-height: 21px;
  margin-bottom: 5px;
  text-align: left;

}
.aside-covid{
  box-shadow: 0 2px 6px rgb(0 0 0 / 16%);
  /*height: 659px;*/
  max-width: 100%;
  min-width: 295px;
  padding: 20px 20px 18px;
  width: 295px;
  margin: 0 25px 25px 50px;

}
</style>
