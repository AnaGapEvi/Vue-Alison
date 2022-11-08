<template>
  <div class="business-contact">
    <div class="contact-us block-1">
      <div class="banner-inner-wrapper">
        <h1>We Are Here To Help</h1>
        <div class="flms-contact__banner__image">
          <img src="https://cdn01.alison-static.net/public/html/site/img/free-lms/flms-contact-banner.svg" alt="We are here to help">
        </div>
        <div class="flms-contact__banner__text">
          <div class="flms-contact__banner__text--desktop">
            <p>Alison helps thousands of employees around the world upskill businesses with a variety of valuable content that managers can select &amp; assign to their audience, whilst also keeping track of their progress &amp; outcome.</p>
            <br>
            <p>If you have questions or need technical assistance, please contact us at <a href="mailto:freelms@alison.com">freelms@alison.com</a></p>
          </div>
          <div class="flms-contact__banner__text--mobile">
            <p>Alison helps thousands of employees around the world upskill businesses with a variety of valuable content that managers can select &amp; assign to their audience, whilst also keeping track... <strong class="flms-c-readmore">Read More</strong></p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-us block-2">
      <div class="box enterprise-enquiries">
        <h4><span class="icon-chat"></span> Send Us A Message</h4>
        <p>If you are an organization, government body, educational institution or not-for-profit that needs upskilling or training services for your workforce - we are at your service!</p>
        <p>Contact us for enquiries on any of our business solutions such as our Free Learning Management System (FLMS), or our API integration.</p>
        <button >Contact Us</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessContactUs"
}
</script>

<style scoped>
.box {
  background: #eaeff4 0 0 no-repeat padding-box;
  border-radius: 16px;
  border-top: 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%);
  height: 482px;
  opacity: 1;
  padding: 36px;
  position: relative;
  width: 382px;
}
.banner-inner-wrapper h1 {
  color: #fff;
  letter-spacing: 0;
  margin: 20px auto 0;
  opacity: 1;
  text-align: center;
  text-transform: capitalize;
  font-weight: 800;
}
.block-1{
  width: 45%;
  align-items: center;
  background: #022d59;
  display: flex;
  padding-top: 10px;
  grid-area: flms-contact__banner;
  justify-content: center;
}
.flms-contact__banner__text p{
  color: #fff;
  letter-spacing: 0;
  margin: 0 auto;
  max-width: 484px;
  text-align: center;
  font-size: 16px;
}
.flms-contact__banner__heading h1 {
  color: #fff;
  /*font: normal normal 900 40px/53px Roboto;*/
  letter-spacing: 0;
  margin: 20px auto 5px;
  opacity: 1;
  text-align: center;
  text-transform: capitalize;
}
.business-contact{
  display: flex;
  height: 727px;
  justify-content: space-between;
}
/*.contact-us{*/
/*  width: 50%;*/
/*}*/
.block-2{
  width: 55%;
  height: 727px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-top: 30px;
  /*background: #fff;*/
  background-image: url('https://cdn01.alison-static.net/public/html/site/img/free-lms/flms-contact-bg.svg');
  background-repeat: no-repeat;
  background-size: 100% 120%;
  grid-area: flms-contact__boxes;
}
.block-2 button
{
  align-items: center;
  background: #0091c6 0 0 no-repeat padding-box;
  border-radius: 24px;
  bottom: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  /*font: normal normal 700 16px/21px Roboto;*/
  height: 48px;
  font-weight: 800;
  justify-content: center;
  letter-spacing: 0;
  opacity: 1;
  position: absolute;
  text-align: center;
  transition: background .25s ease-in-out;
  width: calc(100% - 72px);
  border: none;
}

</style>
