const mongoose=require("mongoose")

const Connect=()=>{
   mongoose.connect("mongodb://localhost:27017/Todo")
            .then(()=>{
                console.log("Connected to database")
            })
            .catch((e)=>{
                console.log(e.message)
            })
}
module.exports=Connect