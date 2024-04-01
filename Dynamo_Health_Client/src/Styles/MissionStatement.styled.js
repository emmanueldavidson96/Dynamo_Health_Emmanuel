import styled from "styled-components";

export const MissionStatementContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px){
        height: fit-content;
    }
    .mission__statement__section{
        display: flex;
        width: 70%;
        height: 100%;
        margin: 50px auto 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 800px){
            height: fit-content;
            flex-direction: column;
            gap: 50px;
            width: 80%;
        }        
        .mission__statement__text{
            display: flex;
            width: 40%;
            flex-direction: column;
            gap: 15px;
            @media screen and (max-width: 800px){
                width: 100%;
            }
            h2{
                color: rgba(45,139,11,1);
                font-size: 2rem;
            }
            hr{
                width: 30%;
                background-color: rgba(45,139,11,1);
                height: 4px;
            }
            p{
                color: rgba(45,139,11,1);
                font-size: 1rem;
                line-height: 2;
                text-align: justify;
                @media screen and (max-width:1000px){
                    font-size: 0.9rem;
                }
            }
            h4{
                color: rgba(45,139,11,1);
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                font-size: 1.2rem;
                margin-top: 10px;
            }
            h3{
                color: rgba(45,139,11,1);
                margin-top: 20px;
                font-size: 1.6rem;
            }
        }
    }
    .mission__statement__images{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: fit-content;
        @media screen and (max-width:800px){
            width: 100%;
        }
        .images__topsection{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 30px;
            .img_top{
                width: 50%;
                aspect-ratio: 1;
                border-radius: 40px;
                border: 10px solid rgba(45,139,11,0.2);
            }
            .img_side{
                width: 50%;
                aspect-ratio: 1;
                border-radius: 80px;
                border: 10px solid rgba(45,139,11,0.2);
            }
        }
        .images__downsection{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 30px;
            .img_bottom{
                width: 50%;
                aspect-ratio: 1;
                border-radius: 80px;
                border: 10px solid rgba(45,139,11,0.2);
            }
            .img_beside{
                width: 50%;
                aspect-ratio: 1;
                border-radius: 40px;
                border: 10px solid rgba(45,139,11,0.2);
            }
        }
    }
`