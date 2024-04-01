import styled from "styled-components";

export const AppointmentContainer = styled.div`
    height: 50vh;
    width: 100vw;
    background-color: #fff; 
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding-bottom: 20px;
    padding-top: 20px;
    
    @media screen and (max-width: 800px) {
        height: fit-content;        
    }
    .appointment__container{
        display: flex;
        width: 70%;
        height: fit-content;
        background-color: rgba(45,139,11,0.7);
        justify-content: space-between;
        align-items: center;
        margin: 0px auto 0px auto;
        padding: 35px;
        border-radius: 20px;
        @media screen and (max-width: 800px){
            flex-direction: column;
            gap: 50px;
        }
        h1{
            color: #fff;
            font-size: 2.5rem;
            @media screen and (max-width:1000px){
                font-size: 1.6rem;
            }
        }
        h2{
            color: #fff;
            font-size: 1rem;
            font-weight: 300;
        }
        .appointment__rightsection{
            button{
                width: 220px;
                height: 60px;
                padding: 10px 20px;
                border-radius: 10px;
                outline: none;
                border: none;
                box-shadow: 5px 5px 10px rgba(45,139,11,1);
                color: rgba(45,139,11,1);
                cursor: pointer;
                transition: ease-in all 0.2s;
                &:hover{
                    color: rgba(45,139,11,1);
                    box-shadow: 5px 5px 10px rgba(45,139,11,1);
                    letter-spacing: 1px;
                }
            }
        }
    }  
`