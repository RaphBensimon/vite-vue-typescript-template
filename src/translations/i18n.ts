import { createI18n } from 'vue-i18n'
import messages from './messages'
const i18n : any = createI18n({
	locale : 'en',
	messages
})
export default i18n