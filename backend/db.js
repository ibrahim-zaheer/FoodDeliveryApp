// // const mongoose = require('mongoose');


// // const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/?retryWrites=true&w=majority"
// // const mongoDB= ()=>{
// // mongoose.connect(mongoURI,()=>{
// //     console.log("Connected successfully");
// // });
// // }

// // module.exports = mongoDB;

// const mongoose = require('mongoose');

// // const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/?retryWrites=true&w=majority";
// // for fetching data rom mongodb we need to write name of database before ?
// const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected successfully");
//     const fetched_data =  await mongoose.connection.db.collection('food_items');
//     // we use {} to fetch all the data
//     fetched_data.find({}).toArray(function(err,data){
//  if(err){
//   console.log(err);
//  }
//  else{
//   console.log(data);
//  }
//     })
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// };

// module.exports = mongoDB;



const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected successfully");

    const fetched_data = await mongoose.connection.db.collection('foodItems');
    const data = await fetched_data.find({}).toArray();

    console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
