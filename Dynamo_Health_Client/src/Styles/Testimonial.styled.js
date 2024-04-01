import styled from "styled-components";

export const TestimonialContainer = styled.div`
    width: 100vw;
    height: 65vh;
    background-color: rgba(45,139,11,0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px){
        height: fit-content;
    }
    h2{
        font-size: 2rem;
        @media screen and (max-width: 800px){
            font-size: 1.2rem;
        }
    }
    .testimonial__section{
        width: 70%;
        margin: 0px auto 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 800px){
            padding: 50px 0px;
        }
    }
`