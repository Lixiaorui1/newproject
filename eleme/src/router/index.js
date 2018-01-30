import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Mine from '@/components/Mine'
import Login from '@/components/Login'

import Shop from '@/components/Shop'

import Find from '@/components/Find'


Vue.use(Router)

export default new Router({
	mode: "hash",
 	routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {

      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find

    }
  ]
})
