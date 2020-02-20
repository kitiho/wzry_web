import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import HomePage from '../components/HomePage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path:'/',redirect:'/homePage'},
      {path:'/homePage',name:'homePage',component:HomePage}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
