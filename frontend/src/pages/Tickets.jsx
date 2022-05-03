//* -----------------------------------------------------------------------
//*                            New Ticket
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// ------------------------------------------------------------------------
// @components
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'
// ------------------------------------------------------------------------
// @features
import { getTickets, reset } from '../features/tickets/ticketSlice'
//* -----------------------------------------------------------------------
//								Function
// ------------------------------------------------------------------------

function Tickets() {
	// ---------------------------------------------
	//              <-- States -->
	// ---------------------------------------------
	const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets)

	const dispatch = useDispatch()

	// ---------------------------------------------
	//              <-- onFunctions -->
	// ---------------------------------------------
	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getTickets())
	}, [dispatch])

	// ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------
	if (isLoading) {
		return <Spinner />
	}

    return <>
        <BackButton url='/' />
        <h1>Tickets</h1>
        <div className='tickets'>
            <div className='ticket-headings'>
                <div>Date</div>
                <div>Product</div>
                <div>Status</div>
                <div></div>
            </div>
            {tickets.map((ticket) => (
                <TicketItem key={ticket._id} ticket={ticket} />
            ))}
        </div>
    </>
}
//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------

export default Tickets

//* -----------------------------------------------------------------------
