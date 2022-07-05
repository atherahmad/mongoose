const User = require("../models/User")
exports.createUser = async (req, res) => {

    const {
        userName,
        age,
        email,
        hobbies,
        address
    } = req.body

    // creating the new User



    // By using the create Method

/*     const user = await User.create({
        userName,
        age,
        email,
        hobbies,
        address
    })
    res.json(user) */

    // Saving the new User wit save method

      const user = new User({
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

/**
 * @method GET
 * @route /getusers
 * @access Public
 *  */  

exports.getUser = async (req, res) =>{

    const users = await User.find();  // will find every user in users collection
    res.status(200).json(users)
}