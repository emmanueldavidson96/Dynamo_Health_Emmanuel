import styled from "styled-components";
import imgage from "../assets/Images/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg";

export const ServiceContainer = styled.div`
    height: fit-content;
    width: 100vw;    
    background: #000;
    background: linear-gradient(rgba(45,139,11,0.8), rgba(45,139,11,0.2)), url(${imgage});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 50px;
    .services__section{
        width: 70%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        margin: 0px auto 0px auto;
        gap: 80px;
        margin-top: 100px;
        padding: 0px 0px 100px 0px;
        @media screen and (max-width:1000px){
            margin-top: 60px;
            width: 85%;
        }
        h1{
            color: #fff;
            font-size: 2.4rem;
            letter-spacing: 2px;
            @media screen and (max-width:1000px){
                font-size: 2rem;
            }
        }
    }
`