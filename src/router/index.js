import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Newadd from '@/components/Adds/newadd'
import Addlist from '@/components/Adds/addlist'
import Login from '@/components/Auth/login'
import Registration from '@/components/Auth/registration'
import Orders from '@/components/Users/orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'newadd',
      component: Newadd
    },
    {
      path: '/list',
      name: 'addlist',
      component: Addlist
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})
