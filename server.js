const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const app = express();

const port = process.env.Port || 5000;

//DB config
const dbConfig = require("./Backend/Config/db.config");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//exports Models
const UserModel = require('./Backend/Models/user.model');

//routes for sign up
app.post('/signup' , (req , res, next) =>{
    const newUser = new UserModel({
        email: req.body.email,
        name : req.body.name,
        password : bcrypt.hashSync(req.body.password, 10)
    })

    console.log("user data", newUser);

    newUser.save(err =>{
        if (err){
            return res.status(400).json({
                title: 'error',
                error : 'email in use'
            })
        }
        return res.status(200).json({
            title: 'signup succefull'
        })
    })
})

//routes for login
app.post('/signup' , (req , res, next) =>{

    UserModel.findOne({ email: req.body.email} ,(err , user) =>{
        if (err) return res.status(500).json({
            title: 'Server error',
            error: err
        })
        if(!user){
            
        }
    })

    // const newUser = new UserModel({
    //     email: req.body.email,
    //     password : bcrypt.hashSync(req.body.password, 10)
    // })

    // console.log("user data", newUser);

    // newUser.save(err =>{
    //     if (err){
    //         return res.status(400).json({
    //             title: 'error',
    //             error : 'email in use'
    //         })
    //     }
    //     return res.status(200).json({
    //         title: 'signup succefull'
    //     })
    // })
})

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database now");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
});