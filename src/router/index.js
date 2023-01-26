
  import { createRouter, createWebHistory } from 'vue-router'
  import LoginPage from '@/Pages/LoginPage.vue'
  import shoppingCart from '@/Pages/shopingCart.vue'
  import NotFound from '@/Pages/NotFound.vue'
  import HomePage from '@/Pages/HomePage.vue'
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:  
    [
        { path: '/', component: HomePage },

        { path: '/login', component: LoginPage },
        { path: '/shoppingCart', component: shoppingCart },
      
  
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ]
  })
  
  export default router
  