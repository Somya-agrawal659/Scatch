require("dotenv").config();
const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI || "mongodb+srv://Somya:Somya@interview-ai-cluster.6314tk0.mongodb.net/scatch?retryWrites=true&w=majority&appName=interview-ai-cluster";

mongoose.connect(dbUri)
.then(()=>console.log("Connected"))
.catch(err=>console.log(err));

// to run the server and connection then we will export the model
module.exports = mongoose.connection