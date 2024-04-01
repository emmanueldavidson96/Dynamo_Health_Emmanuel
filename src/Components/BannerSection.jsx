import React from 'react';
import { BannerContainer} from '../Styles/Banner.styled';
import imgHelp from "../assets/hands-699486_1920-removebg-preview.png";
import {motion} from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from '../Utils/Variants';
import doctorImg from "../assets/thedoctor.jpg";
import {Link} from "react-router-dom";

export default function BannerSection() {
  return (
    <BannerContainer>
        <div className='bannner__section'>
            <motion.div className='banner__section__text' whileInView="visible" initial="hidden" variants={fadeInLeftVariant}>
                <div className='banner__maintext'>
                    <h2>
                        Begin Your Journey to Optimal Health
                    </h2>
                    <h2>
                        with Dynamo Health
                    </h2>
                </div>
                <p>
                    At Dynamo Health, we're committed to enhancing your wellbeing by delivering top-tier,
                    personalized medical services directly to you. Specializing in sports, medicine and concierge
                    in-home health services, we cater to your unique needs with excellence.<br/> Ready to elevate your health? Start your journey with us.
                </p>
                <Link to="/contact">
                    <button >GET STARTED</button>
                </Link>
            </motion.div>
            <motion.div className='banner__section__image' variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                <img src={doctorImg} />
            </motion.div>
        </div>
    </BannerContainer>
  )
}
