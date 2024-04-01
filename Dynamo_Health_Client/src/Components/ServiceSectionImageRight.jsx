import React from 'react'
import { ServiceContainer } from '../Styles/ServicesSection.styled'

export default function ServicesSectionImageRight({name_of_service, description_of_service, picture}) {
  return (
    <ServiceContainer>
        
        <div className='this__service'>
            <h3>{name_of_service}</h3>
            <hr />
            <p>{description_of_service}</p>
        </div>
        <div className='image__container'>
            <img src={picture} />
        </div>
    </ServiceContainer>
  )
}
