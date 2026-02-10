 const mongoose = require('mongoose');


 async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:AKVgSWoG6pcnNOXV@yr-copmlate-project.gpfoqg9.mongodb.net/project-02")
    console.log("Database connected")
 }

 module.exports = connectDB