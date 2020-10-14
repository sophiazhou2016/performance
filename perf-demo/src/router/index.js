import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld'

const routes = [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  
export default router