import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('open', () => {
            console.log('MongoDB connection established successfully')
        })

        connection.on('error', (error) => {
            console.log(error)
            process.exit()
        })

    } catch (error) {
        console.log(error)
    }
}