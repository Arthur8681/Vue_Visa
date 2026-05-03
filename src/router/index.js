import { createRouter, createWebHistory } from 'vue-router'

// Import your components (pages)
import main from '../pages/main.vue'
import UK from '../pages/UK.vue'
import usa from '../pages/USA.vue'
import countries from '../pages/countries.vue'
import visaSelection from '@/pages/visaSelection.vue'
import profile from '@/pages/profile.vue'
import canada from '@/pages/canada.vue'
import ireland from '@/pages/ireland.vue'
import australia from '@/pages/australia.vue'
import japan from '@/pages/japan.vue'
import newZealand from '@/pages/newZealand.vue'
import taiwan from '@/pages/taiwan.vue'
import singapore from '@/pages/singapore.vue'
import im from '@/pages/im.vue'
import st from '@/pages/st.vue'
import work from '@/pages/work.vue'
import tour from '@/pages/tour.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: main
  },
  {
    path: '/uk',
    name: 'uk',
    component: UK
  },
  {
    path: '/usa',
    name: 'usa',
    component: usa
  },
  {
    path: '/countries',
    name: 'countries',
    component: countries
  },
  {
    path: '/visaSelection',
    name: 'visaSelection',
    component: visaSelection
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/canada',
    name: 'canada',
    component: canada
  },
  {
    path: '/ireland',
    name: 'ireland',
    component: ireland
  },
  {
    path: '/australia',
    name: 'australia',
    component: australia
  },
  {
    path: '/japan',
    name: 'japan',
    component: japan
  },
  {
    path: '/nz',
    name: 'nz',
    component: newZealand
  },
  {
    path: '/taiwan',
    name: 'taiwan',
    component: taiwan
  },
  {
    path: '/singapore',
    name: 'singapore',
    component: singapore
  },
  {
    path: '/im',
    name: 'im',
    component: im
  },
  {
    path: '/st',
    name: 'st',
    component: st
  },
  {
    path: '/work',
    name: 'work',
    component: work
  },
  {
    path: '/tour',
    name: 'tour',
    component: tour
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router