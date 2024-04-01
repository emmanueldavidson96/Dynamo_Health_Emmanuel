import styled from "styled-components";
import aboutImg from "../assets/Service/IMG_1098-586730eb3df78ce2c31c96a6.webp";
import aboutImgBanner from "../assets/About/360_F_627554859_tg33hDUEHi9s9DhYpCHAxBIHA04S0Uqm.webp";


export const AboutContainer = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    .about__dynamo__health__banner__top{
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(rgba(45,139,11,0.8), rgba(45,139,11,0.2)), url(${aboutImgBanner});
        background-size: cover;
        background-position: top;
        background-blend-mode: multiply;        
        h2{
            color: #fff;
            font-size: 4rem;
            z-index: 1000;
            @media screen and (max-width:1000px){
                font-size: 3rem;
            }
        }
        p{
            color: #fff;
            font-size: 1.3rem;
            letter-spacing: 2px;
            text-align: center;
            @media screen and (max-width:1000px){
                font-size: 1rem;
            }
        }
        hr{
            width: 15%;
            background-color: #fff;
            height: 3px;
            margin-bottom: 20px;
        }
    }
    .about__section{
        width: 70%;
        height: fit-content;
        margin: 0px auto 0px auto;
        @media screen and (max-width:1000px){
            width: 80%;
        }
        .about__dynamo__health__content{
            width: 100%;
            height: 100vh;            
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 60px;
            @media screen and (max-width: 1000px){
                flex-direction: column;
                height: fit-content;
                gap: 40px;
            }
            .our__story__container{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width: 1000px) {
                    width: 100%;                    
                }
                img{
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 40px;
                    box-shadow: 10px 10px 20px rgba(45,139,11,0.4);
                    margin-top: 50px;
                }
            }
            .our__story__content{
                width: 50%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 20px;
                @media screen and (max-width: 1000px) {
                    width: 100%;     
                    gap:10px;
                }
                h3{
                    font-size: 3rem;
                    color: rgba(45,139,11,1);
                    letter-spacing: 1px;
                    @media screen and (max-width:1000px) {
                        font-size: 2rem;                        
                    }
                }
                p{
                    line-height: 2.5;
                    color: rgba(45,139,11,1);
                    text-align: justify;
                }
            }
        }
        .our__mission__dynamo__health__content{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 50px 0px;
            @media screen and (max-width: 1000px){
                flex-direction: column-reverse;
                height: fit-content;
            }
            .our__mission__container{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width: 1000px){
                    width: 100%;
                }
                img{
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 40px;
                    box-shadow: 10px 10px 20px rgba(45,139,11,0.4);
                }
            }
            .our__mission__content{
                width: 50%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 20px;
                
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                h3{
                    font-size: 3rem;
                    color: rgba(45,139,11,1);
                    letter-spacing: 1px;
                    @media screen and (max-width:1000px) {
                        font-size: 2rem;                        
                    }
                }
                p{
                    line-height: 2.5;
                    color: rgba(45,139,11,1);
                    text-align: justify;
                }
            }
        }
        .our__services__dynamo__health__content{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 60px;
            padding: 5px 0px;
            @media screen and (max-width:1000px){
                height: fit-content;
                flex-direction: column;
            }
            .our__services__container{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width:1000px) {
                    width: 100%;                    
                }
                img{
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 40px;
                    box-shadow: 10px 10px 20px rgba(45,139,11,0.4);
                }
            }
            .our__services__content{
                width: 50%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 20px;
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                h3{
                    font-size: 3rem;
                    color: rgba(45,139,11,1);
                    letter-spacing: 1px;
                    @media screen and (max-width:1000px){
                        font-size: 2rem;
                    }
                }
                p{
                    line-height: 2.5;
                    color: rgba(45,139,11,1);
                    text-align: justify;
                }
            }
        }
        .why__chooseus__dynamo__health__content{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            padding: 50px 0px;
            @media screen and (max-width:1000px){
                height: fit-content;
                flex-direction:column-reverse;
            }
            .why__chooseusimg__container{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width:1000px){
                    width: 100%;                    
                }
                img{
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 40px;
                    box-shadow: 10px 10px 20px rgba(45,139,11,0.4);
                }
            }
            .why__chooseus__content{
                width: 50%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 20px;
                @media screen and (max-width: 1000px){
                    width:100%;
                }
                h3{
                    font-size: 3rem;
                    color: rgba(45,139,11,1);
                    letter-spacing: 1px;
                    @media screen and (max-width:1000px){
                        font-size:2rem;
                    }
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    color: rgba(45,139,11,1);
                    li{
                        line-height: 2;
                        text-align: justify;
                    }
                }
            }
        }

        .our__team__dynamo__health__content{
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            padding: 50px 0px;
            @media screen and (max-width:1000px){
                flex-direction:column-reverse;
            }
            .our__team__container{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width:1000px){
                    width:100%;
                }
                img{
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 40px;
                    box-shadow: 10px 10px 20px rgba(45,139,11,0.4);
                }
            }
            .our__team__content{
                width: 50%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 20px;
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                h3{
                    font-size: 3rem;
                    color: rgba(45,139,11,1);
                    letter-spacing: 1px;
                    @media screen and (max-width:1000px){
                        font-size:2rem;
                    }
                }
                p{
                    line-height: 2;
                    text-align: justify;
                    color: rgba(45,139,11,1);
                }
            }
        }
        .appointment__section{
            width: 100%;
            height: 30vh;
            display: flex;
            @media screen and (max-width:1000px) {
                height: fit-content;                
            }
            .appointment__container{
                margin: 0px auto 0px auto;
                display: flex;
                align-items: center;
                width: 80%;
                height: fit-content;
                background-color: rgba(45,139,11,1);
                padding: 50px 50px;
                justify-content: space-between;
                border-radius: 30px;
                @media screen and (max-width:1000px){
                    width:100%;
                    flex-direction: column;
                    gap: 20px;
                    padding: 30px;
                }
                h2{
                    color: #fff;
                    @media screen and (max-width:1000px){
                        font-size: 1.4rem;
                    }
                }
                p{
                    color: #fff;
                    @media screen and (max-width:1000px){
                        font-size: 0.8rem;
                    }
                }
                button{
                    padding: 15px 25px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    color: rgba(45,139,11,1);
                    cursor: pointer;
                    @media screen and (max-width:1000px){
                        padding: 10px 20px;
                        font-size: 0.8rem;
                    }
                }
            }
        }
        .footer__section{
            width: 100%;
            height: 30vh;
            display: flex;
            justify-content: space-between;
            @media screen and (max-width:1000px){
                height: fit-content;
                flex-direction: column;
                align-items: center;
                gap:20px;
                padding: 50px 0px;
            }
            .logo__container{
                width: 20%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: rgba(45,139,11,1);
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                img{
                    width: 80px;
                    height: 80px;
                }
            }
            .services__container{
                width: 20%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: rgba(45,139,11,1);
                @media screen and (max-width:1000px){
                    width: 100%;
                }
            }
            .connect__container{
                width: 20%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: rgba(45,139,11,1);
                @media screen and (max-width:1000px){
                    width: 100%;
                }
            }
            .company__container{
                width: 20%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: rgba(45,139,11,1);
                @media screen and (max-width:1000px){
                    width: 100%;
                }
            }
        }
    }
`