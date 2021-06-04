import {createWebHistory, createRouter} from 'vue-router'
import Home from '../components/Home'
import Work from '../components/Work'
import Contact from '../components/Contact'

const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path :'/work',
        name : 'Work',
        component : Work
    },
    {
        path : '/contact',
        name : 'Contact',
        component : Contact
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router;