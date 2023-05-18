const UserDB=require("../Model/Signup")
const bcrypt=require("bcrypt")

const SignupController={}
SignupController.home=(req,res)=>{
    res.json("Welcome to HomePage")
}
SignupController.register=(req,res)=>{
    const body=req.body
    const user=new UserDB(body)
    bcrypt.genSalt()
            .then((salt)=>{
                bcrypt.hash(user.password,salt)
                       .then((encrypt)=>{
                        user.password=encrypt
                        user.save()
                            .then((user)=>{
                                res.json(user)
                            })
                            .catch((e)=>{
                                res.json(e.message)
                            })
                       })
                       .catch((e)=>{
                        res.json(e.message)
                       })
            })
            .catch((e)=>{
                res.json(e.message)
            })

}

module.exports=SignupController