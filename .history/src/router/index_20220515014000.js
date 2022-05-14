import Vue from 'vue'
import Router from 'vue-router'
import SearchEngine from '@/components/SearchEngine'

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
      name: 'searchResult',
      component: searchResult
    }
  ]
})
