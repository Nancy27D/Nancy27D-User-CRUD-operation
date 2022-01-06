const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    mobile:Number,
    work:String,
    address:String,
    desc:String
  
})

const User= new mongoose.model("user",userSchema)
module.exports=User