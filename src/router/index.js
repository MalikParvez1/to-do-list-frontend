import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeErstellen from '@/views/ListeErstellen'
import ListeView from '@/views/ListeView'
import Home from '../views/Home.vue'
import TestView from '@/views/TestView'
import Seda from '@/views/Seda'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listeErstellen',
    name: 'listeErstellen',
    component: ListeErstellen
  },
  {
    path: '/listeView',
    name: 'listeView',
    component: ListeView
  },
  {
    path: '/',
    name: 'helloworld',
    component: Home
  },
  {
    path: '/testComponent',
    name: 'testComponent',
    component: TestView
  },
  {
    path: '/seda',
    name: 'Seda',
    component: Seda
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
