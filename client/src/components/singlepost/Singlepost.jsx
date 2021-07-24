
import './singlepost.css'
import image from '../../asset/head.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function Singlepost({ post }) {
    return (
        <>
            <div className="singlepost">
                <div className="imgdiv">
                    <img src={image} alt="" />
                </div>
                <div className="textdiv">
                    <Link to={`/readpost/${post._id}`} className="link">
                        <div className="singleposttitle">{post.title}</div>
                    </Link>
                    <div className="singleposttitle">{post.categories}</div>
                    <span className='date'> {new Date(post.createdAt).toDateString()}</span>
                    <div className="para">
                        <p> {post.description}</p>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Singlepost;