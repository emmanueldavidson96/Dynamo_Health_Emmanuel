import React from 'react'
import { ServiceContainer } from '../Styles/Service.styled'
import { ServicesInformation } from '../Utils/data'
import ServicesSection from '../Components/ServicesSection'

export default function Services() {
  return (
    <ServiceContainer>
        <div className='services__section'>
            <h1>SERVICES</h1>
            {
                ServicesInformation.map((service) => 
                    <ServicesSection name_of_service={service.name_of_service} description_of_service={service.description_of_service} id={service.id} picture={service.picture}/>
                )
            }
        </div>
    </ServiceContainer>
  )
}
