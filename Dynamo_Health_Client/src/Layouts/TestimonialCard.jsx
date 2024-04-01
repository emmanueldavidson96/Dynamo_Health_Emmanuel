import React from 'react'
import { TestimonialCardContainer } from '../Styles/TestimonialCard.styled';
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialCard({testimonial_writeup, author_name }) {
  return (
    <TestimonialCardContainer>
      <FaQuoteLeft color='rgba(45,139,11,0.5)' size={40}/>
      <p>{testimonial_writeup}</p>
      <h3>{author_name}</h3>
      <p className='customer'>Our Customer</p>
    </TestimonialCardContainer>
    
  )
}

export default TestimonialCard