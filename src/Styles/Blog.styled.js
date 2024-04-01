import styled from "styled-components";

export const BlogSection = styled.div`
    width: 100vw;
    height: fit-content;
    margin-top: 120px;
    .blog__section{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: fit-content;
        margin: 0px auto 0px auto;
        gap: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
        @media screen and (max-width:1000px){
            width: 80%;
        }
        img{
            width: 90px;
            height: 90px;
        }
        .blog__and__insights{
            color: rgba(45,139,11,1);
            font-weight: 400;
            margin-bottom: 40px;
        }
        .medical__discoveries{
            color: rgba(45,139,11,1);
            margin-bottom: 10px;
        }
        .creative__text{
            color: rgba(45,139,11,1);
            font-size: 0.9rem;
            margin-bottom: 50px;
        }

    }
    .blogs__content{
        width: 102vw;
        height: fit-content;
        border-top-left-radius: 80px;
        border-top-right-radius: 80px;
        background-color: #61CD65;

        .blogs{
            width: 70%;
            height: fit-content;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin: 100px auto 50px auto;
            gap: 40px;
            @media screen and (max-width:1000px){
                flex-direction: column;
                width: 85%;
            }
            .blog{
                width: 30%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                background-color: #F3FFF3;
                padding: 30px;
                border-radius: 10px;
                gap: 20px;
                box-shadow: 5px 5px 10px rgba(45,139,11,1);
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                cursor: pointer;
                h3{
                    color: rgba(45,139,11,1);
                    font-weight: 800;
                    font-size: 1.3rem;
                }
                p{
                    color: rgba(45,139,11,1);
                    line-height: 2;
                }
                img{
                    width: 100%;
                    height: 200px;
                    border-radius: 10px; 
                }
                button{
                    width: 140px;
                    height: 40px;
                    background-color: rgba(45,139,11,1);
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    box-shadow: 2px 2px 5px rgba(45,139,11,1);
                    cursor: pointer;
                }
                .blog__info{
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    .author__blog__name{
                        font-weight: 800;
                    }
                    .blog__date__posted{
                        font-weight: 800;
                    }

                    @media screen and (max-width:1000px){
                        flex-direction: column;
                    }
                    p{
                        font-weight: 600;
                        color: rgba(45,139,11,1);
                    }
                }
            }
        }
    }

`