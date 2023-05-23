const User=require("../../Model/User/user")


const UserController={}
UserController.home=(req,res)=>{
    res.json("Welcome to HomePage")
}
UserController.list=(req,res)=>{
    User.find()
            .then((data)=>{
                res.json(data)
            })
            .catch((e)=>{
                res.json(e.message)
            })
}
UserController.register=(req,res)=>{
    const data=req.info
    const user=new User(data)
       user.save()
           .then((user)=>{
            res.json(user)
           })
           .catch((e)=>{
            res.json(e)
           })
}
UserController.findbyname=(req,res)=>{
    const name=req.params.name
    User.findOne({username:name})
            .then((user)=>{
                res.json(user)
            })
            .catch((e)=>{
                res.json(e.message)
            })
}
UserController.updatebyname=(req,res)=>{
    const body=req.body
    const name=req.params.name
    User.findOneAndUpdate({username:name},body,{new:true,runValidators:true})
          .then((user)=>{
            res.json(user)
          })
          .catch((err)=>{
            res.json(err.message)
          })
}
UserController.deletebyname=(req,res)=>{
    const name=req.params.name
    User.findOneAndDelete({username:name})
            .then((user)=>{
                res.json(user)
            })
            .catch((error)=>{
                res.json(error.message)
            })
}

module.exports=UserController