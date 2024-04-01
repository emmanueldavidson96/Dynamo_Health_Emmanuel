import styled from "styled-components";

export const FooterSectionContainer = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer__section__container{
        width: 70%;
        height: fit-content;
        display:flex;                                                                                                                                              
        justify-content: space-between;
        gap: 50px;
        padding: 50px 0px;
        @media screen and (max-width: 800px){
            flex-direction: column;
        }
        .footer__about{
            width: 25%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 10px;
            color:rgba(45,139,11,1);   
            @media screen and (max-width: 800px){
                width: 100%;
                align-items: center;
            }         
            .logo__section{
                display: flex;
                align-items: center;
                img{
                    width: 80px;
                    height: 80px;
                }
            }            
        }
        .footer__connect{
            width: 25%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 14px;
            color: rgba(45,139,11,1);
            @media screen and (max-width: 800px){
                width: 100%;
                align-items: center;
            }
            a{
                display: flex;
                align-items: center;
                gap: 20px;
                text-decoration: none;
                color: rgba(45,139,11,1);
                cursor: pointer;
                .social__icon{
                }
            }            
        }
        .footer__services{
            width: 25%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 14px;
            justify-content: center;
            color: rgba(45,139,11,1);
            @media screen and (max-width: 800px){
                width: 100%;
                align-items: center;
            }
            .services__links{
                text-decoration: none;
                color: rgba(45,139,11,1);
            }
            p{
                cursor: pointer;
            }
        }
        .footer__about__company{
            width: 25%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 14px;
            justify-content: center;
            color: rgba(45,139,11,1);
            @media screen and (max-width: 800px){
                width: 100%;
                align-items: center;
            }
            .company__links{
                text-decoration: none;
                color: rgba(45,139,11,1);
            }
        }
    }
` 