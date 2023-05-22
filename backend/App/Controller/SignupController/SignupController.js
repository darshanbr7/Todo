const UserDB=require("../../Model/Signup/Signup")


const SignupController={}
SignupController.home=(req,res)=>{
    res.json("Welcome to HomePage")
}
SignupController.list=(req,res)=>{
    UserDB.find()
            .then((data)=>{
                res.json(data)
            })
            .catch((e)=>{
                res.json(e.message)
            })
}
SignupController.register=(req,res)=>{
    const data=req.info
    const user=new UserDB(data)
       user.save()
           .then((user)=>{
            res.json(user)
           })
           .catch((e)=>{
            res.json(e)
           })
}
SignupController.findbyname=(req,res)=>{
    const name=req.params.name
    UserDB.findOne({username:name})
            .then((user)=>{
                res.json(user)
            })
            .catch((e)=>{
                res.json(e.message)
            })
}
SignupController.updatebyname=(req,res)=>{
    const body=req.body
    const name=req.params.name
    UserDB.findOneAndUpdate({username:name},body,{new:true,runValidators:true})
          .then((user)=>{
            res.json(user)
          })
          .catch((err)=>{
            res.json(err.message)
          })
}
SignupController.deletebyname=(req,res)=>{
    const name=req.params.name
    UserDB.findOneAndDelete({username:name})
            .then((user)=>{
                res.json(user)
            })
            .catch((error)=>{
                res.json(e.message)
            })
}

module.exports=SignupController