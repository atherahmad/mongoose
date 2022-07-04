const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const userModel = require("./models/User")

// Connection to db
mongoose.connect(config.get('db.uri'),(err)=>{

    if(err) console.log(`Error Occured ${err}`)

        else console.log(`Mongo Atlas Connected`)
    })

const PORT = config.get('app.port') || 4000;
const app = express();

const createUser = async (req, res) => {

    const {
        userName,
        age,
        email,
        hobbies,
        address
    } = req.body

    // creating the new User



    // By using the create Method

/*     const user = await userModel.create({
        userName,
        age,
        email,
        hobbies,
        address
    })
    res.json(user) */

    // Saving the new User wit save method

      const user = new userModel({
        userName,
        age,
        email,
        hobbies,
        address
    }) 
    
      user.save((err, doc)=>{
        if(err) {
            console.log(`Error occurred while saving the user ${err}`)
            res.json({message:err})
        }
        else res.status(201).json({message:doc})
     }) 
}

app.use(express.json());

app.post("/", createUser)

app.listen(PORT, ()=>console.log(`Server listening on Port ${PORT}`))