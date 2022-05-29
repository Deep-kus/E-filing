import React from 'react'
import './Landing.css'
import heroimage from '../../Assets/heroImage.png'
import ereturn from '../../Assets/ereturn.png'
import accounting from '../../Assets/acounting.png'
import audit from '../../Assets/audit.png'
import about from '../../Assets/about.png'
import startup from '../../Assets/startup.png'
import digitalIndia from '../../Assets/digitalIndia.png'
import makeIndia from '../../Assets/makeIndia.png'
import avatar from '../../Assets/avatar.png'
import back from '../../Assets/Back.png'
import next from '../../Assets/next.png'
import Location from '../../Assets/Location.png'
import Mail from '../../Assets/Mail.png'
import Phone from '../../Assets/Phone.png'


export default function Landing() {
    return (
        <div className='landing col-100'>
            <div className="hero flex-row-center">
                <div className="col-50 align-center">
                    <h1>Find all your Solutions
                        <span> under the single roof
                            of </span>
                        EarlyFilings
                    </h1>
                    <div className="flex-row-start search">
                        <button>Search</button>
                        <input type="text" placeholder='Which Service you want..........' />
                    </div>

                </div>
                <div className="col-50">
                    <img src={heroimage} alt="" />
                </div>

                <div className="quickLinks">
                    <h2>Get your services in Few clicks</h2>
                    <span></span>
                    <div className="links flex-row-center g-1">
                        <div className="link">
                          <a href=""><p> Registrations </p></a>  
                        </div>
                        <div className="link">
                           <a href="/itr"><p> Income Tax Return  </p></a> 
                        </div>
                        <div className="link">
                         <a href="/gstreturn"> <p> GST Filing</p>  </a>   
                        </div>
                        <div className="link">
                        <a href=""> <p> E-Compliances  </p></a>   
                        </div>

                    </div>
                </div>
            </div>

            <div className="services col-100 align-center">
                <h2>Our Services</h2>
                <div className="service-container">
                    <div className="serviceCard">
                        <img src={ereturn} alt="" />
                        <div className="title">
                            <p>E-Return and Compliances</p>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <img src={accounting} alt="" />
                        <div className="title">
                            <p>Accounting </p>
                        </div>
                    </div>

                    <div className="serviceCard">
                        <img src={audit} alt="" />
                        <div className="title">
                            <p>Audits</p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="aboutus col-100 align-center">
                <h2>About Us</h2>
                <div className="container flex-row-between align-stretch">
                    <div className="col-50">
                        <img src={about} alt="" />
                    </div>
                    <div className="col-50 ">
                        <h3>About The Firm</h3>
                        <p>EarlyFiling.com is a motivated and progressive concept conceived by like-
                            minded people,which helps small, medium and large businesses to fulfil all
                            compliance requirements of Indian Laws. It is a platform managed, operated
                            and driven by top-notch CA, CS, IT professionals, Lawyers and Influencers,
                            who have vast experiences into the respective fields. What differentiates us
                            from others is our pricing, TAT, dedicated teams of professionals, whom we call
                            Compliance Managers, digitally advanced platforms for client serving, among
                            other things. </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

            <div className="support col-100 align-center">
                <h2>We Support</h2>
                <div className="container">
                    <div className="card">
                        <h3>Startup India</h3>
                        <p>We support the Startup India
                            initiative that aims to
                            accelerate entrepreneurship
                            in the country and create startups.
                        </p>
                        <img src={startup} alt="" />

                    </div>
                    <div className="card">
                        <h3>Digital India</h3>
                        <p>We support the Digital India initiative for
                            digitising Government activities and
                            helping improve digital literacy.
                        </p>
                        <img src={digitalIndia} alt="" />

                    </div>
                    <div className="card">
                        <h3>Make In India</h3>
                        <p>We support the Make in India initiative
                            tha encourages and facilitates foreign
                            investment into the country.
                        </p>
                        <img src={makeIndia} alt="" />

                    </div>
                </div>
            </div>

            <div className="review col-100 align-center" >
                <h2>Review from Our Clients</h2>
                <div className="container">
                    <div className="back">
                        
                    </div>
                    <div className="carousal">
                        <div className="card">
                            <p>
                                I am very happy that I am connected to your
                                company. I have liked the service of your company,
                                which provides me the right time for every
                                information. Thank you very much to all your
                                employees. I will always be connected to your
                                company and will tell everyone company. team.
                                about your thank you
                            </p>
                            <div className="profile flex-row-start g-1">

                                <img src={avatar} alt="" />

                                <p>Pranay Shukla</p>
                            </div>
                        </div>
                        <div className="flex-row-end g-1 my-1">
                            <button><img src={back} alt="" /></button>
                            <button><img src={next} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact col-100 align-center">
                <div className="back"></div>
                <div className="form">
                    
                    <div className="col-50">
                        <h1>Get In Touch
                            With US</h1>
                        <p>We encourage you to contact us with any
                            Question orcomments you may have</p>
                        <div className="icon flex-row-start align-center g-1">
                            <img src={Location} alt="" />
                            <p>Bhopal ,India</p>
                        </div>
                        <div className="icon flex-row-start align-center g-1">
                            <img src={Mail} alt="" />
                            <p>info@earlyfilings.com</p>
                        </div>
                        <div className="icon flex-row-start align-center g-1">
                            <img src={Phone} alt="" />
                            <p>+91 9111010801</p>
                        </div>

                    </div>
                    <div className="col-50">
                        <form action="">
                            <div className="col align-start">
                                <label htmlFor="">Name*</label>
                                <input type="text" placeholder='Enter you name'/>
                            </div>
                            <div className="col align-start">
                                <label htmlFor="">Email*</label>
                                <input type="text" placeholder='Enter you email'/>
                            </div>
                            <div className="col align-start">
                                <label htmlFor="">Phone*</label>
                                <input type="text" placeholder='Enter you phone number'/>
                            </div>
                            <div className="col align-start">
                                <label htmlFor="">Message*</label>
                                <textarea rows={8} type="text" placeholder='Enter you message'/>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
