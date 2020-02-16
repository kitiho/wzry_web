import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryEdit from './components/views/CategoryEdit'
import CategoryList from './components/views/CategoryList'
import ItemEdit from './components/views/ItemEdit'
import ItemList from './components/views/ItemList'
import HeroEdit from './components/views/HeroEdit'
import HeroList from './components/views/HeroList'
import ArticleEdit from './components/views/ArticleEdit'
import ArticleList from './components/views/ArticleList'
import AdEdit from './components/views/AdEdit'
import AdList from './components/views/AdList'
import UserEdit from './components/views/UserEdit'
import UserList from './components/views/UserList'

Vue.use(VueRouter)

const routes = [
  { path: '/categoryEdit/:id', component: CategoryEdit ,props:true},
  { path: '/categoryCreate', component: CategoryEdit },
  { path: '/categoryList', component: CategoryList },
  
  { path: '/itemEdit/:id', component: ItemEdit ,props:true},
  { path: '/itemCreate', component: ItemEdit },
  { path: '/itemList', component: ItemList },

  { path: '/heroEdit/:id', component: HeroEdit ,props:true},
  { path: '/heroCreate', component: HeroEdit },
  { path: '/heroList', component: HeroList },
  
  { path: '/articleEdit/:id', component: ArticleEdit ,props:true},
  { path: '/articleCreate', component: ArticleEdit },
  { path: '/articleList', component: ArticleList },

  { path: '/adEdit/:id', component: AdEdit ,props:true},
  { path: '/adCreate', component: AdEdit },
  { path: '/adList', component: AdList },

  { path: '/userEdit/:id', component: UserEdit ,props:true},
  { path: '/userCreate', component: UserEdit },
  { path: '/userList', component: UserList },
]

const router = new VueRouter({
  routes
})

export default router