import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "Home",
      component: () => import('../views/Home.vue')
    },
    {
      path: "/add-coffee",
      name: "AddCoffee",
      component: () => import("../views/AddCoffee.vue")
    },
    {
      path: '/coffees',
      name: "Coffees",
      component: () => import("../views/Coffees.vue")
    },
    {
      path: '/updateORdelete',
      name: "Update OR Delete",
      component: () => import("../views/UpdateCoffee.vue")
    }

  ]
})

export default router
