//* -----------------------------------------------------------------------
//* Database Configuration / Connection file
//* -----------------------------------------------------------------------
//         <--     Imports      -->
// -----------------------------------------------------------------------
const mongoose = require('mongoose')
//* -----------------------------------------------------------------------

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}