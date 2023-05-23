const express=require("express")
const route=express.Router()
const authMiddleware=require("../App/Middleware/AuthMiddleware")

// import the Controller
const UserController=require("../App/Controller/UserController/userController")
const logincontroller=require("../App/Controller/LoginController/LoginController")
const taskController=require("../App/Controller/TaskController/taskcontroller")
const categorycontroller = require("../App/Controller/CatagoryController/catagarycontroller")



 route.get("/",UserController.home)
 route.post("/user/login",logincontroller.login)
 route.get("/all/users",UserController.list)

 // signup 
 route.post("/user/signup",authMiddleware.preregister,UserController.register)
 route.get("/user/get/:name",UserController.findbyname)
 route.put("/user/update/:name",UserController.updatebyname)
 route.delete("/user/delete/:name",UserController.deletebyname)

 //tasks
 route.post("/user/addtask",authMiddleware.auth,taskController.add)
 route.get("/get/tasks/catagory/:id",authMiddleware.auth,taskController.getbycatagery)
 route.get("/get/user/tasks",authMiddleware.auth,taskController.get)

 //catagory
 route.post("/add/catagory",authMiddleware.auth,categorycontroller.add)
 route.get("/get/catagories",authMiddleware.auth,categorycontroller.list)
 route.get("/get/categories/:id",authMiddleware.auth,categorycontroller.show)
 
 
 
module.exports=route