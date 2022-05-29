require("dotenv").config();

const express = require("express");
const cors= require("cors")
const path= require("path")

const fileUpload= require("express-fileupload")
const app = express();
const userRouter = require("./api/users/user.router");
const bodyParser = require("body-parser");


  



app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use (bodyParser.urlencoded({extended:false}))
app.use(express.static('./public'))
app.use(fileUpload())
app.use("/api/users", userRouter);



const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});