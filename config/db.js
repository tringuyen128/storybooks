const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //stop warning on console
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        console.log(`MongoDB connected: ${conn.connection.host}`)

    } catch (err) {
        //print error and stop the process with failure
        console.error(err),
        process.exit(1)
    }
}

module.exports = connectDB