
require("dotenv").config()
const port=process.env.PORT|| 2000
const mongoose=require('mongoose')
const app=require('./app')

const DB= process.env.DB;

mongoose.connect(DB,{useNewUrlParser:true, useUnifiedTopology:true}).then(data=>{
    console.log("connected to db");
    app.listen(port,()=>{
        console.log(`server runing at PORT ${port}`);
    })

}).catch(err=>{
    console.log(err);
})