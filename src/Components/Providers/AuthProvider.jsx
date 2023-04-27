import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
 export const AuthContext = createContext(null);

 const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user,setuser]=useState(null);
const [loading,setloading]=useState(true);

const createUser =(email,password)=>{
    setloading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInuser =(email,password)=>{
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logout = ()=>{
    return signOut(auth);
}
//Observer user auth state
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentuser=>{
        setuser(currentuser);
        setloading(false);
     })
     //stop observing while unmounting
     return ()=>{
        return unsubscribe();
     }
},[])

    const authinfo={
        user,
        loading,
        createUser,
        signInuser,
        logout,

    }
    

  return (
    <AuthContext.Provider value={authinfo}>
{
    children
}
    </AuthContext.Provider>
  )
}

export default AuthProvider