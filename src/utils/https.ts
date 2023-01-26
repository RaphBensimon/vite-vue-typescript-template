
import axios from 'axios'
import { IRootState } from '../store/index'
import { Store } from 'vuex'
import router from '../router/index'

const hostName = import.meta.env.VUE_APP_API_HOST

export const http = axios.create({ 'baseURL' : `${hostName}/api` })
http.interceptors.response.use(function (res: any) {
	return res
}, function (err: any) {
	if(err.response.status === 401) {
		router.push('/login')
	}
	return Promise.reject(err)
})

export function apiPlugin(store: Store<IRootState>) {
	store.watch(
		state => state.user,
		user => {
			if (user && user.token) {
				http.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
			}
		}
	)
}