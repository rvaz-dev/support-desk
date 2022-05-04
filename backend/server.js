// Here will be the ENTRY point to the server
//* -----------------------------------------------------------------------
//*                            SERVER
//* -----------------------------------------------------------------------
//                             Imports
// ------------------------------------------------------------------------
const express = require('express')
const colors = require('colors')
const app = express()
const path = require('path')
require('dotenv').config()
//* -----------------------------------------------------------------------
const { connectDB } = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000
//* -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Connect to Database
// -----------------------------------------------------------------------
connectDB()

// -----------------------------------------------------------------------
// body-parser setup
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// -----------------------------------------------------------------------
// routes
// @user routes
app.use('/api/users', require('./routes/userRoutes'))
// @ticket routes
app.use('/api/tickets', require('./routes/ticketRoutes'))

// -----------------------------------------------------------------------
// serve frontend
if (process.env.NODE_ENV == 'production') {
	// set build folder as static
	app.use(express.static(path.join(__dirname, '../frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(__dirname, '../', 'frontend,', 'build', 'index.html')
	)
} else {
	app.get('/', (req, res) => {
		res.status(200).json({ message: 'Welcome to the Support Desk API!' })
	})
}
// -----------------------------------------------------------------------
// error handling
app.use(errorHandler)

// -----------------------------------------------------------------------
// Listen to Server on port 3000
// -----------------------------------------------------------------------
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
