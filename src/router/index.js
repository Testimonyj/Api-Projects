import { createRouter, createWebHistory } from 'vue-router';
import WeatherPage from '../views/WeatherPage.vue'
import DictionaryPage from '../views/DictionaryPage.vue'

const routes = [


  {
    path: '/',
    name: 'dictionary',
    component: DictionaryPage
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
