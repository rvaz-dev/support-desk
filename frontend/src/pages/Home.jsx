//* -----------------------------------------------------------------------
//*                            New Ticket
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { Link } from 'react-router-dom'
// ------------------------------------------------------------------------
// @icons
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------
function Home() {
    // ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------
	return (
		<>
			<section className='heading'>
                <h1>What do you need help with?</h1>
                <p>Please choose from an option bellow</p>
            </section>
            
            <Link to='/new-ticket' className='btn btn-reverse btn-block' >
                <FaQuestionCircle /> Create New Ticket
            </Link>
            <Link to='/tickets' className='btn  btn-block' >
                <FaTicketAlt /> View My Tickets
            </Link>

		</>
	)
}

//* -----------------------------------------------------------------------
//								Export
// ----------------------------------------------------------------------

export default Home

//* ---------------------------------------------------------------------