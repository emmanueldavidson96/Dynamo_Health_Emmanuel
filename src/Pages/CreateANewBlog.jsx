import React, { useState } from 'react'
import styled from "styled-components";
import Editor from '../Utils/Editor';
import "react-quill/dist/quill.snow.css"
import {ImCross} from "react-icons/im";
import axios from "axios";
import { URL } from '../Utils/Url';
import {useNavigate} from "react-router-dom";

export default function CreateANewBlog() {
    const [blogTitle, setBlogTitle] = useState("")
    const [blogSummary, setBlogSummary] = useState("")
    const [blogContent, setBlogContent] = useState("")
    const [blogAuthor, setBlogAuthor] = useState("");
    const [files, setFiles] = useState("")
    const [cat, setCat] = useState("");
    const [blogCategories, setCategories] = useState([])
    const navigate = useNavigate();

    const addCategory = () => {
        let updatedCats = [...blogCategories];
        updatedCats.push(cat)
        setCat("")
        setCategories(updatedCats);
    }

    const deleteCategory = (i) => {
        let updatedCats=[...blogCategories];
        updatedCats.splice(i);
        setCategories(updatedCats);
    }

    const handle__post__blog = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.set('file', files[0])
        data.set('blogTitle', blogTitle);
        data.set("blogAuthor", blogAuthor);
        data.set("blogContent", blogContent);
        data.set("blogCategories", blogCategories);
        data.set("blogSummary", blogSummary);
        const response = await axios.post(URL+"api/blog/createblog",data,{withCredentials:true})
        navigate("/admindashboard")
    }

    const handle__post__a__blog = async (e) => {
        
    }
  
    return (
    <CreateBlogSectionContainer>
        <div className='createblog__section'>
            <h2>Create A New Blog | Dynamo Health</h2>
            <form className='blog__form'>
                <input type="file" onChange={(ev) => setFiles(ev.target.files) } />
                <input type="text" placeholder='Blog Title...' onChange={(ev) => setBlogTitle(ev.target.value)} value={blogTitle} />
                <input type="text" placeholder='Blog Summary...' onChange={(ev) => setBlogSummary(ev.target.value)} value={blogSummary}/>
                <input type="text" placeholder='Blog Author...' onChange={(ev) => setBlogAuthor(ev.target.value)} value={blogAuthor}/>
                <Editor value={blogContent} onChange={setBlogContent} />
                <div className='category__section'>
                    <input type="text"  value={cat} onChange={(ev) => setCat(ev.target.value)} placeholder='Enter this Post Category...'/>
                    <div className='btnCategory' onClick={addCategory}>Add</div>
                </div>
                <div className='category__array'>
                    {
                        blogCategories?.map((categ, i) => (
                            <div className='category__items' key={i}>
                                <p className='category__text'>{categ}</p>
                                <p onClick={() => deleteCategory(i)}><ImCross color="rgba(45,139,11,0.7)" size={20} cursor={"pointer"}/></p>
                            </div>
                        ))
                    }
                </div>
                <button type='submit' className='submit__btn' onClick={handle__post__blog}>Create Blog</button>
            </form>
        </div>
    </CreateBlogSectionContainer>
  )
}

const CreateBlogSectionContainer = styled.div`
    width: 100vw;
    display: flex;
    height: 100vh;
    margin-top: 100px;
    @media screen and (max-width:1000px){
        height: fit-content;
    }
    .createblog__section{
        width: 70%;
        height: 100%;
        display: flex;
        margin: 0px auto;
        padding: 50px 0px;
        flex-direction: column;
        gap: 40px;
        @media screen and (max-width:1000px){
            width: 80%;
        }
        h2{
            color:rgba(45,139,11,0.7);
            font-size: 2.4rem;
            @media screen and (max-width:1000px){
                font-size: 2rem;
            }
        }
        .blog__form{
            display: flex;
            flex-direction: column;
            gap: 20px;
            .editor_section{
                width: 100%;
                height: 400px;
            }
            .category__array{
                display: flex;
                margin: 20px 0px;
                gap: 20px;
                .category__items{
                    width: fit-content;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background-color: rgba(45,139,11,0.1);
                    padding: 10px;
                    .category__text{
                        font-size: 1.2rem;
                        color: rgba(45,139,11,0.7);
                    }
                }
            }
            .category__section{
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                input{
                    width:80%;
                }
                .btnCategory{
                    background-color: rgba(45,139,11,0.7);
                    width: 20%;
                    padding: 15px 15px 15px 50px;
                    border-radius: 0px 10px 10px 0px;
                    color: #fff;
                    font-size: 1.2rem;
                    cursor: pointer;
                    font-weight: 600;
                    @media screen and (max-width:1000px){
                        font-size: 0.8rem;
                        padding: 20px 20px;
                    }
                }

            }
            input{
                border-radius: 5px;
                padding: 15px;
                border: 1px solid rgba(45,139,11,0.7);
                font-size: 1.1rem;
                color: rgba(45,139,11,0.7);
                &:focus{
                    outline: 1px solid rgba(45,139,11,0.7);
                }
            }
            .submit__btn{
                padding: 15px;
                border: none;
                background-color: rgba(45,139,11,0.7);
                color: #fff;
                font-size: 1.4rem;
                border-radius: 10px;
                cursor: pointer;
                letter-spacing: 5px;
                box-shadow: 3px 3px 10px rgba(90, 90, 90, 0.9);
            }
        }

    }

`
