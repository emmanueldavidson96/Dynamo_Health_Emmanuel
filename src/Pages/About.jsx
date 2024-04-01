import React from 'react'
import { AboutContainer } from '../Styles/About.styled'
import aboutImg from "../assets/Images/mission/cdc-bsT-u4nBe7o-unsplash.jpg";
import imgOne from "../assets/Images/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg";
import imgTwo from "../assets/Images/austin-distel-7bMdiIqz_J4-unsplash.jpg";
import imgThree from "../assets/Images/bruno-rodrigues-279xIHymPYY-unsplash.jpg";
import imgFour from "../assets/Images/dalton-ngangi-ZCztndOWdjs-unsplash.jpg";
import imgFive from "../assets/Images/jeremy-alford-O13B7suRG4A-unsplash.jpg";
import imgSix from "../assets/Images/usman-yousaf-SakqLf78KVo-unsplash.jpg";
import logoImg from "../assets/logo.jpg";
import ourStoryImg from "../assets/About/doctor-1-ht-er-230427_1682628188607_hpMain_16x9.webp";
import ourMissionImg from "../assets/About/indian-specialist-consultation-medical-experience-sharing-colleagues-paper-desk-information-black-doctor-stare-multinational-123186020.webp";
import ourServicesImg from "../assets/About/premium_photo-1663040621105-7d40069c8049.webp";
import whychooseusImg from "../assets/About/TC_Jan2021_Medical_Mistrust_Black_Americans_3x2_hires.webp";
import ourpromiseImg from "../assets/About/360_F_578457559_8g2ghxx2u5WBBvfZnVEBn0lZHLgDS0xY.webp";
import joinusImg from "../assets/About/premium_photo-1663040621105-7d40069c8049.webp";
import Footer from '../Components/Footer';

function About() {
  return (
    <AboutContainer>
        <div className='about__dynamo__health__banner__top'>
            <h2>About</h2>
            <hr /> 
            <p>About Dynamo Health: Pioneering Personalized Healthcare</p>              
        </div>
        <div className='about__section'> 
            
            <div className="about__dynamo__health__content">
                <div className='our__story__container'>
                    <img src={ourStoryImg} alt=""/>
                </div>
                <div className='our__story__content'>
                    <h3>Our Story</h3>
                    <p>
                        Welcome to Dynamo Health, a leader in revolutionizing healthcare delivery. 
                        Founded with the vision of bringing advanced medical services directly to the homes of those who need them the most, 
                        Dynamo Health has emerged as a pioneer in the realm of concierge medicine, particularly in sports medicine. 
                        Our journey began with a simple yet powerful idea: to merge the worlds of sports medicine and personalized care, 
                        ensuring that athletes and active individuals have access to top-notch 
                        medical services in the comfort and privacy of their own homes.
                    </p>
                </div>
            </div>

            <div className="our__mission__dynamo__health__content">
                <div className='our__mission__content'>
                    <h3>Our Mission</h3>
                    <p>
                        At Dynamo Health, our mission is to redefine healthcare by making it more accessible, personal, and 
                        tailored to the unique needs of each individual. We believe in a world where 
                        healthcare transcends traditional boundaries, where excellence in sports medicine and personalized care comes to you. 
                        Our goal is to empower our clients – from professional athletes to 
                        fitness enthusiasts – with the medical support they need to excel in their endeavors and lead healthier, more active lives.
                    </p>
                </div>
                <div className='our__mission__container'>
                    <img src={ourMissionImg} alt=""/>
                </div>
            </div> 

            <div className="our__services__dynamo__health__content">
                <div className='our__services__container'>
                    <img src={ourServicesImg} alt=""/>
                </div>
                <div className='our__services__content'>
                    <h3>Our Services</h3>
                    <p>
                        Specializing in sports medicine, Dynamo Health offers a range of cutting-edge services including PRP injections, stem cell therapy, 
                        corticosteroid injections, ultrasound-guided diagnosis, and IV fluid therapies. 
                        Our team of medical professionals is not only skilled in advanced medical procedures but also in delivering these services with a 
                        personal touch that respects your privacy and busy schedule.
                    </p>
                </div>
            </div>

            <div className="why__chooseus__dynamo__health__content">
                <div className='why__chooseus__content'>
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li><b>Expertise in Sports Medicine: </b>Our Medical professionals are experts in their fields, equipped
                        with the knowledge and technology to provide specialized care for sports-related needs.
                        </li>
                        <li><b>Convenience and Comfort: </b>Receive top-tier medical care in the comfort of your home, eliminating the need for stressful hospital visits.</li>
                        <li><b>Personalized Care Plans: </b>Each treatment and service is tailored to fit your unique health requirments and fitness goals.</li>
                        <li><b>Commitment to Excellence: </b>We are dedicated to maintaining the highest standards of care, ensuring each patient recieves the best possible treatment.</li>
                    </ul>
                </div>
                <div className='why__chooseusimg__container'>
                    <img src={whychooseusImg} alt=""/>
                </div>
            </div> 

            <div className="our__services__dynamo__health__content">
                <div className='our__services__container'>
                    <img src={ourpromiseImg} alt=""/>
                </div>
                <div className='our__services__content'>
                    <h3>Our Promise</h3>
                    <p>
                        At Dynamo Health, we are committed to not just treating symptoms but enhancing
                        your overall quality of life. We promise to deliver healthcare that is not only effective but also empathetic and personalized.
                        Your health, performance, and comfort are our top priorities.
                    </p>
                </div>
            </div>

            <div className="our__team__dynamo__health__content">
                <div className='our__team__content'>
                    <h3>Our Team</h3>
                    <p>
                        With several years of experience to his credit in science and medicine, Dr. Adeyemi has found success as a physician. 
                        In this capacity, he works for the Charles R. Drew University of Medicine and Science. 
                        Since 2021, he has focused his efforts on caring for patients from birth through adulthood. 
                        He specializes in applications of sports and regenerative medicine for chronic joint injuries but also provides patients with inpatient services. 
                        Additionally, he has been the managing editor for The African Dynamo since 2013, covering stories on the intersection of culture, health, 
                        medicine and lifestyle which affect African and its Diaspora.
                    </p>
                    <p>
                        Long dedicated to civic advocacy, Dr. Adeyemi is a fundraising volunteer with the National Medical Association 
                        and is a founding member and president of the Charles R. Drew University sports medicine club. 
                        He lends his medical expertise as a sideline physician for Los Angeles united school district high school football games and volunteers as a certified ringside physician with USA boxing. 
                        He is a member of the American Medical Society for Sports Medicine, the California Academy of Family Physicians, 
                        the American Academy of Family Physicians and the American College of Sports Medicine.
                    </p>
                    <p>
                        Prior to his current role, Dr. Adeyemi served as an undergraduate research fellow for the Wake Forest University Institute for Regenerative Medicine from 2009 until 2012. 
                        He served as a medical scribe for ProScribe and for Scribe Partners between 2015 and 2016. 
                        He was also an instructor for the Duke University Talent Identification Program in 2015 and 2017 and the Wake Forest chapter president of the Minority Association of Pre-Medical Students.
                    </p>
                    <p>
                        Prior to embarking on his professional journey, Dr. Adeyemi earned a Bachelor of Science in biology from Wake Forest University in 2012, 
                        with a double minor in chemistry and philosophy. He then attained a Master of Science in biomedical sciences and engineering from the same institution in 2015. 
                        He subsequently received a Doctor of Medicine from St. George's University in 2021. In recognition of his excellent work, 
                        he received the Zachary T. Smith Leadership Scholarship and Wake Forest College Scholarship for his studies at Wake Forest University and the Geoffrey H. Bourne Scholarship for his education at St. George's University. He was also recognized as an Emerging Physician Leader by the American College of Sports Medicine in 2022. 
                        Dr. Adeyemi's story has been featured in author Heather Dennis's Biography "Why Must I".
                    </p>
                </div>
                <div className='our__team__container'>
                    <img src={ourMissionImg} alt=""/>
                </div>
            </div>

            <div className="our__services__dynamo__health__content">
                <div className='our__services__container'>
                    <img src={joinusImg} alt=""/>
                </div>
                <div className='our__services__content'>
                    <h3>Join Us</h3>
                    <p>
                        Embark on a journey to optimal health and performance with Dynamo Health. 
                        We invite you to explore our services and see how we can be a part of your health and wellness journey. 
                        Contact us today to learn more or to schedule your first appointment.
                    </p>
                </div>
            </div>




            <div className='appointment__section'>
                <div className='appointment__container'>
                    <div className='appointment__text'>
                        <h2>Ready to take the next step?</h2>
                        <p>You will be getting a response within 5 hours from the team.</p>
                    </div>
                    <button>Request An Appointment</button>
                </div>
            </div> 
        </div>
        <Footer/>
    </AboutContainer>
  )
}

export default About