//* -----------------------------------------------------------------------
//*                             Register
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
// ------------------------------------------------------------------------
// @icons
import { FaSignInAlt } from 'react-icons/fa'
// ------------------------------------------------------------------------
// @features auth
import { login } from '../features/auth/authSlice'

//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------

function Login() {
	// ---------------------------------------------
	//              <-- States -->
	// ---------------------------------------------
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { name, email, password, password2 } = formData

	const dispatch = useDispatch()

	const { user, isError, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	// ---------------------------------------------
	//              <-- onFunctions -->
	// ---------------------------------------------

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
            email,
            password
        }
        dispatch(login(userData))
	}
	// ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------
	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt /> Login
				</h1>
				<p>Please log in to get support</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					{/* Email */}
					<div className='form-group'>
						<input
							type='email'
							id='email'
							className='form-control'
							name='email'
							value={email}
							onChange={onChange}
							placeholder='Enter your email'
							required
						/>
					</div>
					{/* Password */}
					<div className='form-group'>
						<input
							type='password'
							id='password'
							className='form-control'
							name='password'
							value={password}
							onChange={onChange}
							placeholder='Enter your password'
							required
						/>
					</div>
					{/* Submit Buttom */}
					<div className='form-group'>
						<button className='btn btn-block'>Login</button>
					</div>
				</form>
			</section>
		</>
	)
}
//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------

export default Login

//* -----------------------------------------------------------------------
