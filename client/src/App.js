import Navbar from './components/navbar/Navbar';
import Slidebar from './components/slidebar/Slidebar';
import Home from './pages/home/Home'
import Readpost from './pages/readpost/Readpost'
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Readsinglepost from './components/readsinglepost/Readsinglepost';
import { useContext } from 'react';
import { Context } from './context/Context';
import Posts from './components/posts/Posts';
  

function App(){
   let user=useContext(Context).user;
  //  console.log(user)
    return(
     <Router>
       <Navbar/>
       <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route  path="/write">{user?<Write />:<Home/>}</Route>
          <Route path="/readpost/:postId">
            <Readpost />
          </Route>
          <Route  path="/register">{user?<Home/>:<Register />} </Route>
          <Route  path="/post"><Posts/> </Route>
          <Route  path="/setting">{user?<Setting />:<Register/>}</Route>
          <Route  path="/login">{user?<Home/>:<Login />}</Route>
       </Switch>
      
       
      </Router>
    )
}

export default App;