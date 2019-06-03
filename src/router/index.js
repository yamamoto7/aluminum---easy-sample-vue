import Vue from 'vue'
import Router from 'vue-router'
import UserBase from '@/components/UserBase'
import ChatBase from '@/components/ChatBase'
import AuthBase from '@/components/AuthBase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'UserBase',
      component: UserBase
    },
    {
      path: '/auth',
      name: 'AuthBase',
      component: AuthBase
    },
    {
      path: '/chat',
      name: 'ChatBase',
      component: ChatBase
    }
  ]
})
