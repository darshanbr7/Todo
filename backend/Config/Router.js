const express=require("express")
const route=express.Router()

// import the Controller
const SignupController=require("../App/Controller/SignupController")

 route.get("/",SignupController.home)
 route.post("/signup",SignupController.register)
 route.get("/all/users",SignupController.list)
module.exports=route