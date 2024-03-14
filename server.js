const express = require("express");
const dotenv = require("dotenv").config();



const app = express();
const port = process.env.PORT||5000;

app.use(express.json());   //middleware for create data controllers
app.use("/api/contacts",require("./routes/contactrouter"));

app.listen(port,()=>{
    console.log(`Server started ${port}`)

})