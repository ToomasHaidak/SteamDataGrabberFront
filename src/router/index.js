import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginTest from '../views/LoginTest.vue'
import PageOne from '../views/PageOne.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/logintest',
    name: 'LoginTest',
    component: LoginTest
  },
  {
    path: '/pageone',
    name: 'PageOne',
    component: PageOne
  }

]

const router = new VueRouter({
  routes
})

export default router


