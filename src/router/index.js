import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载(使用import)
// 主页
const Home = () => import('../views/home/Home.vue')
// 消息
const Category = () => import('../views/category/Category.vue')
// 
const Cart = () => import('../views/cart/Cart.vue')
// 我的
const Profile = () => import('../views/profile/Profile.vue')
//详情页
const Detail = () => import('../views/detail/Detail.vue')

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  /* vue异步组件技术 */
  //  path 指路径，component 指的是组件
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  }
]

// 创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }

export default router

