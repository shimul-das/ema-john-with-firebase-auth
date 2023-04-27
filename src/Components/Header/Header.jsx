import React, { useContext } from 'react'
import './header.css'
import logo from '../images/Logo.svg'
import AuthProvider, { AuthContext } from '../Providers/AuthProvider'

const Header = () => {
  const {user,logout} = useContext(AuthContext);
  console.log(user)
  const handlelogout =()=>{
    logout()
    .then(result =>{

    })
    .catch(error => console.error(error))

  }
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div className='h_link'>
        <a href='/'>Shop</a>
        <a href='/orders'>Orders</a>
        <a href='/inventory'>Inventory</a>
        <a href='/login'>Login</a>
        <a href='/signup'>SignUp</a>
        {
          user && <span className='text-white'>Welcome {user.email}<button onClick={handlelogout}>Sign Out</button></span>
        }
        </div>
        
    </nav>
  )
}

export default Header