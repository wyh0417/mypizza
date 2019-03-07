import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import Home from '@/components/Home'
import About from '@/components/About'
import Register from '@/components/Register'
import Admin from '@/components/Admin'
import Menu from '@/components/Menu'
import Login from '@/components/Login'

// 二级路由
import Activity from '@/components/about/Activity'
import Contect from '@/components/about/Contect'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'

// 三级路由
import Address from '@/components/about/Contect/Address'
import Telphone from '@/components/about/Contect/Telphone'
import Person from '@/components/about/Contect/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      //设置默认跳转项
      redirect:'/contect',
      // 二级路由
      children:[
        {
          path: '/activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: '/contect',
          name: 'Contect',
          component: Contect,
          //设置默认跳转项
          redirect:'/address',
          children:[
            {
              path: '/person',
              name: 'Person',
              component: Person
            },
            {
              path: '/telphone',
              name: 'Telphone',
              component: Telphone
            },
            {
              path: '/address',
              name: 'Address',
              component: Address
            },
          ]
        },
        {
          path: '/delivery',
          name: 'Delivery',
          component: Delivery
        },
        {
          path: '/history',
          name: 'History',
          component: History
        },
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // 加上导航守卫
      beforeEnter:(to,from,next)=>{
        alert('您正在进入管理页面，请确保有操作权限')
        // 表示继续，允许进入当前路由
        // next()
        // 表示不允许进入
        // next(false)
        // 表示跳转到相应页面
        // next('/register')

        //to到哪里去
        //from从哪里来
        var login = true
        if(login){
          next()
        }else{
          alert('您还没有登录，请先登录')
          alert('页面正在跳转........')
          next('/login')
        }
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  // 取消“ # ”的锚点链接
  mode:'history'
})
