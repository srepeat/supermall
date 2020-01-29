import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title:'分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title:"购物车"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//前置钩子
router.beforeEach((to,from,next) =>{
    // console.log(to);
    document.title = to.matched[0].meta.title;
    next()
})


export default router

