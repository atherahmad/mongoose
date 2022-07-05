const express = require("express");
const config = require("config");
const userRouter = require("./routes/userRouter")

const connect = require("./helper/dbConnect")

const PORT = config.get('app.port') || 4000;
const app = express();

// Connecting to db
    connect();



app.use(express.json());

app.use("/user", userRouter)

app.listen(PORT, ()=>console.log(`Server listening on Port ${PORT}`))