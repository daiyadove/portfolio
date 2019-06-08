import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomeComponent from './components/Welcome.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import Skill from './components/Skill.vue'
import Try from './components/Try.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: AboutMe
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/skill',
        component: Skill
    },
    {
        path: '/try',
        component: Try
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router