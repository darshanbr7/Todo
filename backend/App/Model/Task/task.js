const mongoose=require("mongoose")
const Schema=mongoose.Schema
const task=new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:true
    },
    taskname:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

const taskList=mongoose.model("taskList",task)

module.exports=taskList