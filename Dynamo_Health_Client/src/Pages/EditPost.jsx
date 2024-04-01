import React from 'react'
import { EditBlogContainer } from '../Styles/EditBlog.styled'

export default function EditBlog() {
  return (
    <EditBlogContainer>
        <div className='edit__blog__container'>
            <h2>Edit Blog Post</h2>
            <hr />
            <form className='content__form'>
                <p>Edit the Content Below and Submit:</p>
                <label htmlFor="post__title">Your Content Title</label>
                <input type="text" placeholder='The New Groundbreaking drugs for Diabetes Patients...'/>
                <label htmlFor="post__author">Your Content Author</label>
                <input type="text" placeholder='Dr. Adeyemi...'/>
                <label htmlFor="post__content__feature__image">Your Content Feature Image</label>
                <input type='file' />
                <label htmlFor="post__content">Your Post Content</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='The New Groundbreaking drugs for Diabetes Patients...'>                    
                </textarea>   
                <button type='submit'>Submit Edited Content</button>             
            </form>
        </div>
    </EditBlogContainer>
  )
}
