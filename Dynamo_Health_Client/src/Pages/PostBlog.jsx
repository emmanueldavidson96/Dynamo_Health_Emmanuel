import React from 'react'
import { PostBlogContainer } from '../Styles/PostBlog.styled'

export default function PostBlog() {
  return (
    <PostBlogContainer>
        <div className='post__blog__container'>
            <h2>New Blog Post</h2>
            <hr />
            <form className='content__form'>
                <p>Please Submit the details of your post below by using the fields below:</p>

                <label htmlFor="post__title">Your Content Title</label>
                <input type="text" placeholder='The New Groundbreaking drugs for Diabetes Patients...'/>
                <label htmlFor="post__author">Your Content Author</label>
                <input type="text" placeholder='Dr. Adeyemi...'/>
                <label htmlFor="post__content__feature__image">Your Content Feature Image</label>
                <input type='file' />
                <label htmlFor="post__content">Your Post Content</label>
                <textarea name="" id="" cols="30" rows="10">                    
                </textarea>   
                <button type='submit'>Submit Content</button>             
            </form>
        </div>
    </PostBlogContainer>
  )
}
