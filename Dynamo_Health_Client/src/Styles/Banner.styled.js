import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    .bannner__section{
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        align-items: center;
        @media screen and (max-width: 1000px) {
            flex-direction: column-reverse; 
            height: fit-content;
            gap: 40px;
        }
        .banner__section__text{
            color: #A7DAD8;
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 45%;
            @media screen and (max-width: 800px) {
               width: 100%;
            }
            button{
                width: 160px;
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
                @media screen and (max-width: 800px) {
                    width: 140px;
                    padding: 12px 18px;
                    font-size: 0.6rem;
                }
                &:hover{
                    transform: scale(1.04);
                    box-shadow: 5px 7px 10px rgba(45,139,11,1);
                }
            }
            p{
                    font-weight: 400;
                    line-height: 2;
                    font-size: 0.9rem;
                    text-align: justify;
            }
            .banner__maintext{
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: rgba(45,139,11,1);
                h2{
                    font-size: 2.8rem;
                    font-weight: 600;
                    color: rgba(45,139,11,1);
                    font-family: 'Ubuntu', sans-serif;
                    @media screen and (max-width:800px) {
                        font-size: 1.6rem;                        
                    }
                }                
            }
            p{
                color: rgba(45,139,11,1);

            }
        }
        .banner__section__image{
            width: 55%;
            display: flex;
            align-items: center;
            justify-content: center;  
            @media screen and (max-width: 800px) {
                width: 100%;                            
            }       
            img{
                width: 80%;
                aspect-ratio: 1;
                border-radius: 200px;
                border-image: linear-gradient(to left, #00C853, #B2FF59);
                border-style: solid;
                border-width: 10px;
                box-shadow: 10px 10px 20px rgba(151,214,149,1);
            }
        }
    }
`