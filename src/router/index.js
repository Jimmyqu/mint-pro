import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page3/Home'
import Location from '@/components/page3/Location'
import transitionTest from '@/components/page3/transitionTest'
import detail from '@/components/page3/detail'
import videoCom from '@/components/page3/videoCom'
import waterFall from '@/components/page3/waterFall'
import indexList from '@/components/page3/indexList'
import movie from '@/components/page3/movie'

Vue.use(Router)

export default new Router({
  // history: true,
  // saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/location',
      name: 'Location',
      component: Location
    },
    {
      path:'/test',
      name: 'test',
      component: transitionTest
    },
    {
      path:'/detail',
      name: 'detail',
      component: detail
    },
    {
      path:'/videoCom',
      name: 'videoCom',
      component: videoCom
    },
    {
      path:'/waterFall',
      name: 'waterFall',
      component: waterFall
    },
    {
      path:'/indexList',
      name: 'indexList',
      component: indexList
    },
    {
      path:'/movie',
      name: 'movie',
      component: movie
    },
  ]
})
