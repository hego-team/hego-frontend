import Vue from 'vue'
import Router from 'vue-router'
import searchEngine from '@/components/searchEngine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'searchEngine',
      component: SearchEngine
    }
  ]
})
