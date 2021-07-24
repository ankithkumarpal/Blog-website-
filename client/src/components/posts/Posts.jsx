import './posts.css'
import Singlepost from '../singlepost/Singlepost'
function  Posts({posts}){
    return (
        <>
      <div className="post">
           {posts.map((p,i)=>(
             <Singlepost post={p} key={i}/>
           ))}
      
      </div>
        </>
    )
}

export default  Posts;