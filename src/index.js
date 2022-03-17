const express = require("express");

const app = express();
const userController = require("./controllers/user.controller")
const connect = require("./config/db");

app.use(express.json())
 


app.listen(4049,async()=>{
    await connect()

    console.log("Listening on port 4049")
})

