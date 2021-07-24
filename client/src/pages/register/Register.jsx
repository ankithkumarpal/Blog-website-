import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register(){
    const [username,setUsername]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState('');

    const handleSubmit= async (e)=>{
      e.preventDefault();
      setError(false)
      try{
      const response= await  axios.post('/api/auth/register',{
          username,
          email,
          password
      })
        if(response.data){
            window.location.replace("/login")
        }
    }catch(error){
        setError(true);
    }
      
    }
    
    return(
        <>
           <div className="login">
                <form className="loginform" onSubmit={handleSubmit}>
                      <h2>Register</h2>
                      <div className="logininput">
                            <input type="text" placeholder="USERNAME"  onChange={(e)=>setUsername(e.target.value)}/>
                            <input type="email" placeholder="email"  onChange={(e)=>setEmail(e.target.value)}/>
                            <input type="password" placeholder="PASSWORD"  onChange={(e)=>setPassword(e.target.value)}/>
                      </div>
                      {/* <div className="loginbtn registerregisterbtn" type="submit">Register</div> */}
                      <button className="loginbtn registerregisterbtn" type="submit"> Register</button>
                     
                     <Link to={'/login'} className="link">
                     <div className="registerbtn ">Login</div>
                     </Link>
                   
                    {error&& <span  style={{color:"red"}}> something went wrong </span>}
                    
                     
                </form>
           </div>
        </>
    )
}