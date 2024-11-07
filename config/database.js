import mongoose from "mongoose"

let connected = false

const connectDB = async () => {
	mongoose.set("strictQuery", true)

	//if the database is already connect, don't connect again
	if (connected) {
		console.log("mongodb is already connected")
		return
	}
	try {
		console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);
		await mongoose.connect(process.env.MONGODB_URI)
		connected = true
		console.log("mongo db connected")
	} catch (error) {
		console.log("error", error)
	}
}

export default connectDB
