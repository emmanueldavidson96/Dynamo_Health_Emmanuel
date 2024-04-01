import React from 'react'
import { ServiceContainer } from '../Styles/ServicesSection.styled'

export default function ServicesSection({name_of_service, description_of_service, picture}) {
  return (
    <ServiceContainer>
        <div className='image__container'>
            <img src={picture} />
        </div>
        <div className='this__service'>
            <h3>{name_of_service}</h3>
            <hr />
            <p>{description_of_service}</p>
            <button>MORE INFO</button>
        </div>
    </ServiceContainer>
  )
}
