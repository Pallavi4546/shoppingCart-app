<template>
    <div class="mx-auto ">
        <div class="cardData m-2 " v-if="cartData">
            <div v-for="(item, i) in cartData" :key="i">
                <div class="card m-3 p-2">
                    <img class="img-fluid mx-auto text-center" :src="item.image" alt="no image" />
                    <p><strong>{{ item.name }} by {{ item.brand }}</strong></p>
                    <p style="color:gray">{{ item.description }}</p>
                    <p>Best Price: <span style="color:#FF2768">Rs. {{ item.price }}</span></p>

                    <div class="buttonData">
                        <button class="btn1 m-2"
                            :style="`background:${item.colors};border:none;width:30px;height:30px;border-radius:50%;box-shadow: 4px 4px 4px 4px #f5f5f5;`"></button>
                    </div>
                    <div class="buttonData">
                        <button class="btn m-1">{{ item.sizes }}</button>
                    </div>
                    <div class="text-center">
                        <button class="addToCart p-2 m-2" @click="removeItems(item, i)">Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="cartData.length == 0">
            <div class="d-flex align-item-center justify-content-center ">
                <h5>No items in Cart</h5>
            </div>
        </div>
    </div>

</template>
<script>
import { useStore } from "vuex";
export default {
    data() {
        return {
            cartData: [],
            store: useStore()
        }
    },
    created() {
        this.cartData = JSON.parse(localStorage.getItem("cartArray"))
        this.store.dispatch("countCartItem", this.cartData?.length);
    },
    methods: {
        removeItems(item, i) {
            this.cartData.splice(i, 1)
            localStorage.setItem("cartArray", JSON.stringify(this.cartData));
        }
    }
}
</script>
<style scoped>
.card {
    width: 350px;
    border: none;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
}

img {
    width: auto;
    height: auto;
}

.cardData {
    display: flex;
    flex-wrap: wrap;
    gap: 40;
    align-items: center;
    justify-content: center;
}

.buttonData {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.btn {
    border: 1px solid pink;
}

/* color:#3CACAE; */
.addToCart {
    background: transparent;
    color: #EF7C8E;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
    border: 1px solid #EF7C8E;
    width: 320px;
}

.addToCart:hover {
    background: #EF7C8E;
    color: #f5f5f5;
}

.btn:hover {
    background-color: pink;
    color: white;
    box-shadow: 4px 4px 4px 4px #f5f5f5;

}

.img-fluid {
    object-fit: cover;
}

@media (max-width: 400px) {
    .addToCart {
        background: transparent;
        color: #EF7C8E;
        box-shadow: 4px 4px 4px 4px #f5f5f5;
        border: 1px solid #EF7C8E;
        width: 250px;
    }

    .card {
        width: 280px;
        border: none;
        box-shadow: 4px 4px 4px 4px #f5f5f5;
    }
}
</style>