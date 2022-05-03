// Here will be the ENTRY point to the server
//* -----------------------------------------------------------------------
//*                            SERVER
//* -----------------------------------------------------------------------
//                             Imports
// ------------------------------------------------------------------------
const express = require('express')
const colors = require('colors')
const app = express()
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
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Support Desk API!'})
})
// @user routes
app.use('/api/users', require('./routes/userRoutes'))
// @ticket routes
app.use('/api/tickets', require('./routes/ticketRoutes'))

// -----------------------------------------------------------------------
// error handling
app.use(errorHandler)

// -----------------------------------------------------------------------
// Listen to Server on port 3000
// -----------------------------------------------------------------------
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))