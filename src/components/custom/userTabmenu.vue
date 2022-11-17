<template>
    <div class="user-tab" @click.self="authModal">
        <div class="modal-body">
            <div style="display:flex;align-items: center; color: black;  line-height: 80%; border-bottom: 1px solid gray">
                <div class="person"></div>
                <div style="margine:10px 10px">
                    <p>{{user.lastname}}</p>
                    <p style="padding: 0 5px">View Your Alison Profile <span style="background: #1783b1; padding: 3px 5px; color:white; border-radius: 5px">New</span></p>
                </div>
            </div>
            <div style="padding:5px 15px" @click="authModal">
                <router-link class="root" to="/dashboard"><div class="dashboard-list" ><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/dashboard.svg')"></div>Your Dashboard</div></router-link>
                <router-link to="" class="root"><div class="dashboard-list"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/your-certificates.svg')"></div> Get Your Certificates</div></router-link>
                <router-link to="" class="root"><div class="dashboard-list"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/your-resume.svg')"></div>Create Your Resume</div></router-link>
                <router-link to="" class="root"><div class="dashboard-list"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/language.svg')"></div>Change Language  <b-icon icon="chevron-right"></b-icon></div></router-link>
                <router-link to="" class="root"><div class="dashboard-list" style="border-top: 1px solid gray"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/settings.svg')"></div> Account Settings</div></router-link>
                <router-link to="" class="root"><div class="dashboard-list"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/help.svg')"></div> Help</div></router-link>
                <div class="dashboard-list"><div class="icons" style="background-image: url('https://alison.com/html/site/img/header/logout.svg')"></div><button @click="logout" style="background:none; border:none"> Logout </button></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:['authModal', 'logout'],
    data(){
        return{
            user:{}
        }
    },
    mounted(){
        this.getAuth()
    },
    methods:{
        getAuth(){
          this.axios.get('/auth-user')
          .then(response => {
            this.user = response.data.user
          }).catch(error => {
             return error
          })
        },
    }
}
</script>

<style scoped>
.user-tab{
  top: 100px;
  height: 100vh;
  position: fixed;
  width: 100vw;
  display: flex;
  background: rgba(80, 75, 75, 0.7);
  padding:10px 0;
  right: 0;
}
.modal-body{
     position: absolute;
  right: 10px;
  top: 10px;
  width: 23%;
  background: white;
  height:auto;
  border-radius: 15px;
  padding: 15px 0;
}
.dashboard-list{
    display:flex;
    margin: 10px;
    align-items: center;
    /* justify-content: space-between */
}
.icons{
  width: 40px;
  height: 40px;
  /* margin: 20px auto; */
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  border: 1px solid lightgrey;
  /* background-image: url("https://alison.com/images/users/default/26681657.jpg"); */
  background-size: cover;
  margin-right: 40px ;
}
.root{
    color: gray;
    text-decoration: none;
}
.root:hover{
    color: black;
    font-weight: 500;
}

.person{
  width: 60px;
  height: 60px;
  margin: 10px auto;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px solid;
  border: 4px solid rgb(168, 165, 165);
  background-image: url("https://alison.com/images/users/default/26681657.jpg");
  background-size: cover;
}
</style>
