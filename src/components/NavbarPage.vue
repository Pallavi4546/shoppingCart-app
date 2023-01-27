<template>
    <div>
      <nav class="navbar navbar-expand-md navbar-white bg-white  ">
        <img class="img-fluid mx-5"  src='../assets/logo2.png'/>
        <button class="navbar-toggler" type="button" @click.prevent="isNavbarOpen = !isNavbarOpen" :aria-expanded="isNavbarOpen" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }">
          <ul class="navbar-nav mx-4 ">
            <li class="nav-item" v-if="!login">
              <router-link class="nav-link " to="/login"><button  class="btn p-2">Log In</button></router-link>
            </li>
            <li class="nav-item" v-if="login">
              <router-link class="nav-link " to="/shopping-cart"><button  class="btn p-2">Shop</button></router-link>
            </li>
            <li class="nav-item" v-if="login">
              <router-link class="nav-link " to="/cart-items"><button  class="btn p-2"><button :style="cartCount ? `width:25px;height:25px;background:white;border-radius:10px;border:none` : `display:none`">{{ cartCount }}</button> View Cart </button></router-link>
            </li>
            <li class="nav-item" v-if="login">
              <router-link class="nav-link " to="#"><button  class="btn p-2" @click.prevent="logout()">Log Out</button></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { mapGetters,useStore } from 'vuex'
  export default {
    data() {
      return {
        isNavbarOpen: false,
        store:useStore()
      }
    },
    computed:{
      ...mapGetters(['login','cartCount']), 
    },
    methods:{
        logout(){
          console.log("this",this)
          let user = false
            localStorage.setItem("user",user);
            this.store.dispatch("loginFunction", user);
            this.$router.push("/")
        }
    }
  }
  </script>
  <style scoped>
 .img-fluid {
    object-fit: cover;
    width:100px;
    height: auto;
}
.btn{
    border:none;
    background-color: #EF7C8E;
    color:#fff;
    border-radius: 30px;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
    width:150px;
}
.navbar-expand-md .navbar-collapse {
    flex-direction: row-reverse;
}


</style>
  