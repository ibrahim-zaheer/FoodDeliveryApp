// const mongoose = require('mongoose');


// const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/?retryWrites=true&w=majority"
// const mongoDB= ()=>{
// mongoose.connect(mongoURI,()=>{
//     console.log("Connected successfully");
// });
// }

// module.exports = mongoDB;

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
