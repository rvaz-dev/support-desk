//* -----------------------------------------------------------------------
//*                             Register
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
// ------------------------------------------------------------------------
// @icons
import { FaUser } from 'react-icons/fa'
// ------------------------------------------------------------------------
// @components
import Spinner from '../components/Spinner'
// ------------------------------------------------------------------------
// @features auth
import { register, reset } from '../features/auth/authSlice'

//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------

function Register() {
	// ---------------------------------------------
	//              <-- States -->
	// ---------------------------------------------
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

	const { user, isError, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	// ---------------------------------------------
	//              <-- onFunctions -->
	// ---------------------------------------------
    useEffect(() => {
        // handle error
        if (isError) {
            toast.error(message)
        }

        // redirect when logged in
        if (isSuccess || user) {
            navigate('/')
        }

        // reset state
        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])


	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		if (password !== password2) {
			toast.error('Passwords do not match!')
		} else {
			const userData = {
				name,
				email,
				password,
			}
			dispatch(register(userData))
		}
	}
	// ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Register 
				</h1>
				<p>Please create an account</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					{/* Name */}
					<div className='form-group'>
						<input
							type='text'
							id='name'
							className='form-control'
							name='name'
							value={name}
							onChange={onChange}
							placeholder='Enter your name'
							required
						/>
					</div>
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
					{/* Password Check */}
					<div className='form-group'>
						<input
							type='password'
							id='password2'
							className='form-control'
							name='password2'
							value={password2}
							onChange={onChange}
							placeholder='Confirm password'
							required
						/>
					</div>
					{/* Submit Buttom */}
					<div className='form-group'>
						<button className='btn btn-block'>Submit</button>
					</div>
				</form>
			</section>
		</>
	)
}
//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------

export default Register

//* -----------------------------------------------------------------------
