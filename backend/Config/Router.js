const express=require("express")
const route=express.Router()
const authMiddleware=require("../App/Middleware/AuthMiddleware")

// import the Controller
const SignupController=require("../App/Controller/SignupController/SignupController")
const logincontroller=require("../App/Controller/LoginController/LoginController")
const taskController=require("../App/Controller/TaskController/taskcontroller")


 route.get("/",SignupController.home)
 route.post("/user/login",logincontroller.login)
 route.get("/all/users",SignupController.list)

 // signup 
 route.post("/user/signup",authMiddleware.preregister,SignupController.register)
 route.get("/user/get/:name",SignupController.findbyname)
 route.put("/user/update/:name",SignupController.updatebyname)
 route.delete("/user/delete/:name",SignupController.deletebyname)

 route.post("/user/addtask",authMiddleware.auth,taskController.add)
 route.get("/user/tasks",authMiddleware.auth,taskController.gettask)
 
 
module.exports=route