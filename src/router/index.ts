import { 
  createMemoryHistory, 
  createRouter, 
} from 'vue-router'
import type { RouteRecordRaw, Router } from 'vue-router'

// Ensure these paths match your actual file structure
import PersonalInfo from '@/components/page/PersonalInfo.vue'
import Plan from '@/components/page/Plan.vue'
import AddOns from '@/components/page/AddOns.vue'
import Summary from '@/components/page/Summary.vue'
import Confirmed from '@/components/page/Confirmed.vue'

// 1. Define your routes using the RouteRecordRaw type
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: PersonalInfo },
  { path: '/plan', component: Plan },
  { path: '/addons', component: AddOns },
  { path: '/summary', component: Summary },
  { path: '/confirmation', component: Confirmed }
]

// 2. Create the router instance
export const router: Router = createRouter({
  history: createMemoryHistory(),
  routes,
})