import "./Header.css"
import image from '../../asset/head.jpg'
function Header(){
    return(
        <>
         <div className="header">
             <div className="title">
                 <div>explore your journey... </div>
                
             </div>
             <div className='title2'>write your blog ...   </div>
          
             <div className="img"><img src= {image} alt="img" /></div>
          
         </div>
        </>
    )
};

export default Header;