import React from 'react'
import {BenefitSectionContainer} from "../Styles/HowYouBenefit.styled";
import { FaSackDollar, FaUserDoctor, FaHandHoldingMedical } from "react-icons/fa6";

export default function HowYouBenefit() {
  return (
    <BenefitSectionContainer>
      <div className='section__area'>
        <h2>HOW YOU BENEFIT</h2>
        <h4>We Spread Care to Provide Quality Life</h4>
        <p>At Dynamo Health we are particular about the comfort and health of our customers.</p>
        <hr />
        
        <div className='section__area__benefits'>
          
          <div className='section__affordable'>
            <FaSackDollar color='rgba(45,139,11,1)' size={30}/>
            <h3>Cost Effective</h3>
            <p>
              In some cases, in-home health care can be 
              more cost-effective than institutional care. 
              It eliminates the need for room and board in 
              a healthcare facility, reducing overall healthcare expenses.
            </p>

          </div>

          <div className='section__professional'>
            <FaUserDoctor color='rgb(255,255,255)' size={30}/>
            <h3>Professional Doctors</h3>
            <p>
              In-home care facilitates a closer relationship between the patient and 
              healthcare providers, leading to better communication and 
              understanding of the patient's overall health and needs.
            </p>
          </div>

          <div className='section__satisfaction'>
            <FaHandHoldingMedical color='rgba(45,139,11,1)' size={30}/>
            <h3>Effective Treatments</h3>         
            <p>
              Patients can receive care in a familiar and comfortable environment, 
              which can contribute to their overall well-being and emotional health.
            </p>

          </div>
        </div>
      </div>
    </BenefitSectionContainer>
  )
}
