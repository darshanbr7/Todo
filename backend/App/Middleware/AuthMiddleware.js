
const bcrypt=require("bcrypt")
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
module.exports=authMiddleware