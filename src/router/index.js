import Vue from 'vue'
import VueRouter from 'vue-router'
//一级路由
import Main from '../views/main.vue'
import Detail from '../views/detail.vue'

//二级路由
import Home from "../views/main/home.vue"
import Idear from "../views/main/idear.vue"
import Message from "../views/main/message.vue"
import My from "../views/main/my.vue"

//三级路由
import First from '../views/main/homeBar/first.vue'
import Hot from '../views/main/homeBar/hot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/main"
  },
  {
    path:"/main",
    component:Main,
    children:[
      {
        path:"/main/home",
        component:Home,
        children:[
          {
            path:"/main/home/:type",
            component:First,
          },
          {
            path:"/main/home",
            redirect:"/main/home/first"
          }
        ]
      },
      {
        path:"/main/idear",
        component:Idear
      },
      {
        path:"/main/message",
        component:Message
      },
      {
        path:"/main/my",
        component:My
      },
      {
        path:"/main",
        redirect:"/main/home"
      }
    ]
  },
  {
    path:"/detail",
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
