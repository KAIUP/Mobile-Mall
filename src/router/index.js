import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) { 
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () =>
      import ('views/home/Home')
  },
  {
    path: '/category',
    component: () =>
      import ('views/category/Category')
  },
  {
    path: '/cart',
    component: () =>
      import ('views/cart/Cart')
  },
  {
    path: '/profile',
    component: () =>
      import ('views/profile/Profile')
  },
  {
    path: '/detail',
    component: () =>
      import ('views/detail/Detail')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router