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
import Login from '../components/Login'
import FastLogin from '../components/FastLogin'
import ForgetPass from '../components/ForgetPass'
import Register from '../components/Register'
import MyJjr from '../components/Myjingjiren'
import MyJy from '../components/MyJy'
import MyDyss from '../components/MyDyss'
import MyYhj from '../components/MyYhj'
import House from '../components/House'
import Myzx from '../components/Myzx'
import Fbfy from '../components/Fbfy'
import Ssuo from '../components/Ssuo'
import Ssesf from '../components/Ssesf'
import Ssxf from '../components/Ssxf'
import Sszf from '../components/Sszf'
import FwgujiaDetail from '../components/FwgujiaDetail'
import AddHouse from '../components/AddHouse'
import SetUp from '../components/SetUp'
import MyEntrust from '../components/MyEntrust'
import FbfyMf from '../components/FbfyMf'
import MsgSet from '../components/MsgSet'
import Maphouse from '../components/Mapfindhouse'
import Modalxx from '../components/Modalxx'
import MyMsg from '../components/MyMsg'

Vue.use(Router);

export default new Router({
	mode: 'history',
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
      path: '/login',
      component: Login
    },
    {
      path: '/fastlogin',
      component: FastLogin
    },
    {
      path: '/forgetpass',
      component: ForgetPass,
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/myjjr',
      component: MyJjr
    },
    {
      path: '/myjy',
      component: MyJy
    },
    {
      path: '/mydyss',
      component: MyDyss
    },
    {
      path: '/myyhj',
      component: MyYhj
		},
		{
      path: '/house',
      component: House
    },
    {
      path: '/myzx',
      component: Myzx
	},
	{
      path: '/sousuo',
      redirect:"/sousuo/ssesf",
      component: Ssuo,
      children:[
      	{path:"ssesf",name:"Ssesf",component:Ssesf},
      	{path:"ssxf",name:"Ssxf",component:Ssxf},
      	{path:"sszf",name:"Sszf",component:Sszf}
      ]
	},
    {
      path: '/fbfy',
      component: Fbfy
    },
    {
      path: '/fwgjDetail',
      component: FwgujiaDetail
    },
    {
      path: '/addHouse',
      component: AddHouse
    },
    {
      path: '/setUp',
      component: SetUp
    },
    {
      path: '/myEntrust',
      component: MyEntrust
    },
    {
      path: '/fbfyMf',
      component: FbfyMf
    },
    {
      path: '/msgSet',
      component: MsgSet
    },
    {
      path: '/maphouse',
      component: Maphouse
    },
    {
      path: '/modalxx',
      component: Modalxx
    },
    {
      path: '/myMsg',
      component: MyMsg
    },
    {
      path: '/',
      redirect:"/home"
    }
  ]
})
