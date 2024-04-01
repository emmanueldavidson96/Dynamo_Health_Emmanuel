import React, { useEffect, useState } from 'react'
import { BlogSection } from '../Styles/Blog.styled'
import logoImg from "../assets/logo.jpg";
import { BlogContent } from '../Utils/data';
import { Link } from 'react-router-dom';
import axios from "axios";
import {URL} from "../Utils/Url";

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);

    const getAllBlogPosts = async() => {
        const blogPosts = await axios.get(URL+"api/blog/blogs")
        setBlogPosts(blogPosts.data);
    }

    useEffect(() => {
        getAllBlogPosts()
    }, [])
    
  return (
    <BlogSection>
        <div className='blog__section'>
            <div className='blog__head'>
                <img src={logoImg} alt="" />
                <h3 className='blog__and__insights'>Blog and Insights</h3>
                <h1 className='medical__discoveries'>
                    Our Medical Discoveries:<br/>
                    Exploring the art and science of In-Home Medicine
                </h1>
                <p className='creative__text'>
                    Creative, Insightful and Inspiring discoveries in the world of medicine. Gain valuable information around the world of 
                    medicine though the influence of technology.
                </p>
            </div>
            <div className='blogs__content'>
                <div className='blogs'>
                    {
                        blogPosts.map((blog) => 
                        <div className='blog'>
                            <Link to={`/blogcontent/${blog._id}`}>
                                <img src={URL+blog.featureImage} />
                            </Link>
                            <h3>{blog.blogTitle}</h3>
                            <p>
                                {blog.blogSummary}
                            </p>
                            <div className='blog__info'>
                                <p>
                                    <span className='author__blog__name'>Author: </span>{blog.blogAuthor}
                                </p>
                                <p>
                                    <span className='blog__date__posted'>Date Posted: </span>{blog.createdAt.slice(0,10)}
                                </p>
                            </div>
                            <Link to={`/blogcontent/${blog._id}`}>
                                <button>
                                    Read More
                                </button>                            
                            </Link>
                        </div>
                        )
                    }                   
                </div>
            </div>
        </div>
    </BlogSection>
  )
}

export default Blog