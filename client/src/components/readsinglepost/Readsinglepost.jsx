

import './Readsinglepost.css'
import image from '../../asset/head.jpg'
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';



function Readsinglepost() {
  const location = useLocation();
  const [post, setpost] = useState({});
  const [title,settitle]=useState();
  const [desc,setdes]=useState();
  const [updatemode,setupdate]=useState(false);
  const path = location.pathname.split("/")[2];
  // console.log(location)
  const { user } = useContext(Context)
  // const path = location;
  
  useEffect(() => {
    const getpost = async () => {
      const response = await axios.get("/api/posts/" + path);
      setpost(response.data)
      settitle(response.data.title);
      setdes(response.data.description);
      // console.log(response.data)
    }
    getpost()
  }, [path])

    const  handleSubmit  = async (req,res)=>{
         try{
          await axios.delete(`/api/posts/${post._id}`,{data:{username:user.username}});
          window.location.replace('/')
         }catch(e){
           console.log(e)
         }
    }
  const handleUpdate= async (req,res)=>{
      
    try{
        
      await axios.put(`/api/posts/${post._id}`,{username:user.username ,title,description:desc});
     window.location.reload();
     }catch(e){
       console.log(e)
     }
  }
   
  return (
    <>

      <div className="readsingleposts">
        <div className="hover">
          <div className="readsingleimg">
            <img src={image} alt="" />
          </div>

          <div className="readsinglepostsinfo">
            <div className="readsinglepost-title">
            </div>
            {post.username === user.username &&
              <div className="readsinglepost-title">
                <div className="u_d_btn">
                  <label htmlFor="writefile" className="update">
                    <i class="fas fa-edit"  onClick={()=>setupdate(true)}></i>
                  </label>
                  <label htmlFor="writefile" className="delete">
                    <i class="fas fa-trash-alt"  onClick={handleSubmit}></i>
                  </label>
                </div>

              </div>
            }
                 {updatemode ? <input type="text" className="updateInput"  value={title}  onChange={(e)=>settitle(e.target.value)}/>:(
                   <>
            <div className="readsinglepost-title">
              <h2>{post.title}</h2>
            </div>
            <div className="publishdate">{new Date(post.createdAt).toDateString()}</div>   
            </>
            )}          
            <Link to={`/?user=${post.username}`} className='link'>
              <div className="author">Author :   {post.username}</div>
            </Link>

            <div className="author"> category :{post.categories}</div>
         
            {updatemode ?<> <textarea  type='text' className="updatetextare"   value={desc} onChange={(e)=>setdes(e.target.value)}/>
            <div>
            <button type="submit" className="updatePublish"  onClick={handleUpdate}>pulish</button>
            </div></>:(
            <p className="read">{post.description}</p>
            )}
          </div>
         
          <div className="line"></div>
        </div>


      </div>

    </>
  )
}

export default Readsinglepost;