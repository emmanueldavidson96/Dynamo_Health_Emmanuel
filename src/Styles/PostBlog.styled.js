import styled from "styled-components";

export const PostBlogContainer = styled.div`
    width: 100vw;
    height: fit-content;
    .post__blog__container{
        width: 70%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        margin: 100px auto 100px auto;
        gap: 20px;
    
        h2{
            color: rgba(45,139,11,1);
            font-size: 2rem;
        }
        hr{
            background-color: rgba(45,139,11,1);
        }
        p{
            font-weight: 600;
            font-size: 1.1rem;
        }
        button{
                color: #fff;
                letter-spacing: 1.4px;
                padding: 20px 30px;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
                font-weight: 200;
                cursor: pointer;
                transition: ease-in all 0.5s;
                background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 96%);                
                &:hover{
                    background-color: #A7DAD8;
                    color: #fff;
                    letter-spacing: 2px;
                    box-shadow: 3px 3px 10px rgba(45,139,11,0.8);
                }
            }
        .content__form{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
            gap: 20px;
            color: rgba(45,139,11,1);
            label{
                font-size: 1.1rem;
                font-weight: 400;
            }
            input{
                padding: 20px;
                font-weight: 500;
                color: rgba(45,139,11,1);
                background-color: rgba(45,139,11,0.2);
                border: none;
                border-radius: 10px;
                box-shadow: 5px 5px 20px rgba(45,139,11,0.2);
            }
            textarea{
                background-color: rgba(45,139,11,0.2);
                border: none;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 5px 5px 20px rgba(45,139,11,0.2);
            }

        }
    }

`