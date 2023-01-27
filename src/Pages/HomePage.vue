<template>
       <!-- <h1>Welcome to Designer Studio!</h1> -->
       <div class="row mx-lg-5 container">
        <div class="col-md-6 col-sm-12 ">
            <img class="img-fluid m-auto" src="../assets/one.png" />
        </div>
        <div class="col-md-6 text text-center my-auto">
        <h1 > Welcome to the <span Style=" color: #EF7C8E;"> Designer Studio !</span></h1>
        <h4 class="my-4">"Fashion is a language that creates itself in clothes to interpret reality."</h4>
        <button @click.prevent="$router.push('/login')" class="p-3"> Shop Now</button>
        </div>
       </div>
</template>
<style scoped>
h1,h4{
    font-family: Georgia, 'Times New Roman', Times, serif;
    overflow: hidden;
}

.img-fluid {
    object-fit: cover;
    width: 500px;
}
button{
    border:none;
    background-color: #EF7C8E;
    color:#fff;
    border-radius: 30px;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
    width:150px;
  }
  button:hover{
    box-shadow: 4px 4px 4px 7px #f5f5f5;
    background:  #EF7C8E;
  }
</style>