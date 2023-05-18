const express=require("express")
const port=3009
const app=express()

app.use(express.json())
// connecting to the database
const DbConnect=require("./Config/DbConnection")
DbConnect()


// connecting to the router
const route=require("./Config/Router")
app.use(route)

var cors = require('cors')

app.use(cors()) 

const bodyParser=require("body-parser")
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(` server is running on the port ${ port}`)
})