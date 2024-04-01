import React from 'react'
import { ContactContainer } from '../Styles/Contact.styled'
import { FaLocationPin, FaLocationPinLock, FaMapLocation, FaLocationArrow } from 'react-icons/fa6'
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaFacebook } from 'react-icons/fa6'

export default function ContactUs() {
  return (
    <ContactContainer>
        <div className='contact__section'>
            <div className='top__header__section'>
                <h2>Contact Me</h2>
                <p>Feel free to get in touch with me...</p>
            </div>

            <div className='doctors__online__address'>
                <div className='doctors__location'>
                    <FaLocationPin size={30} color='rgba(45,139,11,1)'/>
                    <p>54125 Spring Garden Rd.</p>
                    <p>Halifax, N3 B3-091</p>
                    <p>+1 902 403 2000</p>
                </div>

                <div className='doctors__online'>
                    <FaLocationPin size={30} color='rgba(45,139,11,1)'/>
                    <p>54125 Spring Garden Rd.</p>
                    <p>Halifax, N3 B3-091</p>
                    <p>+1 902 403 2000</p>
                </div>

                <div className='doctors__general__contacts'>
                    <h3>General Contacts</h3>
                    <p> <b>Inquries: </b>adeyemi@gmail.com</p>
                    <p><b>Support: </b>ade@zora.io</p>
                    <div className='socials__contacts'>
                        <a href='https://www.instagram.com/doctordynamo'>
                            <FaInstagram size={23} color='rgba(45,139,11,1)'/>
                        </a>
                        <a href="https://www.facebook.com/dynamoMD">
                            <FaFacebook size={23} color='rgba(45,139,11,1)'/>
                        </a>
                        <a href="https://www.tiktok.com/realtokdoc">
                            <FaTiktok size={23} color='rgba(45,139,11,1)'/>
                        </a>
                        <a href="https://www.linkedin.com/in/yomi-adeyemi-md-37541279/">
                            <FaLinkedin size={23} color='rgba(45,139,11,1)'/>
                        </a>
                    </div>
                </div>
            </div>

            <form className='send__a__message__section'>
                <h2>Send Me a Message</h2>
                <div className='send__a__message__section__name'>
                    <div className='send__a__message__section__firstName'>
                        <label htmlFor="FirstName">First Name</label>
                        <input type='text' placeholder='First name...' />
                    </div>
                    <div className='send__a__message__section__lastName'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder='Last name'/>
                    </div>
                </div>
                <div className='send__a__message__email__and__phonenumber'>
                    <div className='email__subsection'>
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='name@gmail.com'/>
                    </div>
                    <div className='phone__number'>
                        <label htmlFor="Phonenumber">Phone Number</label>
                        <input type="text" placeholder='+1 908 1228 1222'/>
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Send me a message...'>

                </textarea>
                <button>Send Message</button>

            </form>

            <div className='footer__section'>
            </div>
        </div>

    </ContactContainer>
  )
}
