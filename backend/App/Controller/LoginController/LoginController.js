const UserDB=require("../../Model/Signup/Signup")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const logincontroller={}

logincontroller.login=(req,res)=>{
    const body=req.body
    UserDB.findOne({email:body.email})
          .then((user)=>{
            if(!user){
              res.json({errors : 'invalid email or password'})
            }
             
            bcrypt.compare(body.password,user.password)
                  .then((matched)=>{
                      if(matched){
                        const token={
                          _id:user._id,
                          username:user.username,
                          email:user.email
                        }
                          const genToken=  jwt.sign(token,"darshan123",{expiresIn:"2d"})
    
                          res.json({
                            token: ` ${genToken}`
                          })
                       
                      }else{
                        res.json({
                          error:"password not matched"
                        })
                      }
                   
                  })
                  .catch(()=>{
                    res.json({
                      err:"Password not matched"
                    })
                  })

          })
          
}

module.exports=logincontroller