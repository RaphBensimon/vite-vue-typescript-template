import { RouteRecordRaw } from 'vue-router'
import { store } from '@/store/index'
const routes: Readonly<RouteRecordRaw>[] = [
	{
		path     : '/',
		redirect : () => {
			const user = store.getters['user/getUser']
			if(user) return '/home'
			else return '/home'
		}
	},
	{
		path     : '/:pathMatch(.*)*',
		redirect : '/'
	},
	{
		path       : '/home',
		name      : 'home',
		component : () => import('@/views/Home.vue'),
		meta      : { title       : 'home' }
	}
]
export default routes