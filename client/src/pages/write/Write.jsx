import './Write.css';
import image from '../../asset/head.jpg'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context'
import axios from 'axios';

export default function Write() {

    const [title, settitle] = useState('');
    const [description, setdesc] = useState('');
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title)
        console.log(description)
        const newPost = {
            username: user.username,
            title: title,
            description: description
        };
        console.log(user._id)
        try {
            const res = await axios.post("/api/posts", newPost);
            window.location.replace("/readpost/" + res.data._id);
            console.log(res.data._id)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="write">
                    <div className="writeimage">
                        <img src={image} alt="" />
                    </div>
                    <input type="file" id="writefile" className="writefile" />
                    <div className="writeinfo">
                        <div className="addimg">
                            <label htmlFor="writefile" className="add">
                                <i class="fas fa-plus" ></i>
                            </label>
                            <input type="file" id="writefile" className="writefile" />

                            <input type="text" placeholder="title" className="writetitle" onChange={(e) => settitle(e.target.value)} />
                        </div>
                        <div className="writecontent">
                            <textarea name="textarea" id="writetext" placeholder="tell your story...." onChange={(e) => setdesc(e.target.value)} />
                            <div className="publishbtn">
                                <button type="submit" >Publish</button>
                            </div>

                        </div>
                    </div>


                </div>
            </form>
        </>
    )
}