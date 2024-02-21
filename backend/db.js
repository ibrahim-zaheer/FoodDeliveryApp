// const mongoose = require('mongoose');


// const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/?retryWrites=true&w=majority"
// const mongoDB= ()=>{
// mongoose.connect(mongoURI,()=>{
//     console.log("Connected successfully");
// });
// }

// module.exports = mongoDB;

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
//     const fetched_data =  await mongoose.connection.db.collection('foodItems');
//     console.log("Connected successfully");
    
//     // we use {} to fetch all the data
//     fetched_data.find({}).toArray(function(err,data){
//  if(err){
//   console.log(err);
//  }
//  else{

//   global.food_items = data;
//   console.log(  global.food_items);
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
    
    const fetched_data = await mongoose.connection.db.collection('foodItems').find({}).toArray();
    global.food_items = fetched_data;
    console.log(global.food_items);
    const fetched_data_category = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
    global.food_categories = fetched_data_category;
    console.log(global.food_categories)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;



// const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://zaheeribrahim346:1234@cluster0.37wwjbq.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected successfully");

//     const fetched_data = await mongoose.connection.db.collection('foodItems');
//     fetched_data.find({}).toArray(async function(err,data){
//       const foodCategory = await mongoose.connection.db.collection('foodCategory');
//       foodCategory.find({}).toArray(function(err,catData){
       
//         if(err){
//           console.log(err);
//         }
//         else{
//           global.food_items  = data;
//         global.foodCategory = catData;
//         }
//       })
//     });

   
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// };

// module.exports = mongoDB;
