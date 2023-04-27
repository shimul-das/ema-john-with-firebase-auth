import React, { useContext, useState } from 'react'
import "./signup.css"
import { Link, createRoutesFromElements } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
  const [error,seterror]=useState('');
  const {createUser}=useContext(AuthContext);
  const handlesignup = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.c_password.value;
    console.log(email,password,confirm_password);
    seterror('');
    if(password !== confirm_password ){
      seterror('Your Password did not match')
      return
    }
    else if(password.length<6){
      seterror('Password Must be six character or longer');
      return
    }
    createUser(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error);
      seterror(error.message);
    })

    }
  return (
    <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handlesignup}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name='email' required/>
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type="password" name='password' required/>
          </div>
          <div className="form-control">
            <label htmlFor="">Confirm Password</label>
            <input type="password" name='c_password' required/>
          </div>
          <div className="form-control">
            <input className='btn-submit' type="submit" value="Sign Up" name='submit' required/>
          </div>
          <p className='alternative'>Already have an account ? <span className='alternative-Link'><Link  to="/login">Login</Link></span></p>
          <p className='text-error'>{error}</p>
        </form>
    </div>
  )
}


export default SignUp