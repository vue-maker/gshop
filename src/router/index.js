import VueRouter from "vue-router";


// import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
//使用路由组建懒加载
const Msite = ()=> import('../pages/Msite/Msite.vue')
const Order = ()=> import('../pages/Order/Order.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')
const Search = ()=> import('../pages/Search/Search.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'


export default new VueRouter({
  routes: [
    {
      path: '/shop',
      component: Shop, //返回路由组建的函数，只有执行次函数才会加载路由组建（在请求对应的路由路径的时候才会执行）
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },

    {
      path: '/',
      redirect: '/msite'
    }
  ]
})