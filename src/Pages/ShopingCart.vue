<template >
    <div class="mx-auto ">
    <div class="cardData m-2 ">
        <div  v-for="(item,i) in data" :key="i">
            <div class="card m-3 p-2" >
    <img class="img-fluid mx-auto text-center" :src="item.image" alt="no image"/>
<p><strong>{{ item.name }} by {{ item.brand }}</strong></p>
<p  style="color:gray">{{ item.description }}</p>
<p>Best Price: <span style="color:#FF2768">Rs. {{item.price}}</span></p>

<div   class="buttonData">
    <button class="btn1 m-2" v-for="(data,k) in item.colors" :key="k" @click="selectedColor(data)" :style="`background:${data};border:none;width:30px;height:30px;border-radius:50%;box-shadow: 4px 4px 4px 4px #f5f5f5;`"></button>
</div>
<div  class="buttonData">
    <button  class="btn m-1" v-for="(val,l) in item.sizes" :key="l" @click="size(val)" >{{ val }}</button>
</div>
<div class="text-center">
    <button class="addToCart p-2 m-2" @click="addItemToCart(item)">Add To Cart</button>
</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  import { useStore } from "vuex";
export default{
    data(){
return{
    data:[],
    selectedItemColor:null,
    selectedSize:null,
    cartArray:[],
    store : useStore()
}
    },

    created(){
        
        this.data =
 [
    {
      "id": 1,
      "name": "T-Shirt",
      "price": 6789.99,
      "image": require(`@/assets/img7.png`),
      "description": "A comfortable and stylish cloth.",
      "colors": ["orange", "lightblue", "pink"],
      "sizes": ["S", "M", "L", "XL"],
      "categories": ["Women", "casual"],
      "brand":"Roadster"
    },
    {
      "id": 2,
      "name": "Dress",
      "price": 4890.99,
      "image": require(`@/assets/img2.png`),
      "description": "A elegant dress",
      "colors": ["orange", "pink"],
      "sizes": ["XS", "S", "M", "L"],
      "categories": ["women", "formal"],
      "brand":"Orange"
    },
    {
      "id": 3,
      "name": "Jacket",
      "price": 799.99,
      "image": require(`@/assets/img3.png`),
      "description": "A warm jacket",
      "colors": ["lightblue", "gray"],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "categories": ["women", "outdoor"],
      "brand":"Orange"
    },
    {
      "id": 2,
      "name": "Dress",
      "price": 2339.99,
      "image": require(`@/assets/img4.png`),
      "description": "A elegant dress",
      "colors": ["purple", "lightblue"],
      "sizes": ["XS", "S", "M", "L"],
      "categories": ["women", "outdoor"],
      "brand":"Forever21"
    },
    {
      "id": 2,
      "name": "Dress",
      "price": 6779.99,
      "image":require(`@/assets/img9.png`),
      "description": "Women denim Jacket",
      "colors": ["lightblue", "pink"],
      "sizes": ["XS", "S", "M", "L"],
      "categories": ["women", "outdoor"],
      "brand":"Forever21"

    },
    {
      "id": 2,
      "name": "Dress",
      "price": 4999.99,
      "image":require(`@/assets/img6.png`),
      "description": "A elegant straight fit Jeans",
      "colors": ["black", "lightblue"],
      "sizes": ["XS", "S", "M", "L"],
      "categories": ["women", "outdoor"],
      "brand":"Roadster"

    },
  ]
  if(localStorage.getItem("cartArray")){
        this.cartArray =  JSON.parse(localStorage.getItem("cartArray"))
this.store.dispatch("countCartItem",  this.cartArray?.length)
  }
},
methods:{
    selectedColor(color){
        this.selectedItemColor = color
    },
    size(size){
        this.selectedSize = size
    },
    addItemToCart(item){
        let obj = {...item}
if(this.selectedSize==null && this.selectedItemColor == null)alert("Please select a size and color")
else if(this.selectedItemColor == null)alert("Please choose a color ")
else if(this.selectedSize==null )alert("Please select a size ")
else{
    obj.colors = this.selectedItemColor
    obj.sizes = this.selectedSize
    if(localStorage.getItem("cartArray")){
        this.cartArray =  JSON.parse(localStorage.getItem("cartArray"))

        this.cartArray.push(obj)
        localStorage.setItem("cartArray", JSON.stringify(this.cartArray));
    }
   else{
    this.cartArray.push(obj)
    localStorage.setItem("cartArray", JSON.stringify(this.cartArray));
   }
   this.store.dispatch("countCartItem",  this.cartArray?.length);
   this.selectedItemColor =null
    this.selectedSize = null
    alert("Item added to cart successfully!")
}
    }
}

}
</script>
<style scoped>
 .card {
    width:350px;
  border: none;
  box-shadow: 4px 4px 4px 4px #f5f5f5;
}
img{
    width:auto;
    height: auto;
}
.cardData{
    display: flex;
    flex-wrap: wrap;
    gap: 40;
    align-items: center;
    justify-content: center;
}
.buttonData{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.btn{
    border:1px solid pink;
}
/* color:#3CACAE; */
.addToCart{
    background: transparent;
    color:#EF7C8E;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
    border: 1px solid #EF7C8E;
    width:320px;
}
.addToCart:hover{
    background: #EF7C8E;
    color:#f5f5f5;
}
.btn:hover{
    background-color: pink;
    color:white;
  box-shadow: 4px 4px 4px 4px #f5f5f5;

}
.img-fluid {
    object-fit: cover;
}
@media (max-width: 400px) {
    .addToCart{
    background: transparent;
    color:#EF7C8E;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
    border: 1px solid #EF7C8E;
    width:250px;
}
.card {
    width:280px;
  border: none;
  box-shadow: 4px 4px 4px 4px #f5f5f5;
}
}
</style>
