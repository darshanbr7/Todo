const express=require("express")
const route=express.Router()
const authMiddleware=require("../App/Middleware/AuthMiddleware")

// import the Controller
const SignupController=require("../App/Controller/SignupController/SignupController")
const logincontroller=require("../App/Controller/LoginController/LoginController")


 route.get("/",SignupController.home)
 route.post("/user/login",logincontroller.login)

 // signup 
 route.post("/user/signup",authMiddleware.preregister,SignupController.register)
 route.get("/user/get/:name",SignupController.findbyname)
 route.put("/user/update/:name",SignupController.updatebyname)
 route.delete("/user/delete/:name",SignupController.deletebyname)
 
 route.get("/all/users",SignupController.list)
module.exports=route