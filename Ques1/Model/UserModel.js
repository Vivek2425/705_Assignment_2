const mongoose  = require("../DB/connection");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    profile : [String]
})

const UserModel = mongoose.model("userTB",userSchema,"userTB");
module.exports = UserModel;