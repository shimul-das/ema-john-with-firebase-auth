import React, { useContext, useState } from 'react'
import "./login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from '../Providers/AuthProvider'

const Login = () => {
  const [show,setshow]=useState(false);
  const [error,seterror]=useState(null);
  const {signInuser}= useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()
  console.log(location);
  const from = location.state?.from?.pathname || "/"
  const handlesignin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    seterror('')
    signInuser(email,password)
    .then(result=>{
      const loggeduser=result.user;
      console.log(loggeduser)
      form.reset()
      navigate(from, {replace:true})
    })
    .catch(error=>{
      seterror(error.message);
    })
  }
  return (
    <div className='form-container'>
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handlesignin}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name='email' required/>
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type={show? "text" : "password"} name='password' required/>
            <p onClick={()=>setshow(!show)}><small>
              {
                show ? <span>Hide password</span> : <span>show password</span>
              }
              </small></p>
          </div>

          <div className="form-control">
            <input className='btn-submit' type="submit" value="Login" name='submit' required/>
          </div>
          <p className='alternative'>Are You new in ema john? <span className='alternative-Link'><Link  to="/signup">Create a New Account</Link></span></p>
          <p className='text-error'>{error}</p>
        </form>
    </div>
  )
}

export default Login