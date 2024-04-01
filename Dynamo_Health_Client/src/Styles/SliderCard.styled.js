import styled from "styled-components";

export const SliderCardContainer = styled.div`
    width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(45,139,11,0.3);
    padding: 20px 4px 10px 4px;
    border-radius: 20px;
    cursor: pointer;
    img{
        width: 90%;
        aspect-ratio: 1;
        border-radius: 20px;
    }
    h3{
        color: rgba(45,139,11,1);
    }
    p{
        color: rgba(45,139,11,1);
    }
`

export const SliderSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;
`
