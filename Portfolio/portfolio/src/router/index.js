import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMq from 'vue-mq'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

import AvastYe from '../views/projects/AvastYe.vue'
import LiveLink from '../views/projects/MVNLiveLinkUE4.vue'
import Backburner from '../views/projects/Backburner.vue'
import iORA from '../views/projects/iORA.vue'

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
    },
    {
        path: '/projects/AvastYe',
        name: 'Avast Ye',
        component: AvastYe
    },
    {
        path: '/projects/LiveLink',
        name: 'MVN Live Link to UE4',
        component: LiveLink
    },
    {
        path: '/projects/BackburnerScripting',
        name: 'Scripting with Backburner: IPA pronunciation',
        component: Backburner
    },
    {
        path: '/projects/iORA',
        name: 'iORA',
        component: iORA
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
