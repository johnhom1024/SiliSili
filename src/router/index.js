import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/register'
import Login from '@/pages/login'
import Home from '@/pages/home'
import PersonalInformation from '@/components/personalinformation'
import MvList from '@/components/mvlist'
import AnimeComments from '@/components/animeComments'
import Setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'personalInformation',
          component: PersonalInformation
        },
        {
          path: 'mv',
          component: MvList
        },
        {
          path: 'animeComments',
          component: AnimeComments
        },
        {
          path: 'setting',
          component: Setting
        }
      ]
    }
  ]
})
