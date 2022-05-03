//* -----------------------------------------------------------------------
//*                         useAuthStatus Hook
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//* -----------------------------------------------------------------------
//								Hook
// ------------------------------------------------------------------------
export const useAuthStatus = () => {
    // ---------------------------------------------
	//              <-- States -->
	// ---------------------------------------------
	const [loggedIn, setLoggedIn] = useState(false)
	const [checkingStatus, setCheckingStatus] = useState(true)

    const { user } = useSelector((state) => state.auth)

    // ---------------------------------------------
	//              <-- onFunctions -->
	// ---------------------------------------------
    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    }, [user])

    // ---------------------------------------------
	//              <-- return -->
	// ---------------------------------------------
    return { loggedIn, checkingStatus }
}
//* -----------------------------------------------------------------------