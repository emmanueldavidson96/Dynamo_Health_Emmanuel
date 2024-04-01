import styled from "styled-components";

export const FaqSectionContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #ECF9E9;
    @media screen and (max-width:1000px) {
        flex-direction: column;
        height: fit-content;
        padding-bottom: 100px;
    }
    .faqs__section{
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: 150px auto 0px auto;
        width: 80%;
        @media screen and (max-width:1000px){
            width: 90%;
        }
        height: fit-content;
        h2{
            color: rgba(45,139,11,1);
            @media screen and (max-width:1000px){
                font-size: 1.2rem;
                
            }
        }
        .questions__answers{
            display: flex;
            width: 98%;
            margin: 0px auto;
            height: fit-content;
            @media screen and (max-width:1000px){
                flex-direction: column;
                gap: 50px;
            }
            .left__side__questions{
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 50%;
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                .questions{
                    width: 96%;
                    height: fit-content;
                    background-color: #F3F4F2;
                    box-shadow: 5px 5px 20px #BAF9AB;
                    padding: 25px 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    .answer__click__open{
                        p{
                            font-size: 0.8rem;
                            line-height: 1.8;
                            text-align: justify;
                            color: rgba(45,139,11,1);
                        }
                    }
                    .question__click{
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        h3{
                            font-weight: 500;
                            font-size: 0.9rem;
                            color: rgba(45,139,11,1);
                        }
                    }
                }
            }
            .right__side__questions{
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 50%;
                @media screen and (max-width:1000px){
                    width: 100%;
                }
                .questions{
                    width: 96%;
                    height: fit-content;
                    background-color: #F3F4F2;
                    box-shadow: 5px 5px 20px #BAF9AB;
                    padding: 25px 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    .answer__click__open{
                        p{
                            font-size: 0.8rem;
                            line-height: 1.5;
                            text-align: justify;
                            color: rgba(45,139,11,1);
                        }
                    }
                    .question__click{
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        h3{
                            font-weight: 500;
                            font-size: 0.9rem;
                            color: rgba(45,139,11,1);
                        }
                    }
                }
            }
        }
    }
`