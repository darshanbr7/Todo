const taskList=require("../../Model/Task/task")
const taskController={}
taskController.add=(req,res)=>{
    const body=req.body
    body.user_id=req.user._id
    new taskList(body).save()
                        .then((data)=>{
                            res.json(data)
                        })
                        .catch((error)=>{
                            res.json(error.message)
                        })    
}

taskController.gettask=(req,res)=>{
    const id=req.user._id
    taskList.find({user_id:id})
            .then((data)=>{
                res.json(data)
            })
            .catch((error)=>{
                res.json(error)
            })
}



module.exports=taskController