import styled from "styled-components";

export const TestimonialCardContainer = styled.div`
    width: 305px;
    height: 320px;
    background-color: rgba(45,139,11,0.1);
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    @media screen and (max-width:1000px){
        width: 250px;
        height: 250px;        
    }

    p{
        line-height: 1.5;
        font-size: 1rem;
        @media screen and (max-width: 800px){
            font-size: 0.8rem;
        }
    }
`