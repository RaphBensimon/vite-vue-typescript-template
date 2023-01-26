import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {
	IUserState, user
} from './user'
import { apiPlugin } from '@/utils/https'
interface IRootState {
  user: IUserState
}
const store = createStore<IRootState>({
	modules : { user },
	plugins : [
		apiPlugin,
		createPersistedState({ key : 'user' })
	]
})

export {
	store, IRootState
}