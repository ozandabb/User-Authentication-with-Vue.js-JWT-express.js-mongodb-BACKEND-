const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const app = express();

const port = process.env.Port || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//exports Models
const UserModel = require('./Backend/Models/user.model');

//routes
app.post('/signup' , (req , res, next) =>{
    const newUser = new UserModel({
        email: req.body.email,
        name : req.body.name,
        password : bcrypt.hashSync(req.body.password, 10)
    })

    console.log("user data", newUser);
    
    

})

app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
});