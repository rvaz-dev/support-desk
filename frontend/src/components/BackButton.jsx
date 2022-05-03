//*                            New Ticket
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { Link } from 'react-router-dom'
// ------------------------------------------------------------------------
// @icons
import { FaArrowCircleLeft } from 'react-icons/fa'

//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------


const BackButton = ({ url }) => {
	return (
		<div>
			<Link to={url} className='btn btn-reverse btn-back'>
				<FaArrowCircleLeft /> Back
			</Link>
		</div>
	)
}

export default BackButton
