const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:AKVgSWoG6pcnNOXV@yr-copmlate-project.gpfoqg9.mongodb.net/halley")
    console.log("Database connected")

}

module.exports = connectDB