//* -----------------------------------------------------------------------
//*                           	Auth Service
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import axios from 'axios'

//* -----------------------------------------------------------------------
//								    Body
// ------------------------------------------------------------------------
// @API
// -----------------------------------------------------------------------
const API_URL = '/api/users/'

// ------------------------------------------------------------------------
// @desc register new user
// -----------------------------------------------------------------------
const register = async (userData) => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}
// ------------------------------------------------------------------------
// @desc login a user
// -----------------------------------------------------------------------
const login = async (userData) => {
	const response = await axios.post(API_URL + 'login', userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

// ------------------------------------------------------------------------
// @desc logout current user
// -----------------------------------------------------------------------
const logout = async () => localStorage.removeItem('user')

//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------
const authService = {
	register,
	login,
    logout,
}
export default authService

//* -----------------------------------------------------------------------
