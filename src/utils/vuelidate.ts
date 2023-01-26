import {
	required, email, helpers, sameAs
} from '@vuelidate/validators'

const vRequired = helpers.withMessage('this field is required', required)

const vEmail = helpers.withMessage('this field must be an email', email)

const helperPassword = helpers
	.regex(/^(?=.*?[A-Z])(?=.*?[a-z ])(?=.*?[0-9])(?=.*?[#?!@$%[\]|²`_\\"()°~^=:{}><¨¤'£/.,§;µ+&*-]).{8,}$/)
const vPassword = () => helpers.withMessage('this field must be valid password', helperPassword)

const vSameAsPassword = (value: string) => helpers.withMessage('this field must be equal to password', sameAs(value))

export {
	vEmail,
	vRequired,
	vPassword,
	vSameAsPassword
}