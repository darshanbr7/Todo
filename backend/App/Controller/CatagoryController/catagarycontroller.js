const Category=require("../../Model/Catagory/catagory")
const categorycontroller={}
categorycontroller.add=(req,res)=>{
    const body=req.body
    const catagery=new Category(body)
    catagery.userId=req.user._id
    catagery.save()
            .then((cat)=>{
                res.json(cat)
            })
            .catch((error)=>{
                res.json(error.message)
            })
}
categorycontroller.list=(req,res)=>{
            Category.find({userId:req.user._id})
                    .then((data)=>{
                        res.json(data)
                    })
                    .catch((error)=>{
                        res.json(error)
                    })
}
categorycontroller.show=(req,res)=>{
    const id=req.params.id
    Category.find({_id:id,userId:req.user._id})
            .then((data)=>{
                res.json(data)
            })
            .catch((error)=>{
                res.json(error.message)
            })
}



module.exports=categorycontroller