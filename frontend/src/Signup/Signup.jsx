import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
   const[check,setCheck]= React.useState(false)
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-4 bg-info">
                        <div className="card-body">
                            <form >
                            <div className="form-group">
                                    <label > UserName</label>
                                    <input type="text"  className='form-control' />
                                </div>
                            <div className="form-group">
                                    <label > Email</label>
                                    <input type="text"  className='form-control' />
                                </div>
                                <div className="form-group">
                                    <label > Password</label>
                                    <input type="text"  className='form-control' />
                                </div>
                                <input type="checkbox"   onChange={(e)=>{
                                    setCheck(e.target.checked)
                                }} /> Pleace Accept terms&Condition
                                <center>
                                    <button className='btn btn-primary' disabled={!check}> Register</button>
                                </center>
                                <p>existing user ? Login <Link to={"/Login"} className='text-white'>Here</Link> </p>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup