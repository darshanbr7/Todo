const express=require("express")
const port=3000
const app=express()

app.use(express.json())
// connecting to the database
const DbConnect=require("./Config/DbConnection")
DbConnect()


// connecting to the router
const route=require("./Config/Router")
app.use(route)

app.listen(port,()=>{
    console.log(` server is running on the port ${ port}`)
})