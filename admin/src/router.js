import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryEdit from './components/views/CategoryEdit'
import CategoryList from './components/views/CategoryList'
import ItemEdit from './components/views/ItemEdit'
import ItemList from './components/views/ItemList'

Vue.use(VueRouter)

const routes = [
  { path: '/categoryEdit/:id', component: CategoryEdit ,props:true},
  { path: '/categoryCreate', component: CategoryEdit },
  { path: '/categoryList', component: CategoryList },
  
  { path: '/itemEdit/:id', component: ItemEdit ,props:true},
  { path: '/itemCreate', component: ItemEdit },
  { path: '/itemList', component: ItemList }
]

const router = new VueRouter({
  routes
})

export default router