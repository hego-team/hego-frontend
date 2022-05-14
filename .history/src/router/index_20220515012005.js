import Vue from 'vue'
import Router from 'vue-router'
import SearchEngine from '@/components/SearchEngine'

Vue.use(Router)

export default new Router({
  routes: [
    mode
    {
      path: '/home',
      name: 'searchEngine',
      component: SearchEngine
    }
  ]
})
