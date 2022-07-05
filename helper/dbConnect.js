const mongoose = require("mongoose")
const config = require("config")

// Connection to db

const connect = () => {

/*     mongoose.connect(config.get('db.uri'),(err)=>{
        
        if(err) console.log(`Error Occured ${err}`)
        
        else console.log(`Mongo Atlas Connected`)
    }) */
    
    
    /* Connection to db with try catch , options and self invoked function */
    
    (()=>{
        try{
            mongoose.connect(config.get('db.uri'),{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                /* useFindAndModify: false */
            },
            console.log("connected to DB"))
        } 
        catch(err){
            console.log(err.message)
        }
    })()
}

module.exports = connect;
    