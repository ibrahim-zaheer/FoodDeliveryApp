const mongoose  = require('mongoose');


const {Schema} = mongoose;

const UserSchema = new Schema({
name:{
    type: String,
    required: true
},
location:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now
},

})

// we use to create a collection named user in mongoDb and UserSchema is the schema it will follow
module.exports = mongoose.model('user',UserSchema)