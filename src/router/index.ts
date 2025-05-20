import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import useInterceptor from './interceptor'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

useInterceptor(router)

export default router
