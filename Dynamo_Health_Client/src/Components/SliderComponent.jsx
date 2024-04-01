import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderSectionContainer } from '../Styles/SliderCard.styled';
import SliderCard from '../Layouts/SliderCard';
import { healthworkers__information } from '../Utils/data';

export default function SliderComponent() {
    
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
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
    <SliderSectionContainer >
        <Slider {...settings}>
            {
                healthworkers__information.map((healthworker) => (
                    <SliderCard id={healthworker.id} healthworkImg={healthworker.healthworkImg} healthworkName={healthworker.healthworkName} healthworkWork={healthworker.healthworkWork}/>
                ))
            }
            
        </Slider>      
    </SliderSectionContainer>
  )
}
