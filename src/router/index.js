import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "../views/ShopView.vue"
import ContentProfile from "../views/ContentProfile.vue"
import ProductView from "../views/ProductView.vue" 
import WarenkorbView from "../views/WarenKorbView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ContentProfile 
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView

    },

    {
      path: '/warenkorb',
      name: 'warenkorb',
      component: WarenkorbView

    }


  ]
})

export default router
