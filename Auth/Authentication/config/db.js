const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const db= await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB connected successfully");
        console.log(`Host: ${db.connection.host}`);
        console.log(`Database: ${db.connection.name}`)
    }
    catch(error){
        console.log("MongoDB connnection falied");
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;