import React, { useState, useEffect } from 'react'
import img_placeholder from "../assets/Images/360_F_217346782_7XpCTt8bLNJqvVAaDZJwvZjm0epQmj6j.webp";
import { FaHandsClapping } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import {URL} from "../Utils/Url";

function Comment({_id,authorId, blogId, commentWriteUp, createdAt, updatedAt}) {
    const [like, setLike] = useState(false);
    const [likes, setLikes] = useState(0);
    const [commentowner, setcommentowner] = useState("")

    const handleDelete = async () => {
        const response = await axios.delete(URL+`api/comment/deletecomment/${_id}`)
        window.location.reload(true);
    }

    const handle__like = async () => {
        const response = await axios.post(URL+`api/comment/blogcomment/like/${_id}`)
        setLike(true)
    }

    const handle__unlike = async () => {
        const response = await axios.post(URL+`api/comment/blogcomment/unlike/${_id}`)
        setLike(false)
    }

    const handle__get__likes = async () => {
        const response = await axios.get(URL+`api/comment/blogcomment/likes/${_id}`)
        setLikes(response.data)
    }

    const handle__get__comment__user = async () => {
        const response = await axios.get(URL+`api/user/getuserinfo/${authorId}`)
        console.log(response.data)
        setcommentowner(response.data.username)
    }

    useEffect(() => {
        handle__get__likes()
    }, [like])  
    useEffect(() => {
        handle__get__comment__user()
    }, [])  

    
    
  return (
    <div className='this__comment'>
        <div className='comment__author__info'>
            <div className='comment__author__info__update-delete'>
                <img src={img_placeholder} alt="" />
                <div className='author__name__and__commentdate'>
                    <h4>Username</h4>
                    <h5>{commentowner}</h5>
                </div>
            </div>
            <div className='comment__authorfunctions'>
                <RiDeleteBin6Line size={22} cursor={"pointer"} onClick={handleDelete} />
            </div>
        </div>
        <p className='comment__content'>
            {commentWriteUp}
        </p>
        <div className='comment__like__section'>
            <FaHandsClapping size={25} cursor={"pointer"} onClick={like ? handle__unlike : handle__like}/>
            <p>{likes}</p>
        </div>
    </div>
  )
}

export default Comment