import mongoose from "mongoose";

export async function connectDb(){
    try {
        mongoose.connect(process.env.MONGO_URI)//connect to db
        const connection = mongoose.connection;
        
        connection.on('connected', () => console.log("MongoDB connected"))//error handling
        connection.on('error', (err) => {
            console.log("Make sure MongoDB is running" + err)
            process.exit()
        })


    } catch (error) {
        console.log("Something Went Wrong...");
        console.error(error)
    }
}