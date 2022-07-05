const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({

    street: String,
    city: String

})

const userSchema = new mongoose.Schema({

    userName: String,
    age: {
        type:Number,
        max:45,
        validate(value){
            if(value < 18) throw new Error("Sorry your age is less than 18")
        }
    },
    email:{
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
        validate:{
            validator: v => v.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ),
            message: props => `${props.value} is not a valid email`
        }

    },
    createdOn: {
        type: Date, 
        default : Date.now()
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    buddy: mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address: addressSchema

})

userSchema.methods.sayHi = function () {

    console.log("hi called", this.age)
}

module.exports= mongoose.model("User", userSchema)