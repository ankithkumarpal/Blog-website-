import './Login.css'
import React, { useContext ,useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'; 
import axios from 'axios';

export default function Login(){
      const userRef= useRef();
      const passwordRef=useRef();

      const { dispatch,isFetching}= useContext(Context)
      const [e,seterror]=useState()
    const handleLogin = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
                  const res= await  axios.post('/api/auth/login',{
                      username:userRef.current.value,
                      password:passwordRef.current.value
                     
                  })
                //  console.log(res.data)
                  dispatch({type:"LOGIN_SUCCESS", payload:res.data});  
        }
        catch(e){
            dispatch({type:"LOGIN_FAILURE"});
            seterror(true)
        }
    //    console.log(user)
    }
    return(
        <>
           <div className="login">
                <form className="loginform"  onSubmit={handleLogin}>
                      <h2 className="h2">LOGIN</h2>
                      <div className="logininput">
                            <input type="text" placeholder="USERNAME" ref={userRef}/>
                            <input type="password" placeholder="PASSWORD" ref={passwordRef} />
                      </div>
                      <div> <button type='submit' className="loginbtn">LOGIN</button></div>
                      <Link to={"/register"} className="link">
                      <div className="registerbtn">REGISTERATION</div>
                      </Link>
                      {e&& <span  style={{color:"red"}}> something went wrong </span>}
                     
                </form>
           </div>
        </>
    )
}