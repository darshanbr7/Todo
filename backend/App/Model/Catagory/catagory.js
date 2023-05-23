const mongoose=require("mongoose")
const Schema=mongoose.Schema
const catagarytypes=new Schema({
    catagory:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
})

const Catagery=mongoose.model("Catagery",catagarytypes)
module.exports=Catagery