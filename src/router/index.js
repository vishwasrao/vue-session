import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Form from '@/components/Form'
import Computed from '@/components/Computed'
import Graph from '@/components/Graph'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ]
})
