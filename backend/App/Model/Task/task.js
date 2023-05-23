const mongoose=require("mongoose")
const Schema=mongoose.Schema
const task=new Schema({
   
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdate:{
        type:Date,
        default:Date.now
    },
    duedate:{
        type:Date,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Catagery'
    }
})

const taskList=mongoose.model("taskList",task)

module.exports=taskList