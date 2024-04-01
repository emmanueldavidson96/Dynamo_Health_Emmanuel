import React from 'react'
import { ServicesContainer } from '../Styles/Services.styled';
import corticosteroidImage from "../assets/Service/Injection-knee-ama-regenerative-medicine-0821be072cc846eba521b6eebc13f7ab.webp";
import stemcellimage from "../assets/Service/63e160865d7577b8729f67b1_63b7075666247a0a5173534f_29fd647d-ae6d-4cdf-8418-9e531d007af5copy.webp";
import prpImage from "../assets/Service/prp-injection-into-knee.webp";
import ultrasoundImage from "../assets/Service/GettyImages-728756181-0372ea3082164dcd86cf6554ca70d318.webp";
import ivFluids from "../assets/Service/IV-Drip-400x334.webp";
import { FaArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion";
import { fadeInBottomVariant, fadeInTopVariant } from '../Utils/Variants';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <ServicesContainer>
        <div className='services__container'>
            <motion.h4 variants={fadeInTopVariant} initial="hidden" whileInView="visible">EMBRACE A VIBRANT LIFESTYLE</motion.h4>
            <motion.h2 variants={fadeInTopVariant} initial="hidden" whileInView="visible">YOUR SANCTUARY FOR HOLISTIC HEALTH</motion.h2>
            <motion.p variants={fadeInTopVariant} initial="hidden" whileInView="visible">Dynamo Health provides comprehensive services that nurture and ensures a lifetime of wellness.
            Partner with us for a holistic appraoach to health, right in the comfort of your home.
            </motion.p>
            
            <motion.div className='services__offered' variants={fadeInBottomVariant} initial="hidden" whileInView="visible">                
                <div className='chiropatic__section'>
                    <img src={prpImage} alt="" />
                    <h3>PRP Injections</h3>
                    <p>Dynamo Health gives you excellent chiropractic 
                        services from tested and trusted practicioners.
                    </p>
                    <Link className='read__more' to="/services">Read more <FaArrowRight color='rgba(45,139,11,1)'/></Link>
                </div>
                
                <div className='therapy__section'>
                    <img src={stemcellimage} alt="" />
                    <h3>STEM Cell Therapy</h3>
                    <p>Dynamo Health gives you excellent chiropractic 
                        services from tested and trusted practicioners.
                    </p>
                    <Link className='read__more' to="/services">Read more <FaArrowRight color='rgba(45,139,11,1)'/></Link>

                </div>
                
                <div className='nutrition__section'>
                    <img src={corticosteroidImage} alt="" />
                    <h3>Corticosteroid Injections</h3>
                    <p>Dynamo Health gives you excellent chiropractic 
                        services from tested and trusted practicioners.
                    </p>
                    <Link className='read__more' to="/services">Read more <FaArrowRight color='rgba(45,139,11,1)'/></Link>

                </div>
                
                <div className='massage__section'>
                    <img src={ultrasoundImage} alt="" />
                    <h3>Ultrasound Guided Diagnosis and Treatment</h3>
                    <p>Dynamo Health gives you excellent chiropractic 
                        services from tested and trusted practicioners.
                    </p>
                    <Link className='read__more' to="/services">Read more <FaArrowRight color='rgba(45,139,11,1)'/></Link>
                </div>

                <div className='massage__section'>
                    <img src={ivFluids} alt="" />
                    <h3>IV Fluids and Electrolytes</h3>
                    <p>Dynamo Health gives you excellent chiropractic 
                        services from tested and trusted practicioners.
                    </p>
                    <Link className='read__more' to="/services">Read more <FaArrowRight color='rgba(45,139,11,1)'/></Link>
                </div>
            </motion.div>
            <motion.button variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
                <Link to="/services" className='discover__more'>
                    Discover More
                </Link>
            </motion.button>


        </div>
    </ServicesContainer>
  )
}
