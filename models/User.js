const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    userName: String,
    age: Number,
    email:String,
    createdOn: {type: Date, default : Date.now()},
    updatedOn: Date,
    buddy: mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        street: String,
        city: String,
        zipCode: Number
    }

})

module.exports= mongoose.model("User", userSchema)