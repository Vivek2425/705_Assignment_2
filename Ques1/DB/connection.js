const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Assignment2")
.then((result) => { console.log("connection successfull..!!") })
.catch((error) => console.log(error));
module.exports = mongoose;