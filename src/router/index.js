import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  scrollBehavior(to) {
    // always scroll to top
    if(to.path === "/Samsung" || to.path === "/Iphone" || to.path === "/Huawei"){
      return { top: 150 }
    }
    else if(to.name === "detailPage"){
      return {top: 240}
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Samsung',
      name: 'Samsung',
      component: () => import('../views/SamsungView.vue')
    },
    
    {
      path: "/Iphone",
      name: "Iphone",
      component: () =>
        import("../views/IphoneView.vue"),
    },
    {
      
        path: "/Huawei",
        name: "Huawei",
        component: () =>
          import("../views/HuaweiView.vue")
      
    },
    { 
      path: "/detailPage/:title/:price/:img/:productDetails/:imgGroup/",
      name: "detailPage",
      component: () =>
        import("../views/detailView.vue")
  },
  
  ]
});

//  router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
  
//   document.title = `${to.name}-MARK`;

//   next()
// })

export default router
