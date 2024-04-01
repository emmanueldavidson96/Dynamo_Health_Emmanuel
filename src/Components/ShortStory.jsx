import React from 'react'
import { ShortStoryContainer } from '../Styles/ShortStory.styled'
import hospitalImg from "../assets/cdc-EiNf4bqogMk-unsplash.jpg";
import {motion} from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from '../Utils/Variants';

export default function ShortStory() {
  return (
    <ShortStoryContainer>
        <div className='shortstory__container'>
            <motion.div className='shortstory__image' variants={fadeInLeftVariant} initial="hidden" whileInView="visible" >
                <img src={hospitalImg} alt=""/>
            </motion.div>
            <motion.div className='shortstory__dstory' variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                <h2>Short Story About Our</h2>
                <h2>Medical Accomplishments</h2>
                <p>A Translator and Interpreter by Training, I specialised in communicating
                    medical content soon after graduating from University in both Vienna, Austria and Monterey, California.
                </p>
                <p>
                    Dynamo Health allows me to combine my life-long passion of 
                    providing life saving health care to needy patients across the country. 
                </p>

                <motion.div className='patients__stats' variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                    <div className='patients__records'>
                        <h2>440+</h2>
                        <p>Happy Patients</p>
                    </div>
                    <div className='patients__records'>
                        <h2>80+</h2>
                        <p>Expert Doctors</p>
                    </div>
                    <div className='patients__records'>
                        <h2>10+</h2>
                        <p>Award Winner</p>
                    </div>
                    <div className='patients__records'>
                        <h2>80+</h2>
                        <p>Hospital wards</p>
                    </div>
                </motion.div>

                <button>
                    Learn More
                </button>

            </motion.div>
        </div>
    </ShortStoryContainer>
  )
}
