
const { validationResult, check } = require("express-validator");
const UserModel = require("../Model/UserModel");

module.exports = {
    "userRegister" : (req,res)=>{
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({ errors: err.array() });
        }
        var profile = req.files;
        var profileArray = [];
        profile.forEach(profile => {
            profileArray.push(profile.filename)
        });
        var User = new UserModel({name : req.body.uname,email : req.body.uemail,password : req.body.uPWD,profile:profileArray})
        User.save().then((user)=>{res.status(200).send(user)}).catch((err)=>res.status(500).send(err))
      }
}