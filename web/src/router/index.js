import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import HomePage from '../components/HomePage'
import Article from '../components/Article'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/', redirect: '/homePage' },
      { path: '/homePage', name: 'homePage', component: HomePage },
      { path: '/article/:id', name: 'article', component: Article, props: true },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
