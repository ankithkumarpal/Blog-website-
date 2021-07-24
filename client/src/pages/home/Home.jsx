import './Home.css'
import Header from'../../components/header/Header';
import Posts from '../../components/posts/Posts'
import Slidebar from '../../components/slidebar/Slidebar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Home(){
   
    const [posts,setpost]=useState([]);
    const location=useLocation();
    console.log(location.search)
       
    useEffect(()=>{
           const fetchposts= async()=>{
               const response= await axios.get("/api/posts" +location.search)
            //    console.log(response.data)
                setpost(response.data)
           }
           fetchposts();
    },[]);
    return(
        <>
         <Header/>
          <div className="home">
              {/* <Posts/> */}
          <Posts posts={posts}/>
          <Slidebar/>
          </div>
        </>
    )
}

export default Home;
