import styled from "styled-components"


export const ServicesContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
    @media screen and (max-width: 1000px){
        height: fit-content;
    }
    .services__container{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        @media screen and (max-width: 1000px) {
            height: fit-content;
            margin-top: 180px;                            
        }
        h4{
            color: rgba(45,139,11,1);
            font-family: 'Ubuntu', sans-serif;
            text-align: center;
        }
        h2{
            color:rgba(45,139,11,1);
            font-family: 'Ubuntu', sans-serif;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 900;
        }
        h1{
            color: #fff;
            text-align: center;
        }
        p{
            color: rgba(45,139,11,1);
            @media screen and (max-width:1000px) {
                line-height: 2;
                text-align: justify;                
            }
        }
        .discover__more{
            text-decoration: none;
            color: #fff;
        }
        .services__offered{
            display: flex;
            width: 100%;
            height: fit-content;
            margin: 0px auto 0px auto;
            gap: 20px;
            justify-content: space-between;
            margin-top: 50px;
            @media screen and (max-width: 800px) {
                flex-direction: column;
            }
            .chiropatic__section{
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 20%;
                align-items: center;
                padding-bottom: 40px;
                border-bottom: 1px solid rgba(45,139,11,1);
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
                img{
                    width:60%;
                    aspect-ratio: 1;
                    border-radius: 10px;
                }         
                h3{
                    color: rgba(45,139,11,1);
                    font-weight: 600;
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 0.9rem;
                }       
                p{
                    font-weight: 300;
                    font-size: 0.9rem;
                    line-height: 2;
                    text-align: center;
                }
                .read__more{
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    cursor: pointer;
                    font-weight: 600;
                    text-decoration: none;
                    color: rgba(45,139,11,1);
                }
            }
            .therapy__section{
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 20%;
                align-items: center;
                padding-bottom: 40px;
                border-bottom: 1px solid rgba(45,139,11,1);
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
                img{
                    width: 60%;
                    aspect-ratio: 1;
                    border-radius: 10px;
                }        
                h3{
                    color: rgba(45,139,11,1);
                    font-weight: 600;
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 0.9rem;
                }       
                p{
                    font-weight: 300;
                    font-size: 0.9rem;
                    line-height: 2;
                    text-align: center;
                }     
                .read__more{
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    cursor: pointer;
                    font-weight: 600;
                    text-decoration: none;
                    color: rgba(45,139,11,1);
                }   
            }
            .nutrition__section{
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 20%;
                align-items: center;
                padding-bottom: 40px;
                border-bottom: 1px solid rgba(45,139,11,1);
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
                img{
                    width: 60%;
                    aspect-ratio: 1;
                    border-radius: 10px;
                }                
                h3{
                    color: rgba(45,139,11,1);
                    font-weight: 600;
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 0.9rem;
                }       
                p{
                    font-weight: 300;
                    font-size: 0.9rem;
                    line-height: 2;
                    text-align: center;
                }
                .read__more{
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    cursor: pointer;
                    font-weight: 600;
                    text-decoration: none;
                    color: rgba(45,139,11,1);
                }
            }
            .massage__section{
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 20%;
                align-items: center;
                padding-bottom: 40px;
                border-bottom: 1px solid rgba(45,139,11,1);
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
                img{
                    width: 60%;
                    aspect-ratio: 1;
                    border-radius: 10px;
                }                
                h3{
                    color: rgba(45,139,11,1);
                    font-weight: 600;
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 0.9rem;
                    text-align: center;
                }       
                p{
                    font-weight: 300;
                    font-size: 0.9rem;
                    line-height: 2;
                    text-align: center;
                }
                .read__more{
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    cursor: pointer;
                    font-weight: 600;
                    text-decoration: none;
                    color: rgba(45,139,11,1);
                }
            }
        }
        button{
            width: 200px;
            margin-top: 30px;
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
                box-shadow: 4px 4px 6px rgba(45,139,11,1);
                border: none;
                background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 90%);
                &:hover{
                    transform: scale(1.04);
                    box-shadow: 5px 7px 10px rgba(45,139,11,1);
                }
        }
    }
`