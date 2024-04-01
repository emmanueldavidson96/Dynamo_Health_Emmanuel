import React from 'react'
import blogImg from "../assets/About/360_F_578457559_8g2ghxx2u5WBBvfZnVEBn0lZHLgDS0xY.webp";
import {FaEdit} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import {URL, ImageFolder} from "../Utils/Url";
import axios from "axios";

export default function BlogPostCard({_id, blogAuthor, blogCategories, blogContent, blogSummary, blogTitle, createdAt, featureImage}) {
    const handleDeleteBlog = async () => {
        const response = await axios.delete(URL+`api/blog/blog/${_id}`)
        console.log(response)
        window.location.reload()
    }
    
  return (
    <div className='all__blogs__container'> 
        <div className='blog__actions'>
            <Link to={`/updateThisBlogInfo/${_id}`}>
                <FaEdit size={30} color='rgba(45,139,11,0.9)' cursor={"pointer"}/>
            </Link>
            <MdDeleteForever size={30} color='rgba(45,139,11,0.9)' cursor={"pointer"} onClick={handleDeleteBlog}/>          
        </div>
        <div className='first__blog'>
            <Link to={`/blogcontent/${_id}`} className='img_container'>
                <img src={ImageFolder+featureImage} alt="" />
            </Link>
            <div className='blog__info__detail'>
                <Link to={`/blogcontent/${_id}`} className='blogtitle_container'>
                    <h2>{blogTitle}</h2>
                </Link>
                <p className='lorem__placeholder'>
                    {blogSummary}
                </p>
                <h4>Posted by {blogAuthor}</h4>
                <div className='category__section'>
                    {
                        blogCategories.map(cate => (
                            <p>{cate}</p>
                        ))
                    }                    
                </div>
            </div>                    
        </div>
    </div>
  )
}
