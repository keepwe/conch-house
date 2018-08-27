import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Search from '../components/Search'
import Message from '../components/Message'
import Mine from '../components/Mine'
import ESFang from '../components/ESFang'
import Zfang from '../components/Zfang'
import Xfang from '../components/Xfang'
import Haiwai from '../components/HaiWai'
import Zhuangxiu from '../components/Zhuangxiu'
import Mfang from '../components/Mfang'
import Zxiaoqu from '../components/Zxiaoqu'
import Cchengjiao from '../components/Cchengjiao'
import Fwugujia from '../components/Fwugujia'
import Baike from '../components/Baike'


Vue.use(Router);

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
      path: '/esf',
      component: ESFang
    },
    {
      path: '/zf',
      component: Zfang
    },
    {
      path: '/xf',
      component: Xfang
    },
    {
      path: '/hw',
      component: Haiwai
    },
    {
      path: '/zx',
      component: Zhuangxiu
    },
    {
      path: '/mf',
      component: Mfang
    },
    {
      path: '/zxq',
      component: Zxiaoqu
    },
    {
      path: '/ccj',
      component: Cchengjiao
    },
    {
      path: '/fwgj',
      component: Fwugujia
    },
    {
      path: '/bk',
      component: Baike
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})
