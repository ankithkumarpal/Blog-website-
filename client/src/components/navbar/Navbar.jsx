import './navbar.css';
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { Context } from '../../context/Context';
function Navbar() {
    const {user, dispatch} =useContext(Context);
     const  handleLogout=()=>{
        dispatch({type:"LOGOUT"})
     }
    return (
  
        <>
            <div className="navbar">
                <div className="socalmediaicons">
                    <Link  className='link'>
                    <div className="fbicon  navbarsocialmediaicons"> <i className="fab fa-facebook"></i> </div>
                    </Link>
                     <Link  className='link'>
                    <div className="twittericon navbarsocialmediaicons"><i className="fab fa-twitter"></i></div>
                    </Link >
                    <Link className='link'>
                    <div className="linkedin navbarsocialmediaicons"><i className="fab fa-linkedin-in"></i></div>
                    </Link>
                    <Link className='link'>
                    <div className="instagram navbarsocialmediaicons"><i className="fab fa-instagram"></i></div>
                    </Link>
                </div>
                <div className="navbaricons">
                    <div className="home  navicon"><Link to="/"  style={{textDecoration:"none",color:'white'}} className='navlink'>Home</Link></div>
                    <div className="write navicon"><Link to="/write"  style={{textDecoration:"none",color:'white'}} className='navlink'>write</Link></div>
                    <div className="posts navicon"><Link to="/contactus"  style={{textDecoration:"none",color:'white'}} className='navlink'>contactus</Link></div>
                    <div className="posts navicon"><Link to="/register"  style={{textDecoration:"none",color:'white'}} className='navlink'>{!user &&"register"}</Link></div>
                    <div className="posts navicon"><Link to="/login"  style={{textDecoration:"none",color:'white'}} className='navlink'>{!user &&"login"}</Link></div>
                    <div className="posts navicon"><Link to="/login"  style={{textDecoration:"none",color:'white'}} className='navlink' onClick={handleLogout}>{user && 'LOGOUT'}</Link></div>
                </div>

            <div className="profile">
                <Link to={'/setting'} className='link'>
                      <div className="img">image</div>
                </Link>
                 <div className="search"><i className="fas fa-search"></i></div>
            </div>
            </div>
        </>
    )
}

export default Navbar;