const taskList=require("../../Model/Task/task")
const taskController={}
taskController.add=(req,res)=>{
    const body=req.body
    new taskList(body).save()
                        .then((data)=>{
                            res.json(data)
                        })
                        .catch((error)=>{
                            res.json(error.message)
                        })    
}
taskController.getbycatagery=(req,res)=>{
    const id=req.params.id
    taskList.find({category:id})
            .then((data)=>{
                res.json(data)
            })
            .catch((error)=>{
                res.json(error.message)
            })
}
taskController.get=(req,res)=>{
    taskList.find({category:req.user._id})
            .then((data)=>{
                res.json(data)
            })
            .catch((error)=>{
                res.json(error)
            })
}




module.exports=taskController