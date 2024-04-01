import styled from "styled-components";

export const ContactContainer = styled.div`
    height: fit-content;
    width: 100vw;
    display: flex;
    .contact__section{
        display: flex;
        flex-direction: column;
        width: 100%;
        .top__header__section{
            height: 400px;
            width: 100%;
            padding-top: 100px;
            background-color: rgba(45,139,11,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            @media screen and (max-width:1000px){
                flex-direction:column;
            }
            h2{
                font-size: 2.5rem;
                font-weight: 800;
            }
            p{
                font-weight: 300;
                letter-spacing: 2px;
            }
        }
        .doctors__online__address{
            width: 70%;
            height: fit-content;
            display: flex;
            margin: -50px auto 0px auto;
            justify-content: space-between;
            @media screen and (max-width:1000px){
                flex-direction:column;
                gap: 40px;
            }
            .doctors__location{
                width: 30%;
                height: fit-content;
                padding: 40px 25px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                background-color: #fff;
                box-shadow: 5px 5px 10px rgba(45,139,11,0.2);
                border-radius: 10px;
                @media screen and (max-width:1000px){
                   width:100%;
                }
                p{
                    color: rgba(45,139,11,1);
                }
            }
            .doctors__online{
                width: 30%;
                height: fit-content;
                padding: 40px 25px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                background-color: #fff;
                box-shadow: 5px 5px 10px rgba(45,139,11,0.2);
                border-radius: 10px;
                @media screen and (max-width:1000px){
                   width:100%;
                }
                p{
                    color: rgba(45,139,11,1);
                }
            }
            .doctors__general__contacts{
                width: 25%;
                height: fit-content;
                padding: 40px 25px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                background-color: #fff;
                box-shadow: 5px 5px 10px rgba(45,139,11,0.2);
                border-radius: 10px;
                @media screen and (max-width:1000px){
                   width:100%;
                }
                .socials__contacts{
                    display: flex;
                    gap: 15px;
                }
                p{
                    color: rgba(45,139,11,1);
                }
                h3{
                    color: rgba(45,139,11,1);
                }
            }

        }
        .send__a__message__section{
            width: 70%;
            height: fit-content;
            margin: 60px auto 40px auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: 8px 8px 20px rgba(45,139,11,0.2);
            padding: 40px;
            @media screen and (max-width:1000px){
                width: 100%;
            }
            h2{
                color: rgba(45,139,11,1);
            }
            .send__a__message__section__name{
                display: flex;
                justify-content: space-between;
                @media screen and (max-width:1000px){
                    width:100%;
                    flex-direction: column;
                    gap: 10px;
                }
                .send__a__message__section__firstName{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    color: rgba(45,139,11,1);
                    @media screen and (max-width:1000px){
                        width:100%;
                    }
                    label{
                        font-weight: 600;
                    }
                    input{
                        width: 400px;
                        height: fit-content;
                        padding: 15px;
                        outline: none;
                        border-radius: 10px;
                        @media screen and (max-width:1000px){
                            width:100%;
                        }
                    }
                }
                .send__a__message__section__lastName{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    color: rgba(45,139,11,1);
                    label{
                        font-weight: 600;
                    }
                    input{
                        width: 400px;
                        height: fit-content;
                        padding: 15px;
                        outline: none;
                        border-radius: 10px;
                        @media screen and (max-width:1000px){
                            width:100%;
                        }
                    }
                }
            }
            .send__a__message__email__and__phonenumber{
                display: flex;
                justify-content: space-between;
                @media screen and (max-width:1000px){
                    flex-direction: column;
                    gap: 10px;
                }
                .email__subsection{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    color: rgba(45,139,11,1);
                    label{
                        font-weight: 600;
                    }
                    input{
                        width: 400px;
                        height: fit-content;
                        padding: 15px;
                        outline: none;
                        border-radius: 10px;
                        @media screen and (max-width:1000px){
                            width:100%;
                        }
                        
                    }
                }
                .phone__number{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    color: rgba(45,139,11,1);
                    label{
                        font-weight: 600;
                    }
                    input{
                        width: 400px;
                        height: fit-content;
                        padding: 15px;
                        border-radius: 10px;
                        outline: none;
                        @media screen and (max-width:1000px){
                            width:100%;
                        }
                    }
                }
            }
            textarea{
                padding:20px;
                color: rgba(45,139,11,1);
                border-radius: 10px;
            }
            button{
                width: 200px;
                height: fit-content;
                padding: 15px 20px;
                border-radius: 10px;
                outline: none;
                border: none;
                background: rgba(45,139,11,8);
                color: #fff;
                text-transform: uppercase;
                box-shadow: 3px 3px 5px rgba(45,139,11,0.8);
                letter-spacing: 1px;
                cursor: pointer;
            }
        }
    }
`