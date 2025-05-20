import { type Router } from 'vue-router'

function useInterceptor(router: Router) {
  console.log('router:', router)
}

export default useInterceptor
