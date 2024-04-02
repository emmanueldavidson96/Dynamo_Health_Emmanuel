import React, {useState, useEffect, useContext} from 'react'
import { BlogContentContainer } from '../Styles/BlogContent.styled'
import featuredImg from "../assets/Service/GettyImages-728756181-0372ea3082164dcd86cf6554ca70d318.webp";
import storyImg from "../assets/Service/IV-Drip-400x334.webp";
import axios from "axios";
import { URL, ImageFolder } from '../Utils/Url';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../ContextApi/AuthContext';
import Comment from '../Components/Comment';
import Footer from '../Components/Footer';
import RecentBlogsComponent from '../Components/RecentBlogsComponent';

export default function BlogContent() {
    
    const id = useParams().id;
    const [blog__data, set__blog__data] = useState({})
    const [userComment, setUserComment] = useState("");
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [recentblogs, set_recentblogs] = useState([]);

    const [getComments, setGetComments] = useState([]);

    const getThisBlogComment = async () => {
        const response = await axios.get(URL+`api/comment/blogcomment/${id}`, {withCredentials:true})
        setGetComments(response.data);
    }

    const get_blog_details = async () => {
        const response = await axios.get(URL+`api/blog/blog/${id}`)
        set__blog__data(response.data);
    }

    const handle__comment = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL+`api/comment/createcomment`, {commentWriteUp: userComment, blogId:id, authorId: currentUser?._id}, {withCredentials:true});
        window.location.reload(true)
    }

    const handle__recent__blogs = async () => {
        const response = await axios.get(URL+`api/blog/blogs/recentblogs`)
        set_recentblogs(response.data);  
        console.log(response.data)  
    }
 
    useEffect(() => {
        get_blog_details()
    }, [id])

    useEffect(() => {
        getThisBlogComment()
    }, [id])

    useEffect(() => {
        handle__recent__blogs()
    }, []);
    
  return (
    <BlogContentContainer>
        <div className='blog__content__container'>
            <div className='blog__information'>
                <h2>Blog Info</h2>
                <div className='date__blog'>
                    <h3>DATE</h3>
                    <p>{blog__data.createdAt?.slice(0,10)}</p>
                </div>

                <div className='blog__author'>
                    <h3>WRITTEN BY</h3>
                    <p>{blog__data.blogAuthor}</p>
                </div>
            </div>

            <div className='blog__content'>
                <h2>{blog__data.blogTitle}</h2>
                <img src={ImageFolder+blog__data.featureImage} alt="" />
                <div className='blog__content__data' dangerouslySetInnerHTML={{__html:blog__data.blogContent}} />
                <div className='blog__comment__section'>
                    <h2>{getComments?.length} COMMENTS</h2>
                    <hr />
                    <form className='blog__comment__post'>
                        <input type="text" onChange={(e) => setUserComment(e.target.value)}/>
                        <button className='' type='submit' onClick={handle__comment}>Submit Comment</button>
                    </form>                   
                </div>
                <div className='blog__comments'>
                    {
                        getComments?.map(comment => (
                            <Comment key={comment._id} {...comment}/>
                        ) )
                    }
                </div>
            </div>

            <div className='blog__suggestions'>
                <h2>RECENT ARTICLES</h2>
                {
                    recentblogs.map(blog => (
                        <RecentBlogsComponent blogTitle={blog.blogTitle} featureImage={blog.featureImage} blogSummary={blog.blogSummary} createdAt={blog.createdAt} _id={blog._id} />
                    ))
                }                
            </div>
        </div>
        <Footer/>
    </BlogContentContainer>
  )
}
