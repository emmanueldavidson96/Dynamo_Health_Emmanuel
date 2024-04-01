import styled from "styled-components";

export const BenefitSectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:1000px){
        height: fit-content;
    }
    .section__area{
        display: flex;
        width: 70%;
        height: 100%;
        flex-direction: column;
        margin: 0px auto 0px auto;
        align-items: center;
        gap: 15px;
        margin-top: 150px;
        @media screen and (max-width: 1000px){
            margin-top: 80px;
            width: 80%;
        }
        hr{
            width: 15%;
            height: 3px;
            background-color: rgba(45,139,11,1);
            margin-top: 20px;
        }
        h2{
            font-size: 1.2rem;
            color: rgba(45,139,11,1);
            font-family: 'Ubuntu', sans-serif;
        }
        h4{
            font-size: 2rem;
            color: rgba(45,139,11,1);
            font-family: 'Ubuntu', sans-serif;
        }
        p{
            color: rgba(45,139,11,1);
        }
        .section__area__benefits{ 
            display: flex;
            gap: 40px;
            width: 100%;
            height: fit-content;
            margin-top: 50px;
            @media screen and (max-width: 1000px){
                flex-direction: column;
            }
            .section__affordable{
                display: flex;
                gap: 20px;
                flex-direction:column;
                width: 33.333%;
                height: fit-content;
                align-items: center;
                padding: 30px;
                @media screen and (max-width: 800px){
                    width: 100%;
                }
                h3{
                    color: rgba(45,139,11,1);
                }
                p{
                    font-size: 0.9rem;
                    line-height: 2;
                }
            }
            .section__professional{
                display: flex;
                gap: 20px;
                flex-direction:column;
                width: 33.333%;
                height: fit-content;
                align-items: center;
                padding: 30px;
                background-color: rgba(45,139,11,1);
                @media screen and (max-width: 800px){
                    width: 100%;
                }
                h3{
                    color: #fff;
                }
                p{
                    font-size: 0.9rem;
                    line-height: 2;
                    color: #fff;
                }
            }
            .section__satisfaction{
                display: flex;
                gap: 20px;
                flex-direction:column;
                width: 33.333%;
                height: fit-content;
                align-items: center;
                padding: 30px;
                @media screen and (max-width: 1000px){
                    width: 100%;
                }
                h3{
                    color: rgba(45,139,11,1);
                }
                p{
                    font-size: 0.9rem;
                    line-height: 2;
                }
            }
        }
    }
`