
const bcrypt=require("bcrypt")
const { json } = require("body-parser")
const jwt=require("jsonwebtoken")
const authMiddleware={}

authMiddleware.preregister=(req,res,next)=>{
    const body=req.body
    bcrypt.genSalt()
          .then((salt)=>{
             bcrypt.hash(body.password,salt)
                    .then((encrypt)=>{
                        body.password=encrypt
                        req.info=body
                        next()
                    })
                    .catch((e)=>{
                        res.json(e)
                    })
          })
          .catch((e)=>{
            res.json(e)
          })


}

authMiddleware.auth=(req,res,next)=>{
   
    
    let token = req.headers.authorization;
   // const token = req.header('Authorization')
    
    console.log(typeof(token))
    if(!token){
     res.status(400).json({error:" Access Denied /unauthorized request"})
    }
    const tokendata=jwt.verify(token,"darshan123")
    if(tokendata){
       req.user=tokendata
       next()
    }else{
        res.status(400).json({error:"un Authorized request"})
    }
}
module.exports=authMiddleware