import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMq from 'vue-mq'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    desktop: Infinity
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
},
{
    path: '/contact',
    name: 'Contact',
    component: Contact
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
