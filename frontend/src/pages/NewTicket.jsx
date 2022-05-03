//* -----------------------------------------------------------------------
//*                            New Ticket
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// ------------------------------------------------------------------------
// @components
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
// ------------------------------------------------------------------------
// @features
import { createTicket, reset } from '../features/tickets/ticketSlice'
//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------

function NewTicket() {
	// ---------------------------------------------
	//              <-- States -->
	// ---------------------------------------------
	const { user } = useSelector((state) => state.auth)
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.tickets
	)

	const { name, email } = user

	const [product, setProduct] = useState('iPhone')
	const [description, setDescription] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()
	// ---------------------------------------------
	//              <-- onFunctions -->
	// ---------------------------------------------
	useEffect(() => {
		if(isError){
			toast.error(message)
		}

		if (isSuccess) {
			dispatch(reset())
			navigate('/tickets')
		}
		
		dispatch(reset())
	}, [dispatch, isError, isSuccess, navigate, message])


	const onSubmit = (e) => {
		// prevents form default action
		e.preventDefault()
		// calls createTicket
		dispatch(createTicket({ product, description }))
	}

	// ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------
	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<BackButton url='/' />
			<section className='heading'>
				<h1>Create New Ticket</h1>
				<p>Please fill out the form bellow</p>
			</section>
			<section className='form'>
				<div className='form-group'>
					<label htmlFor='name'>Customer Name</label>
					<input type='text' className='form-control' value={name} disabled />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Customer Email</label>
					<input type='text' className='form-control' value={email} disabled />
				</div>

				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='product'>Product</label>
						<select
							name='product'
							id='product'
							value={product}
							onChange={(e) => setProduct(e.target.value)}
						>
							<option value='iPhone'>iPhone</option>
							<option value='Macbook Pro'>Macbook Pro</option>
							<option value='iMac'>iMac</option>
							<option value='iPad'>iPad</option>
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='description'>Description of the issue</label>
						<textarea
							name='description'
							id='description'
							className='form-control'
							placeholder='Description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
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

export default NewTicket

//* -----------------------------------------------------------------------
