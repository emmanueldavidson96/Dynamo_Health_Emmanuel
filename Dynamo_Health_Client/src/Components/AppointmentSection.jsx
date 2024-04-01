import React from 'react'
import { AppointmentContainer } from '../Styles/Appointment.styled'
import {Link} from "react-router-dom";

function AppointmentSection() {
  return (
    <AppointmentContainer>
        <div className='appointment__container'>
            <div className='appointment__leftsection'>
                <h1>Ready to take the next step?</h1>
                <h2>You will be getting a response within 5 hours from the team.</h2>
            </div>
            <div className='appointment__rightsection'>
                <Link to="/contact">
                  <button>Request An Appointment</button>
                </Link>
            </div>
        </div>
    </AppointmentContainer>
  )
}

export default AppointmentSection