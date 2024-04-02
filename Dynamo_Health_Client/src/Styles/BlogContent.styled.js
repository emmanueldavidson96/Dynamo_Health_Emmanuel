import styled from "styled-components";

export const BlogContentContainer = styled.div`
    width: 100vw;
    height: fit-content;   
    position: relative;
    .blog__content__container{
        display: flex;
        width: 70%;
        margin: 150px auto 100px auto;
        justify-content: space-between;
        position: relative;
        @media screen and (max-width:1000px){
            flex-direction: column;
            gap: 50px;
        }
        .blog__information{
            width: 10%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: rgba(45,139,11,1);
            position: sticky;
            top: 150px;
            @media screen and (max-width:1000px){
                width: 100%;
                position: static;
            }
            h2{
                font-size: 1.3rem;
            }
            .date__blog{
                display: flex;
                flex-direction: column;
                gap: 5px;
                h3{
                    font-size: 0.9rem;
                }
                p{
                    font-size: 0.8rem;
                }
            }
            .blog__author{
                display: flex;
                flex-direction: column;
                gap: 5px;
                h3{
                    font-size: 0.9rem;
                }
                p{
                    font-size: 0.8rem;
                }
            }
        }
        .blog__suggestions{
            width: 25%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: rgba(45,139,11,1);
            position: sticky;
            top: 150px;
            align-items: center;
            h2{
                font-size: 1.3rem;
            }
            @media screen and (max-width:1000px){
                width: 100%;
                position: static;
            }            
            .blog__suggest{
                display: flex;
                flex-direction: column;
                gap: 10px;     
                border: none;
                height: fit-content;
                width: 100%;
                align-items: center;
                box-shadow: 3px 3px 10px rgba(45,139,11,0.25);
                padding: 0px 0px 20px 0px;
                border-radius: 10px;
                img{
                    width: 100%;
                    object-fit: cover;
                    aspect-ratio: 1.5;
                    object-position: top;

                }
                .title_link{
                    text-decoration: none;
                    color: rgba(45,139,11,1);
                    h3{
                        font-size: 1rem;
                        cursor: pointer;
                    }
                }
                p{
                    font-size: 0.8rem;
                    font-weight: 400;
                }
            }         
        }
        .blog__content{
            width: 50%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 40px;
            color: rgba(45,139,11,1);
            @media screen and (max-width:1000px){
                width: 100%;
                position: static;
            }
            .blog__comments{
                width: 100%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 50px;
                .this__comment{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    .comment__author__info{
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        margin-left: 30px;
                        width: 90%;
                        justify-content: space-between;
                        .comment__author__info__update-delete{
                            display: flex;
                            align-items: center;
                            gap: 20px;                          
                        }
                        .comment__authorfunctions{
                            display: flex;
                            align-items: center;
                            gap: 10px;
                        }
                        img{
                            width:35px;
                            height: 35px;
                        }
                        .author__name__and__commentdate{
                            display: flex;
                            flex-direction: column;
                            gap: 1px;
                        }
                    }
                    .comment__content{
                        font-size: 1rem;
                        width: 95%;
                        text-align: justify;
                        margin:0px auto;
                    }
                    .comment__like__section{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-left: 20px;
                    }
                }
            }
            .blog__comment__section{
                width: 100%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 20px;
                hr{
                    width: 100%;
                }
                .blog__comment__post{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    input{
                        width: 100%;
                        padding: 20px;
                        border-radius: 5px;
                        border: 0.5px solid rgba(45,139,11,0.8);
                    }
                    button{
                        width: 200px;
                        padding: 15px;
                        border: none;
                        background-color: rgba(45,139,11,0.8);
                        color: #fff;
                        cursor: pointer;
                        border-radius:5px;
                        
                    }
                }
                
            }
            .blog__content__data{
                color: rgba(45,139,11,1) !important;
                h1,h2,p, span{
                    color: rgba(45,139,11,0.9) !important;
                }
            }
            h2{
                text-align: center;
                font-size: 2rem;
            }
            p{
                font-size: 1.1rem;
                line-height: 2;
                text-align: justify;
            }
            ul{
                display: flex;
                flex-direction: column;
                gap: 20px;
                li{
                    line-height: 2;
                }
            }
        }
        
    }
    
`