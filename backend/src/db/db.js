const mongoose = require("mongoose");

async function connectDB() {
   try{
       await mongoose.connect(process.env.MONGO_URL)
console.log('Connected To Db');

    }catch(err){
 console.log('Error in Db connection',err);
    }
}

module.exports = connectDB;