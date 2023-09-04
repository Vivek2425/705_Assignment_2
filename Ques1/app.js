const express = require('express');
const userRouter = require('./Router/userRoute');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine","ejs")
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/",userRouter)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
