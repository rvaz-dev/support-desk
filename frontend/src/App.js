// Here will be the ENTRY point to the App
//* -----------------------------------------------------------------------
//*                           		APP
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// ------------------------------------------------------------------------
// @pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
// ------------------------------------------------------------------------
// @components
import Header from './components/Header'

//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}

//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------

export default App

//* -----------------------------------------------------------------------