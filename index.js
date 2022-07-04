const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

mongoose.connect(config.get('db.uri'),(err)=>console.log(`Mongo Atlas Connected`))

const PORT = config.get('app.port') || 4000;
const app = express();

app.get("/", (req, res)=>res.json("server running"))

app.listen(PORT, ()=>console.log(`Server listening on Port ${PORT}`))