import {
	createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext
} from 'vue-router'
import routes from './routes'
import i18n from '@/translations/i18n'
import { store } from '@/store/index'
const router = createRouter({
	history : createWebHistory(),
	routes
})
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	document.title = i18n.global.t(to.meta.title) + ' | App'
	const user = store.getters['user/get']
	const isGuestPage = to.meta.guest
	if(isGuestPage) {
		store.commit('user/set', null)
		return next()
	} else if(user) {
		return next()
	} else {
		return next('/login')
	}
})
export default router