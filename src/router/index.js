import Vue from 'vue'
import Router from 'vue-router'
import UserBase from '@/components/UserBase'
import ChatBase from '@/components/ChatBase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'UserBase',
      component: UserBase
    },
    {
      path: '/chat',
      name: 'ChatBase',
      component: ChatBase
    }
  ]
})
