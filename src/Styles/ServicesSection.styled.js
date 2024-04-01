import styled from "styled-components";

export const ServiceContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    @media screen and (max-width: 800px){
        flex-direction: column;
        gap: 20px;
    }
    .image__container{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 800px){
            width: 100%;
        }
        img{
            width: 80%;
            aspect-ratio: 1.4;
            @media screen and (max-width: 800px){
                width: 100%;
            }
        }
    }
    .this__service{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #fff;
        @media screen and (max-width: 800px){
            width: 100%;
        }
        hr{
            background-color: rgba(45,139,11,0.3);
            height: 2px;
        }
        h3{
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 800;
            @media screen and (max-width:1000px){
                font-size: 1.2rem;
            }
        }
        p{
            font-weight: 500;
            line-height: 2;
            font-size: 1.1rem;
            text-align: justify;
            @media screen and (max-width:1000px){
                font-size: 0.9rem;
            }
        }
        button{
            width: 150px;
            height: 50px;
            border: none;
            cursor: pointer;
            color: rgba(45,139,11,1);
            border-radius: 5px;
            box-shadow: 3px 3px 10px green;
        }
    }
`