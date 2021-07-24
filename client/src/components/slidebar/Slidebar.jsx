import './slidebar.css'
import image from '../../asset/head.jpg'
import axios from 'axios'
import {useEffect,useState}  from 'react'

function Slidebar() {
          const [category,setcategory]=useState([]);

          useEffect(()=>{
              const getcategory= async ()=>{
                  const response=await axios.get("/api/categories")
                  setcategory(response.data)
                //   console.log(response.data);
              };
              getcategory()
          },[])
    return (
        <>
            <div className="slidebar">
                <div className="slidebaritems">
                    <div className="slidebartitle">ABOUT ME</div>
                    <img src={image} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eos repudiandae commodi re
                        iciendis esse voluptates, facilis maiores consectetur aliquam, suscipit dicta
                         dolorum. Doloribus asperioloreres quibusdam  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum voluptatem nihil mole
                        stias accusamus dolorem fugiat? Quibusdam inventore laudantium fac
                        ere nesciunt, ex animi impedit cum molestiae earum ratione veniam exercitationem? saepe sapi
                        ente esse odio ea.</p>
                </div>
                <div className="slidebaritems">
                    <div className="slidebartitle">CATEGORY</div>
                    <div className="categorylistitems">
                    <div className="categoryitems">
                        {category.map((c)=>(
                             <li className="slidebarcategory">{c.name}</li> 
                        ))}
                   
                      </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Slidebar;