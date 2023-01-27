<template>
  <div class="cardCenter row">
    <div class=" col-md-6 col-sm-11 p-5">
      <div class="card ">
        <div class=" m-2">
          <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
        </div>
        <div class=" m-2">
          <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="password">
        </div>

        <div class="text-center my-3">
          <button type="submit" class="btn btn-primary" @click.prevent="login">Log In</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null,
      store: useStore()
    };
  },
  methods: {
    login() {
      if ((!this.email) || (!this.password)) {
        alert("Fill complete details")
      } else {
        const user = true
        localStorage.setItem("user", user);
        this.store.dispatch("loginFunction", user);
        this.$router.push("/shopping-cart")
      }
    }
  }
};
</script>
<style scoped>
.card {
  padding: 40px;
  border: none;
  box-shadow: 4px 4px 4px 4px #f5f5f5;
}

.cardCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  width: 100px;
  border: none;
  color: #f5f5f5;
  background: #EF7C8E;
  ;
  border-radius: 30px;
}

button:hover {
  box-shadow: 4px 4px 4px 7px #f5f5f5;
  background: #EF7C8E;
}

@media (max-width: 578px) {
  .card {
    padding: 5px;
    border: none;
    box-shadow: 4px 4px 4px 4px #f5f5f5;
  }

}
</style>
