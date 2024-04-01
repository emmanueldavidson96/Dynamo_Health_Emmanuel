import React from 'react'
import { HomeSection } from '../Styles/Home.styled'
import BannerSection from '../Components/BannerSection'
import Services from '../Components/Services'
import ShortStory from '../Components/ShortStory'
import HealthcareWorkers from '../Components/HealthcareWorkers'
import MissionStatement from '../Components/MissionStatement'
import HowYouBenefit from '../Components/HowYouBenefit'
import Testimonial from '../Components/Testimonial'
import AppointmentSection from '../Components/AppointmentSection'
import Footer from '../Components/Footer'


export default function Home() {
  return (
    <HomeSection>
        <BannerSection/>
        <Services/>
        <MissionStatement/>
        <HowYouBenefit/>
        <Testimonial/>
        <AppointmentSection/>
        <Footer/>
    </HomeSection>
  )
}
