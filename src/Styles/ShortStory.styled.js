import styled from "styled-components";

export const ShortStoryContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    .shortstory__container{
        width: 80%;
        height: 100%;
        display: flex;
        margin: 0px auto 0px auto;
        gap: 50px;
        .shortstory__image{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                aspect-ratio: 1;
                border-radius: 80px;
            }
        }
        .shortstory__dstory{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 15px;
            button{
                width: 160px;
                margin-top: 20px;
                height: fit-content;
                padding: 18px 23px;
                color:#fff;
                border-radius: 50px;
                background-color: #EE3839;
                font-size: 0.8rem;
                font-weight: 700;
                letter-spacing: 1px;
                cursor: pointer;
                letter-spacing: 2px;
                transition: ease all 0.5s;
                box-shadow: 3px 3px 5px rgba(45,139,11,1);
                border: none;
                background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 90%);
                &:hover{
                    transform: translateY(-5px);
                }
            }
            h2{
                color: rgba(45,139,11,1);
                font-size: 2rem;
            }
            p{
                color: rgba(45,139,11,1);
                line-height: 2;
            }
            .patients__stats{
                width: 100%;
                height: fit-content;
                display: flex;
                margin-top: 20px;
                gap: 40px;
                align-items: center;
                .patients__records{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    p{
                        font-size: 0.7rem;
                    }
                }
            }
        }
    }
`