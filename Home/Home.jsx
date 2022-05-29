import React from "react";
import "./Home.css";
import man from "./man3.png";
import startup from "./startup.png";
import make from "./make.png";
import digital from "./digital.png";
import about from "./about.png";
import e2 from "./e2.png";
import e1 from "./e1.png";
import aatm from "./aatm.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    return (<>
        <div className="home_container">
            <div className="left_head">
                <div className="head_child">
                    <h1 className="E_head"> Early Filings & Simple  Registration</h1>
                </div>
                <div className="itr">
                    ITR-1 - 299,  PAN - Free, UAM - 99, GST - 599
                </div>
                <div className="home_btn"><button>Get Started</button></div>
            </div>
            <div className="right">
                <div className="img_div">   <img src={man} alt="" /></div>

            </div>
        </div>


        {/* Services Section  */}

        <div className="service_container">
            <div className="our_services"><h4>OUR SERVICES</h4></div>
            <div className="providing"><h2>We Are Providing</h2></div>
            <div className="startup">
                <div className="s_child">
                    <div className="card1">
                        <h5>StartUp India </h5>
                        <p>We support the Startup India initiative that
                            aims to accelerate entrepreneurship in the
                            country and create startups.</p>
                        <div className="s_image">
                            <img src={startup} alt="" />
                        </div>
                    </div>
                    <div className="card1">
                        <h5>Digital India </h5>
                        <p>We support the Digital India initiative for
                            digitising Government activities and
                            helping improve digital literacy.</p>
                        <div className="s_image1">
                            <img src={digital} alt="" />
                        </div>
                    </div>
                    <div className="card1">
                        <h5>Make In India</h5>
                        <p>We support the Make in India initiative that
                            encourages and facilitates foreign
                            investment into the country.</p>
                        <div className="s_image2">
                            <img src={make} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* Services Section  */}

        {/* About  */}
        <div className="about">
            <div className="about_child">
                <div className="about_left"> <img src={about} alt="" /></div>

                <div className="about_right">
                    <div className="about_us"><h4>ABOUT US</h4></div>
                    <div className="about_firm"><h2>About The Firm</h2></div>
                    <div className="about_para"> <p>S B C J & Associates (Formerly Known as Jitendra Tiwari & Co.) was set up in the
                        year 1994. The Firm’s name Jitendra Tiwari & Co. has been charged w.e.f.  24.05.2018
                        with the prior approval vide letter no. 5-CA/M& CMSS/FC180000812/007051C dt.
                        27/06/2018 of ICAI, New Dehli without effecting seniority, experience and existence.

                    </p></div>
                    <div className="about_btn"><a href="/about">Read More</a></div>


                </div>

            </div>
        </div>

        {/* About  */}

        {/* E-filing */}

        <Carousel className="carousel"  autoPlay={true} infiniteLoop={true} interval={2000}>
            {/* <div  className="carousel1"> */}
            <div className="e_filing">
                <div className="e_head"><h2>Welcome to E Filings</h2></div>
                <div className="e_child">
                    <div className="e_card">
                        <div className="e_head2"><h2>We are the group of Experts.</h2></div>
                        <div className="epara"><p>A group of experts committed to provide
                            the simple and easy solution for
                            registrations & fillings. <br /> <br />

                            We are offering the specialised services to
                            individuals and businesses. We are present
                            across India and supporting our clients on
                            site as well. We are having pool of the
                            experts from various fields including
                            Income Tax, GST, FEMA, Banking, Auditing,
                            Reporting & Litigation.</p></div>
                    </div>
                    <div className="e_card1"><img src={e2} alt="" /></div>
                    <div className="e_card2"><img src={e1} alt="" /></div>
                </div>

            </div>


            {/* </div> */}

            <div className="e_filing">
                <div className="e_head"><h2>Welcome to E Filings</h2></div>
                <div className="e_child">
                    <div className="e_card">
                        <div className="e_head2"><h2>We are the group of Experts.</h2></div>
                        <div className="epara"><p>A group of experts committed to provide
                            the simple and easy solution for
                            registrations & fillings. <br /> <br />

                            We are offering the specialised services to
                            individuals and businesses. We are present
                            across India and supporting our clients on
                            site as well. We are having pool of the
                            experts from various fields including
                            Income Tax, GST, FEMA, Banking, Auditing,
                            Reporting & Litigation.</p></div>
                    </div>
                    <div className="e_card1"><img src={e2} alt="" /></div>
                    <div className="e_card2"><img src={e1} alt="" /></div>
                </div>

            </div>

            {/* <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div> */}

            <div className="e_filing">
                <div className="e_head"><h2>Welcome to E Filings</h2></div>
                <div className="e_child">
                    <div className="e_card">
                        <div className="e_head2"><h2>We are the group of Experts.</h2></div>
                        <div className="epara"><p>A group of experts committed to provide
                            the simple and easy solution for
                            registrations & fillings. <br /> <br />

                            We are offering the specialised services to
                            individuals and businesses. We are present
                            across India and supporting our clients on
                            site as well. We are having pool of the
                            experts from various fields including
                            Income Tax, GST, FEMA, Banking, Auditing,
                            Reporting & Litigation.</p></div>
                    </div>
                    <div className="e_card1"><img src={e2} alt="" /></div>
                    <div className="e_card2"><img src={e1} alt="" /></div>
                </div>

            </div>
            {/* <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>

        {/* <div className="e_filing">
            <div className="e_head"><h2>Welcome to E Filings</h2></div>
            <div className="e_child">
                <div className="e_card">
                    <div className="e_head2"><h2>We are the group of Experts.</h2></div>
                    <div className="epara"><p>A group of experts committed to provide
                        the simple and easy solution for
                        registrations & fillings. <br /> <br />

                        We are offering the specialised services to
                        individuals and businesses. We are present
                        across India and supporting our clients on
                        site as well. We are having pool of the
                        experts from various fields including
                        Income Tax, GST, FEMA, Banking, Auditing,
                        Reporting & Litigation.</p></div>
                </div>
                <div className="e_card1"><img src={e2} alt="" /></div>
                <div className="e_card2"><img src={e1} alt="" /></div>
            </div>

        </div> */}

        {/* E-filing */}
        <div className="aatm">
            <img src={aatm} alt="" />
        </div>

        {/* Contact Us */}
        <div className="contact_us">
            <div className="contact_head"><h2>Contact Us</h2></div>

            <div className="form_container">
                <div className="form">
                    <form action="">
                        <input type="text" placeholder="Name" className="name" />
                        <input type="text" placeholder="Last Name" className="last" /> <br />
                        <input type="email" name="" id="" placeholder="Email" className="mail" /> <br />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Comment" className="textarea"></textarea>
                    </form>

                </div>
                <div className="add">
                    <div className="add_para"><p>Kamayani Apartments, M-187,
                        Link Rd Number 3, 11 No. Stop, E-7,
                        Arera Colony, Bhopal, Madhya Pradesh
                        462016</p></div>
                    <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.867662203825!2d77.2990345150826!3d28.633728132417374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb4cfb883b2d%3A0x827af9e1ecaa5ccf!2sKAMAYANI%20KUNJ%2C%20Madhu%20Vihar%20Rd%2C%20I.P.Extension%2C%20Patparganj%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1652512351533!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
            </div>
        </div>

        {/* Contact Us */}

    </>)
}