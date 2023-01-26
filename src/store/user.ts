// calculation.ts
import { Module } from 'vuex'
import {
	IRootState, store
} from './index'
import SecureLS from 'secure-ls'
const ls = new SecureLS()
interface IUserState {
	username: string|null,
	address: string|null,
	token: string|null,
	role: string|null

}

const user: Module<IUserState,IRootState> = {
	namespaced : true,
	state       : {
		username : null,
		address  : null,
		token    : null,
		role     : null
	},
	getters   : { get  : state => state || ls.get('user_gescoin') },
	mutations : {
		set : (state, user) => {
			store.state.user = user
			ls.set('user', user)
		}
	}
}
export {
	user,
	IUserState
}