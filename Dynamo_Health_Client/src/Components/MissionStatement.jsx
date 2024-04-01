import React, { useState } from 'react'
import { MissionStatementContainer } from '../Styles/MissionStatement.styled'
import { FaChevronDown } from "react-icons/fa";
import missionImg from "../assets/Images/mission/17759-cortisone-shot.webp";
import missionImg2 from "../assets/Images/mission/anonymous-doctor-giving-knee-injection-to-the-patient.webp";
import missionImg3 from "../assets/Images/mission/botox-featured.webp";
import missionImg4 from "../assets/Images/mission/Portal-Triad-Mickey-Mouse-Sign-Portal-Vein-CBD-Right-Hepatic-Artery-Hepatobiliary-Ultrasound-2-1024x715.webp";
import {motion} from "framer-motion";
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../Utils/Variants';

export default function MissionStatement() {
    const [compassion, set_compassion] = useState(false);
    const [quality, set_quality] = useState(false)
    const [accessibility, set_accessibility] = useState(false);
    const [collaboration, set_collaboration] = useState(false);
    const [innovation, set_innovation] = useState(false);
  return (
    <MissionStatementContainer>
        <div className='mission__statement__section'>
            <motion.div className='mission__statement__text' variants={fadeInLeftVariant} initial="hidden" whileInView="visible">
                <h2>
                    Mission Statement
                </h2>
                <hr />
                <p>
                    At Dynamo Health, our mission is to redefine healthcare by making it more accessible, personal, and 
                    tailored to the unique needs of each individual. We believe in a world where 
                    healthcare transcends traditional boundaries, where excellence in sports medicine and personalized care comes to you. 
                    Our goal is to empower our clients – from professional athletes to 
                    fitness enthusiasts – with the medical support they need to excel in their endeavors and lead healthier, more active lives.
                </p>

                <h3>Core Values</h3>
                <h4 onClick={()=> set_compassion(!compassion)}>Compassion <FaChevronDown/></h4>
                {
                    compassion &&
                    <p>
                        We approach healthcare with empathy and kindness, recognizing the unique needs of each 
                        individual under our care. Our team is committed to providing not 
                        just medical services but also emotional support, 
                        creating a healing environment for our patients.
                    </p>
                }
                <h4 onClick={() => set_quality(!quality)}>Quality Care <FaChevronDown/></h4>
                {
                    quality &&
                    <p>
                        We uphold the highest standards of medical excellence. 
                        Our skilled professionals deliver evidence-based, patient-centered care to 
                        ensure optimal health outcomes. We continually invest in training and 
                        technology to stay at the forefront of in-home healthcare services.
                    </p>
                }
                <h4 onClick={() => set_accessibility(!accessibility)}>Accessibility <FaChevronDown/></h4>
                {
                    accessibility &&
                    <p>
                        We believe that everyone deserves access to quality healthcare, regardless of their circumstances. 
                        By bringing medical services directly to our patients' homes, 
                        we remove barriers to healthcare access, making it more convenient and inclusive.
                    </p>
                }
                <h4 onClick={() => set_collaboration(!collaboration)}>Collaboration <FaChevronDown/></h4>
                {
                    collaboration &&
                    <p>
                        We foster a collaborative approach to healthcare, working closely with patients, their families, and other healthcare professionals. 
                        By building strong partnerships, we aim to create a 
                        comprehensive and integrated care plan tailored to each individual's needs.
                    </p>
                }
                <h4 onClick={() => set_innovation(!innovation)}>Innovation <FaChevronDown/></h4>
                {
                    innovation &&
                    <p>
                        We embrace innovation to enhance the delivery of healthcare services. Whether through the use of cutting-edge technology or 
                        the development of new care models, we are committed to staying ahead of the curve 
                        and continuously improving the in-home healthcare experience.
                    </p> 
                }           
            </motion.div>
            <div className='mission__statement__images'>
                <motion.div className='images__topsection' variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                    <img src={missionImg} alt="" className='img_top' />
                    <img src={missionImg4} alt="" className='img_side' />                    
                </motion.div>
                <motion.div className='images__downsection' variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
                    <img src={missionImg3} alt="" className='img_bottom'/>
                    <img src={missionImg2} alt="" className='img_beside' />                    
                </motion.div>


            </div>

        </div>
    </MissionStatementContainer>
  )
}
