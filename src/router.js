import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import Nfc from '@/views/Nfc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy
  },
  {
    path: '/nfc',
    name: 'NFC',
    component: Nfc
  },
]

const router = new VueRouter({
  mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
	},
  base: process.env.BASE_URL,
  routes
})

export default router
