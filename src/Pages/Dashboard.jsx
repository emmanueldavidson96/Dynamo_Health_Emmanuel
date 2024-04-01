import React, { useContext, useEffect, useState } from 'react'
import { DashboardContainer } from '../Styles/Dashboard.styled'
import { UserContext } from '../ContextApi/AuthContext';
import { Link } from 'react-router-dom';
import { IoIosCreate } from "react-icons/io";
import BlogPostCard from '../Layouts/BlogPostCard';
import axios from "axios";
import { URL } from '../Utils/Url';

export default function Dashboard() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const this__user = currentUser?.username;
    const [blogPosts, setBlogPosts] = useState([]);

    const handle__get__all__posts = async () => {
        const response = await axios.get(URL+"api/blog/blogs", {withCredentials:true});
        console.log(response.data)
        setBlogPosts(response.data)
    }

    useEffect(() => {
        handle__get__all__posts()      
    }, [])

    const [iconhover, seticonhover] = useState(false)

  return (
    <DashboardContainer>        
        <div className='dashboard__section__header'>
            <h2>Hi, {this__user}</h2>
            <p>Here you get to Add New Blogs, Edit Posted Blogs, Delete Posted Blogs, Recommended Blogs and Categories. </p>
        </div>
        
        <div className='dashboard__area'>
            <div className='lastest__blogsheader__and__createnewblog'>
                <div className='lastest__blogsheader'>
                    <h2>Latest Blogs</h2>
                    <hr />           
                </div>

                <div className='icon_container'>
                    <Link to="/createnewblogpost" className='link__newpost' onMouseOver={()=> seticonhover(true)} onMouseOut={() => seticonhover(false)}>
                        <IoIosCreate size={30} color='rgba(45,139,11,0.9)' cursor={"pointer"} />
                        {
                            iconhover &&
                            <p className='create__newblog'>Create A Blog Post!</p>
                        }                    
                    </Link>
                </div>

            </div>

            {
                blogPosts.length > 0 && blogPosts.map(blog => (
                    <BlogPostCard {...blog}/>
                ))
            }
        </div>
    </DashboardContainer>
  )
}
