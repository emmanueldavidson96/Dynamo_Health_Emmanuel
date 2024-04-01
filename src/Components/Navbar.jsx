import React, { useState, useContext, useEffect} from 'react'
import { NavbarContainer } from '../Styles/Navbar.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import doctorImg from "../assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion"
import { fadeInBottomVariant, fadeInLeftVariant,fadeInBottomNav } from '../Utils/Variants';
import { UserContext } from '../ContextApi/AuthContext';
import axios from "axios";
import {URL} from "../Utils/Url";

export default function Navbar() {
    const [dropdown, set__dropdown] = useState(false)
    const handle__dropdown = () => {
        set__dropdown(!dropdown)
    }
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useContext(UserContext);
    
    const getCurrentUserLoggedIn = async () => {
        const response = await axios.get(URL+"api/user/currentloggeduser", {withCredentials:true})
    }
    useEffect(() => {
        getCurrentUserLoggedIn()
    }, [])

    const this__user = currentUser?.username;
    let isadminstrator = false
    
    if(this__user === "admin@realtokdoc"){
        isadminstrator = true;
    }

  return (
    <NavbarContainer>
        <div className='nav__bar__section'>
            <Link to="/">
                <div className='logo__section'>
                    <img src={doctorImg} />
                </div>
            </Link>

            <div className='navigation__section'>
                <Link to="/services" className='web__links'>Services</Link>
                <Link to="/about" className='web__links'>About Us</Link>
                <Link to="/faqs" className='web__links'>FAQS</Link>
                <Link to="/blog" className='web__links'>Blog</Link>
                <Link to="/contact" className='web__links'>Contact</Link>
            </div>
            {
                !this__user &&
                <div className='contact__section'>
                    <Link to="/login" className='signin'>
                        <button>LOG IN</button>
                    </Link>                
                    <Link to="/register" className='register'>
                        <button>REGISTER</button>
                    </Link>
                </div>
            }
            {
                this__user &&
                <div className='contact__section'>
                    <p>Hello, <span className='this__user__username'>{this__user}</span></p>
                    {
                        isadminstrator &&
                        <Link to="/admindashboard" className='register'>
                            <button>Dashboard</button>
                        </Link>
                    }
                </div>
            }            
            <div className='hamburger__area'  >
                <GiHamburgerMenu color="rgba(45,139,11,1)" cursor={"pointer"} onClick={handle__dropdown}/>
            </div>
        </div>
        {
            dropdown &&
            <motion.div className='dropdown__area' whileInView="visible" initial="hidden" variants={fadeInBottomNav}>
                <Link to="/services" className='web__links'>Services</Link>
                <Link to="/about" className='web__links'>About Us</Link>
                <Link to="/faqs" className='web__links'>FAQS</Link>
                <Link to="/blog" className='web__links'>Blog</Link>
                <Link to="/contact" className='web__links'>Contact</Link>
                {
                    isadminstrator &&
                    <Link to="/admindashboard" className='register'>
                        <button>DASHBOARD</button>
                    </Link>
                }
                {
                    !this__user &&
                    <div className='contact__section__menu'>
                        <Link to="/login" className='signin'>
                            <button>LOG IN</button>
                        </Link>                
                        <Link to="/register" className='register'>
                            <button>REGISTER</button>
                        </Link>
                        
                    </div>
                }
            </motion.div>
        }
    </NavbarContainer>
  )
}
