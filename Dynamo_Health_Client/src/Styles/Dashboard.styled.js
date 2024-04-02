import styled from "styled-components";
import doctorImage from "../assets/About/360_F_712360125_A9qeSWmFH6QbicZvnAsQKDwKTa47CBvB.webp";

export const DashboardContainer = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    .dashboard__section__header{
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(rgba(45,139,11,0.8), rgba(45,139,11,0.2)), url(${doctorImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        background-blend-mode: multiply; 
        gap: 10px;
        @media screen and (max-width:1000px){
            padding-top: 150px;
            padding-left: 30px;
            padding-right: 30px;
        }
        h2{
            color: #fff;
            font-size: 4rem;
            z-index: 1000;
            @media screen and (max-width:1000px){
                font-size: 2rem;
            }
        }
        p{
            color: #fff;
            font-size: 1.1rem;
            letter-spacing: 2px;
            text-align: center;
            @media screen and (max-width:1000px){
                font-size:0.8rem;
            }
        }
    }
    .dashboard__area{
        width: 65%;
        height: fit-content;
        display: flex;
        margin: 0px auto;
        flex-direction: column;
        padding: 50px 0px 50px 0px;
        gap: 40px;
        @media screen and (max-width:1000px){
            width: 80%;
        }
        .lastest__blogsheader__and__createnewblog{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon_container{
                display: flex;
                align-items: center;
                gap: 2px;
                .link__newpost{
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }

                .create__newblog{
                    color: rgba(45,139,11,0.8);
                    font-size: 0.8rem;
                }
            }
        }
        h2{
            font-size: 2.2rem;
            color: rgba(45,139,11,0.9);
            @media screen and (max-width:1000px){
                font-size: 1.5rem;
            }
        }
        hr{
            height: 3px;
            margin-top: 10px;
            background-color: rgba(45,139,11,0.6);
            width: 105%;

        }
        .all__blogs__container{
            width: 100%;
            height: fit-content;
            background-color: rgba(45,139,11,0.12);
            padding: 20px 50px 50px 50px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: 5px 5px 15px rgba(45,139,11,0.4);
            .blog__actions{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: end;
                gap: 20px;
                .edit__btn{
                    display: flex;
                    align-items: center;
                }
            }
            .first__blog{
                display: flex;
                gap: 30px;
                height: 250px;
                width: 100%;
                @media screen and (max-width:1000px){
                    flex-direction: column;
                    height: fit-content;
                }
                .img_container{
                    width: 40%; 
                    height: 100%;
                    @media screen and (max-width:1000px){
                        width: 100%;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .blog__info__detail{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 60%;
                    @media screen and (max-width:1000px){
                        width: 100%;
                    }
                    .lorem__placeholder{
                        color: rgba(45,139,11,0.9);
                        line-height: 1.5;
                        @media screen and (max-width:1000px){
                            font-size: 0.9rem;
                            text-align: justify;
                        }
                    }
                    .blogtitle_container{
                        text-decoration: none;
                        width: 100%;
                        h2{
                            color: rgba(45,139,11,0.9);
                            font-size: 1.5rem;
                            @media screen and (max-width:1000px){
                                font-size: 1rem;
                            }                            
                        }
                    }
                    h4{
                        color: rgba(45,139,11,0.9);
                    }
                    .category__section{
                        width: fit-content;
                        display: flex;
                        justify-content: flex-start;
                        gap: 10px;
                        flex-wrap: wrap;
                        p{
                            background-color: rgba(45,139,11,0.3);
                            padding: 10px;
                            border-radius: 10px;
                            color: rgba(45,139,11,0.9);
                            font-weight: 600;
                        }
                    }
                }

            }
        }
        
    }
`