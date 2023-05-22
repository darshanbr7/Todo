const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const Schema=mongoose.Schema
const User=new Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"UserName is Needed"],

    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is Needed"],
        validate:{
            validator:(value)=>{
                return isEmail(value)
            },
            message:()=>{
                return "Enter Proper Format of Email"
            }
        }
    },
    password:{
        type:String,
        required:[true,"password is Needed"]
    }
})

 const UserDB=mongoose.model("UserDB",User)

 module.exports=UserDB