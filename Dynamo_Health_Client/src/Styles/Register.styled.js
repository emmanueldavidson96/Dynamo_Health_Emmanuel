import styled from "styled-components";
import imgage from "../assets/Images/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg";

export const RegisterContainer = styled.div`
    height: 100vh;
    width: 100vw;    
    background: #000;
    background: linear-gradient(rgba(45,139,11,0.8), rgba(45,139,11,0.2)), url(${imgage});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 50px;
    
    .register__section{
        width: 45%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        margin: 0px auto 0px auto;
        gap: 40px;
        margin-top: 120px;
        padding: 40px 20px 40px 20px;
        background-color: #fff;
        border-radius: 20px;
        align-items: center;
        @media screen and (max-width:1000px){
            width: 85%;
        }
        input{
            width: 70%;
            padding: 20px;
            border-radius: 10px;
            border: none;
            border-bottom: 1px solid;
        }

        h2{
            text-align: center;
            color: rgba(45,139,11,1);
            letter-spacing: 2px;
            @media screen and (max-width:1000px){
                font-size: 1rem;
            }
        }
        button{
            width: 70%;
            padding: 20px;
            background-color: rgba(45,139,11,0.8);
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
        p{
            cursor: pointer;
            .link__btn{
                text-decoration: none;
                color: rgba(45,139,11,1);
            }
        }
    }
`