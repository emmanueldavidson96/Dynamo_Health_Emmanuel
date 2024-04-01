import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: #fff;
    padding: 10px 0px;
    transition: all 2s ease;
    box-shadow: 5px 5px 10px rgba(45,139,11,0.3);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    z-index: 999;
    .dropdown__area{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        transition: all 2s ease; 
        height: fit-content;
        padding: 15px 0px;
        .register{
            button{
                padding: 8px 15px;
                color: #fff;
                letter-spacing: 1.4px;
                border: none;
                border-radius: 5px;
                font-size: 0.7rem;
                font-weight: 300;
                cursor: pointer;
                transition: ease-in all 0.1s;
                background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 96%);
            }
        }
        .contact__section__menu{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            .signin{
                button{
                    padding: 5px 10px;
                    color: #fff;
                    letter-spacing: 1.4px;
                    border: none;
                    border-radius: 5px;
                    font-size: 0.7rem;
                    font-weight: 300;
                    cursor: pointer;
                    transition: ease-in all 0.1s;
                    background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 96%);

                }
            }
            .register{
                button{
                    padding: 5px 10px;
                    color: rgba(45,139,11,1);
                    letter-spacing: 1.4px;
                    border: 1px solid rgba(45,139,11,1);
                    border-radius: 5px;
                    font-size: 0.7rem;
                    font-weight: 300;
                    cursor: pointer;
                    transition: ease-in all 0.1s;
                }
            }
        }
        .web__links{
                text-decoration: none;
                color: #fff;
                text-transform: uppercase;
                font-size: 0.7rem;
                color: rgba(45,139,11,1);
                font-weight: 600;
                letter-spacing: 0.5px;
                transition: ease-in-out all 0.5s;
                &:hover{
                    transform: scale(1.2);
                }
            }
    }
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
    .nav__bar__section{
        width: 80%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hamburger__area{
            display: none;
            @media screen and (max-width: 800px){
                display: block;
            }
        }
        .logo__section{
            color: #A7DAD8;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            img{
                width: 70px;
                height: 70px;
                @media screen and (max-width:800px){
                    width: 45px;
                    height: 45px;
                }
            }
        }
        .navigation__section{
            display: flex;
            align-items: center;
            gap: 20px;
            @media screen and (max-width: 800px){
                display: none;
            }
            .web__links{
                text-decoration: none;
                color: #fff;
                text-transform: uppercase;
                font-size: 0.65rem;
                color: rgba(45,139,11,1);
                font-weight: 700;
                letter-spacing: 0.7px;
                transition: ease-in-out all 0.5s;
                &:hover{
                    transform: scale(1.2);
                }
            }
        }
        .contact__section{
            display: flex;
            gap: 20px;
            align-items: center;
            p{
                color: rgba(45,139,11,1);
                font-size: 0.8rem;
                .this__user__username{
                    font-weight: 800;
                }
            }
            .signin{
                button{
                    color: #fff;
                    letter-spacing: 1.4px;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 5px;
                    font-size: 0.8rem;
                    font-weight: 200;
                    cursor: pointer;
                    transition: ease-in all 0.5s;
                    background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 96%);   
                    @media screen and (max-width:800px){
                        display: none;
                    }             
                    &:hover{
                        background-color: #A7DAD8;
                        color: #fff;
                        letter-spacing: 2px;
                        box-shadow: 3px 3px 10px rgba(45,139,11,0.8);
                    }
                }
            }
            .register{
                button{
                    color: rgba(45,139,11,1);
                    letter-spacing: 1.4px;
                    padding: 15px 30px;
                    border: 1px solid rgba(45,139,11,1);
                    border-radius: 5px;
                    font-size: 0.8rem;
                    font-weight: 300;
                    cursor: pointer;
                    transition: ease-in all 0.1s;
                    /* background-image: linear-gradient(90deg, rgba(45,139,11,1) 0%, rgba(151,214,149,1) 96%);    */
                    @media screen and (max-width:800px){
                        display: none;
                    }            
                    &:hover{
                        background-color: #A7DAD8;
                        color: #fff;
                        letter-spacing: 2px;
                        box-shadow: 3px 3px 10px rgba(45,139,11,0.8);
                        background-image: linear-gradient(90deg, rgba(45, 139, 11,1) 0%, rgba(151,214,149,1) 96%);
                    }
                }
            }
        }
        
    }

`
