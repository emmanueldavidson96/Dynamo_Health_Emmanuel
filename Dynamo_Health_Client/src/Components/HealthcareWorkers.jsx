import React from 'react'
import { HealthWorkersContainer } from '../Styles/HealthcareWorkers.styled'
import SliderComponent from './SliderComponent'
import {motion} from "framer-motion";
import { fadeInTopVariant } from '../Utils/Variants';

export default function HealthcareWorkers() {
  return (
    <HealthWorkersContainer>
        <div className='healthcare__workers'  >
            <motion.h2 variants={fadeInTopVariant} initial="hidden" whileInView="visible">Our Dedicated Health Workers</motion.h2>
            <motion.p variants={fadeInTopVariant} initial="hidden" whileInView="visible">Get to know our very skilled team of doctors and health workers.</motion.p>
            <SliderComponent/>
        </div>
    </HealthWorkersContainer>
  )
}
