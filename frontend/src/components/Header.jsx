//* -----------------------------------------------------------------------
//*                           	Auth Service
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// ------------------------------------------------------------------------
// @icons
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
// @features
import { logout, reset } from '../features/auth/authSlice'

//* -----------------------------------------------------------------------
//								    Body
// ------------------------------------------------------------------------

function Header() {
	// ---------------------------------------------
	//              <-- States -->
	// ---------------------------------------------
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector((state) => state.auth)

	// ---------------------------------------------
	//              <-- onFunctions -->
	// ---------------------------------------------
	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}



	// ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------
	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>Support Desk</Link>
			</div>
			<ul>
				{user ? (
					<li>
						<button className='btn' onClick={onLogout}>
							<FaSignOutAlt /> Logout
						</button>
					</li>
				) : (
					<>
						<li>
							<Link to='/login'>
								<FaSignInAlt /> Login
							</Link>
						</li>
						<li>
							<Link to='/register'>
								<FaUser /> Register
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	)
}
//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------

export default Header

//* -----------------------------------------------------------------------
