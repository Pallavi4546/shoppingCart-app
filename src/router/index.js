
  import { createRouter, createWebHistory } from 'vue-router'
  import LoginPage from '@/Pages/LoginPage.vue'
  import ShopingCart from '@/Pages/ShopingCart.vue'
  import NotFound from '@/Pages/NotFound.vue'
  import HomePage from '@/Pages/HomePage.vue'
  import CartItems from '@/Pages/CartItems.vue'
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:  
    [
        { path: '/', component: HomePage },

        { path: '/login', component: LoginPage },
        { path: '/shopping-cart', component: ShopingCart },
        { path: '/cart-items', component: CartItems },
  
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ]
  })
  
  export default router
  