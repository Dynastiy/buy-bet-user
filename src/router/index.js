import Vue from 'vue'
import Router from 'vue-router'

import viewBet from '../components/Views/viewBet.vue'
import commission from '../components/Views/commission.vue'
import deposit from '../components/Views/depositing'
import withdrawal from '../components/Views/withdrawal'
import works from '../components/Views/works'





Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: viewBet},
    {path: '/commission', component: commission},
    {path: '/deposit', component: deposit},
    {path: '/withdrawal', component: withdrawal},
    {path: '/works', component: works},
  ]
})