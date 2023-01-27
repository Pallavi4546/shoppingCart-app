<template>
    <div class="cardCenter row">
        <div class=" col-md-6 col-sm-11 p-5">
            <div class="card ">
  <div class=" m-2">
    <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
  </div>
  <div class=" m-2">
    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
  </div>
  <div class=" m-2">
    <input type="number" class="form-control" id="phone" placeholder="Enter Phone no:" v-model="phone">
  </div>
  <div class="text-center my-3"> 
    <button type="submit" class="btn btn-primary" @click.prevent="login">Log In</button>
  </div>
            </div>
        </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: null,
        name: null,
        phone:null
      };
    },
    methods: {
      login() {
        if((this.email==null || this.email =="") || (this.name == null || this.name =="") || (this.phone==null || this.phone == "")){
alert("Fill complete details")
        }else{
            const user = {
    name: this.name,
    email: this.email,
    phone: this.phone
};
localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/shopping-cart")
        }
        console.log(this.email)
      }
    }
  };
  </script>
  <style scoped>
  .card {
  padding:40px;
  border: none;
  box-shadow: 4px 4px 4px 4px #f5f5f5;
}
  .cardCenter{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    width:100px;
    border:none;
    color:#f5f5f5;
    background:  #EF7C8E;;
    border-radius: 30px;
  }
  button:hover{
    box-shadow: 4px 4px 4px 7px #f5f5f5;
    background:  #EF7C8E;
  }
  @media (max-width: 578px) {
    .card {
  padding:5px;
  border: none;
  box-shadow: 4px 4px 4px 4px #f5f5f5;
}

}

</style>
  