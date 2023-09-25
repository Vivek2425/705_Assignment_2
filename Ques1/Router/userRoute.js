const express = require("express");
const multer = require('multer');
const path = require("path");
const { validationResult, check } = require("express-validator");
const UserController = require("../Controller/UserController");
const router = express.Router();

var options = multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
        return cb("Invalid file format");
      }
      cb(null, "./public/images/");
    },
    filename: function (req, file, cb) {
      cb(null,  file.fieldname  + "_"+Date.now()+ path.extname(file.originalname) );
    },
  });
  var options1 = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("files  : ",file)
      if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
        return cb("Invalid file format");
      }
      cb(null, "./public/images/");
    },
    filename: function (req, file, cb) {
      cb(null,  file.fieldname  + "_"+Date.now()+ path.extname(file.originalname) );
    },
  });
  
const upload = multer({ storage: options });
const signatureupload = multer({ storage: options1 });
router.get("/",(req,res)=>{
    res.render('home')
})
router.get("/register",(req,res)=>{
    res.render('register');
})
// router.post("/registerData",upload.single('uProfile'),[
//     check("uname").notEmpty().withMessage("required field"),
//     check("uemail").isEmail().withMessage("Enter valid email"),
//     check("uPWD").isLength({min:6}).withMessage("Password has minimum 6 letter "),
// ],(req,res)=>{
//     const err = validationResult(req);
//     if(!err.isEmpty()){
//         return res.status(400).json({ errors: err.array() });
//     }
//     console.log("request occure")
//     var profile = req.file;
//     console.log(profile)
//     console.log(req.body)
//     res.send(req.body)
//     // res.render('register');
// })
router.post("/registerData",signatureupload.array('uProfile',5),[
  check("uname").notEmpty().withMessage("required field"),
  check("uemail").isEmail().withMessage("Enter valid email"),
  check("uPWD").isLength({min:6}).withMessage("Password has minimum 6 letter "),
],UserController.userRegister)
module.exports = router;