//* -----------------------------------------------------------------------
//*                             USER MODEL
//* -----------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------
const mongoose = require('mongoose')
//* -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Model
// -----------------------------------------------------------------------

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name to the user'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email to the user'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password to the user'],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

// -----------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------
module.exports = mongoose.model('User', userSchema)
// -----------------------------------------------------------------------
