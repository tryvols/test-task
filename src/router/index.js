import Vue from 'vue'
import Router from 'vue-router'
import PaymentLinksView from '@/components/PaymentLinksView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaymentLinksView',
      component: PaymentLinksView
    }
  ]
})
