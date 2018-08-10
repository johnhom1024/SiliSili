import Vue from 'vue'
import Router from 'vue-router'

 
import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/register'
import Login from '@/pages/login'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },
    {
      path: '/register',
      component:Register
    },
    {
      path: '/login',
      component:Login
    }
  ]
})
