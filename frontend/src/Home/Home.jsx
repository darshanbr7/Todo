import axios from 'axios'
import React from 'react'

const Home = () => {
const[value,setValue]=React.useState("")
const getData=async ()=>{
  try{
   await axios.get(`http:localhost:3009/`)
              .then((info)=>{
                setValue(info)
              })
              .catch((e)=>{
                console.log(e)
              })
              

  }catch(e){
    console.log(e)
  }
}
 
  return (
    <div> <pre>
       <button onClick={getData}> Data</button>
      {value}
      </pre>
      </div>
  )
}

export default Home