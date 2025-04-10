// const mongoose = require('mongoose');


// const connectDB = async () =>{
//     const MONGODB_URI=process.env.MONGODB_URI
//     try
//     {
//     const conn = await mongoose.connect(MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//     } 
//     catch (error) 
//     {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//     }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
