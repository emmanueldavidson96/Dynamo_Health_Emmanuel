import React, { useState } from 'react'
import { FaqSectionContainer } from '../Styles/Faqs.styled'
import { FaPlus } from 'react-icons/fa6'
import {Link} from "react-router-dom"
import Footer from '../Components/Footer'
export default function Faqs() {
    const [question__one, set__question__one] = useState(false)
    const handle__question__one__click = () => {
        set__question__one(!question__one)
    }
    const [question__two, set__question__two] = useState(false)
    const handle__question__two__click = () => {
        set__question__two(!question__two)
    }
    const [question__three, set__question__three] = useState(false);
    const handle__question__three__click = () => {
        set__question__three(!question__three)
    }
    const [question__four, set__question__four] = useState(false);
    const handle__question__four__click = () => {
        set__question__four(!question__four)
    }
    const [question__five, set__question__five] = useState(false)
    const handle__question__five__click = () => {
        set__question__five(!question__five)
    }
    const [question__six, set__question__six] = useState(false);
    const handle__question__six__click = () => {
        set__question__six(!question__six)
    }
    const [question__seven, set__question__seven] = useState(false)
    const handle__question__seven__click = () => {
        set__question__seven(!question__seven)
    }
    const [question__eight, set__question__eight] = useState(false);
    const handle__question__eight__click =() => {
        set__question__eight(!question__eight)
    }
    const [question__nine, set__question__nine] = useState(false);
    const handle__question__nine__click =() => {
        set__question__nine(!question__nine)
    }
    const [question__ten, set__question__ten] = useState(false);
    const handle__question__ten__click = () => {
        set__question__ten(!question__ten)
    }
  return (
    <FaqSectionContainer>
        <div className='faqs__section'>
            <h2>Frequently Asked Questions</h2>
            <div className='questions__answers'>
                <div className='left__side__questions'>
                    <div className='questions'>
                        <div className='question__click'>
                            <h3>What is Concierge Medicine and How Does it Differ from Traditional Healthcare?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__one__click}/>                            
                        </div>
                        {
                            question__one &&
                            <div className='answer__click__open'>
                                <p>
                                    Concierge medicine offers personalized healthcare directly to the patient, 
                                    often in their home or office. Unlike traditional healthcare, 
                                    where doctors may see many patients in a day, 
                                    concierge medicine focuses on more time per patient, accessibility, and tailored services. 
                                    It's ideal for those seeking more personalized and convenient healthcare experiences.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>What Types of Services Does Dynamo Health Offer?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__two__click}/>                            
                        </div>
                        {
                            question__two &&
                            <div className='answer__click__open'>
                                <p>
                                    Dynamo Health specializes in services beneficial for athletes and active individuals, 
                                    including PRP injections, stem cell therapy, corticosteroid injections, 
                                    ultrasound-guided diagnosis and treatments, and IV fluids and electrolytes. 
                                    These services are designed to aid in recovery, enhance performance, and maintain overall health. 
                                    See more <Link to="/services">Services</Link>
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>Who Can Benefit from Dynamo Health's Services?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__three__click}/>                            
                        </div>
                        {
                            question__three &&
                            <div className='answer__click__open'>
                                <p>
                                    Our services are ideal for athletes, fitness enthusiasts, 
                                    and those with specific health conditions that require specialized care. 
                                    Anyone seeking advanced, personalized medical care to enhance their physical performance or 
                                    manage specific health issues can benefit from our services.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>How Do I Schedule an Appointment with Dynamo Health?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__four__click}/>                            
                        </div>
                        {
                            question__four && 
                            <div className='answer__click__open'>
                                <p>
                                    Appointments can be scheduled through our website or by calling our office directly (see contact section). 
                                    We recommend scheduling in advance to ensure availability, 
                                    and we're happy to accommodate your schedule for in-home visits.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>Are Your Services Covered by Insurance?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__five__click}/>                            
                        </div>
                        {
                            question__five &&
                            <div className='answer__click__open'>
                                <p>
                                    Some of our services may be covered by insurance, depending on your policy. 
                                    We advise checking with your insurance provider for specifics. For services not covered, 
                                    we offer various payment options and can discuss these during your consultation.
                                </p>
                            </div>
                        }
                    </div>
                    
                </div>
                <div className='right__side__questions'>
                    <div className='questions'>
                        <div className='question__click'>
                            <h3>What Can I Expect During a Home Visit?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__six__click}/>                            
                        </div>
                        {
                            question__six &&
                            <div className='answer__click__open'>
                                <p>
                                    During a home visit, our healthcare professional will arrive 
                                    at your specified location, fully equipped for the consultation or treatment. 
                                    We ensure a thorough evaluation, administer any necessary treatment, and discuss follow-up care, 
                                    all while maintaining the highest safety and privacy standards.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>How Are Treatments like PRP Injections and Stem Cell Therapy Administered?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__seven__click}/>                            
                        </div>
                        {
                            question__seven &&
                            <div className='answer__click__open'>
                                <p>
                                    PRP injections and stem cell therapy are minimally invasive procedures performed by our skilled professionals. 
                                    They typically involve drawing a sample of your blood (for PRP) or harvesting stem cells, processing them, and then injecting them into the targeted area. 
                                    The entire process is relatively quick and is carried out with your comfort in mind.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>What Are the Potential Risks and Benefits of Corticosteroid Injections?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__eight__click}/>                            
                        </div>
                        {
                            question__eight &&
                            <div className='answer__click__open'>
                                <p>
                                    Corticosteroid injections are effective in reducing inflammation and pain. 
                                    While generally safe, potential risks can include infection, allergic reactions, and localized tissue damage. Our team ensures 
                                    that you are fully informed and that the procedure is appropriate for your condition.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>How Long Does It Take to See Results from Treatments?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__nine__click}/>                            
                        </div>
                        {
                            question__nine &&
                            <div className='answer__click__open'>
                                <p>
                                    The time to see results can vary based on the treatment and individual factors. 
                                    PRP and stem cell therapies may show improvement in weeks to months,
                                    while effects from corticosteroid injections or IV therapy can be felt more quickly. 
                                    We provide a detailed infromation during your consultation.
                                </p>
                            </div>
                        }
                    </div>

                    <div className='questions'>
                        <div className='question__click'>
                            <h3>How Does Dynamo Health Ensure Patient Privacy and Confidentiality?</h3>
                            <FaPlus cursor={"pointer"} onClick={handle__question__ten__click}/>                            
                        </div>
                        {
                            question__ten &&
                            <div className='answer__click__open'>
                                <p>
                                    We adhere to strict privacy policies and are compliant with healthcare privacy laws like HIPAA. 
                                    Patient information is securely handled and shared only with necessary medical personnel involved in your care. 
                                    Confidentiality and trust are paramount in all our interactions.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </FaqSectionContainer>
  )
}
