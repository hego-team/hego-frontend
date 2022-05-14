import Vue from 'vue'
import Router from 'vue-router'
import SearchEngine from '@/components/SearchEngine'
import searchResult from '@/components/searchResult'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
      name: 'searchEngine',
      component: SearchEngine
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
