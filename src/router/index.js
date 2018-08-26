import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home'
import Search from '../components/search'
import Message from '../components/message'
import Mine from '../components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})
