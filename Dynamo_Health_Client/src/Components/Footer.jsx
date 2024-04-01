import React from 'react';
import { FooterSectionContainer } from '../Styles/Footer.styled';
import logoImg from "../assets/logo.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <FooterSectionContainer>
        <div className='footer__section__container'>
            <div className='footer__about'>
                <div className='logo__section'>
                    <img src={logoImg} alt="" />
                </div>
                <p>
                    Dynamo Health is a concierge medicine company
                </p>
            </div>

            <div className='footer__connect'>
                <h2>Connect</h2>
                <a href="https://www.facebook.com/dynamoMD"><FaFacebook className='social__icon' color='rgba(45,139,11,1)' size={22}/>Facebook</a>
                <a href="https://www.instagram.com/doctordynamo"><FaInstagram className='social__icon' color='rgba(45,139,11,1)' size={22}/>Instagram</a>
                <a href="https://www.linkedin.com/in/yomi-adeyemi-md-37541279/"><FaLinkedin className='social__icon' color='rgba(45,139,11,1)' size={22}/>LinkedIn</a>
                <a href="https://www.tiktok.com/realtokdoc"><FaTiktok className='social__icon' color='rgba(45,139,11,1)' size={22}/>Tiktok</a>
            </div>

            <div className='footer__services'>
                <h2>Services</h2>
                <Link to="/services" className='services__links'>PRP Injections</Link>
                <Link to="/services" className='services__links'>STEM Cell Therapy</Link>
                <Link to="/services" className='services__links'>Conticosteroid Injections</Link>
                <Link to="/services" className='services__links'>Ultrasound guided diagnosis and treatment</Link>
                <Link to="/services" className='services__links'>IV fluids and electrolytes</Link>
            </div>

            <div className='footer__about__company'>
                <h2>Company</h2>
                <Link to="/services" className='company__links'>Services</Link>
                <Link to="/about" className='company__links'>About Us</Link>
                <Link to="/faqs" className='company__links'>FAQS</Link>
                <Link to="/blog" className='company__links'>Blog</Link>
            </div>        
        </div>
    </FooterSectionContainer>
  )
}

export default Footer