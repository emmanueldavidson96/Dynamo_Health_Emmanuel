import React from 'react'
import { SliderCardContainer } from '../Styles/SliderCard.styled'

export default function SliderCard({healthworkImg, healthworkName, healthworkWork}) {
  return (
    <SliderCardContainer>
        <img src={healthworkImg} alt="" />
        <h3>{healthworkName}</h3>
        <p>{healthworkWork}</p>
    </SliderCardContainer>
  )
}
