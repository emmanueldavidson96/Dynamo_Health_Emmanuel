import React from 'react'
import { TestimonialContainer } from '../Styles/Testimonial.styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderSectionContainer } from '../Styles/SliderCard.styled';
import { Quotations } from '../Utils/data';
import TestimonialCard from '../Layouts/TestimonialCard';

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    initialSlide: 0,
    autoplay: true,      
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <TestimonialContainer>
      <div className='testimonial__section'>
        <h2>What People Are Saying</h2>
        <SliderSectionContainer>
          <Slider {...settings}>
              {
                  Quotations.map((quotes) => (
                      <TestimonialCard id={quotes.id} testimonial_writeup={quotes.testimonial} author_name={quotes.author} />
                  ))
              }            
          </Slider>
        </SliderSectionContainer>      
      </div>
    </TestimonialContainer>
  )
}