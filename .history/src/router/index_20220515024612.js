import Vue from 'vue'
import Router from 'vue-router'
import SearchEngine from '@/components/SearchEngine'
import SearchResult from '@/components/SearchResult'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    
    {
      path: '/home',
      name: 'SearchEngine',
      component: SearchEngine
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
