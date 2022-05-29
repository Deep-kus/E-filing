import react from "react";
import { useState } from "react";
import "./Udyam.css";
import ur from "./ur.png";
import ur1 from "./ur1.png";
import vector from "./Vector1.png"
import vector2 from "./Vector2.png"
import { Udata } from "./Udata";
import bgimg1 from "./image 3.png"

export default function Udyam() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (<>
        <div className="u_container">
            <div className="u_first">
                <div className="u_fchild">
                    <div className="ufc_head"><h2>MSME Udyam (UAM)
                        Registration</h2></div>
                    <div className="u_btn1"><a href="https://www.incometax.gov.in"><button>Apply Yourself</button></a></div>
                    <div className="u_btn2"><a href="/itrfillform"><button>Need expert</button></a></div>
                </div>
            </div>
            <div className="u_registration">
                <div className="ur_head"><h2>What is MSME (Udyam) Registration?</h2></div>
                <div className="ur_para"><p>Udyam Registration, also known as MSME Registration, is a government-issued identification number that
                    comes with a certificate of recognition. This is for the purposes of certifying small and medium-sized
                    companies and organisations.The main goal of this facility was to provide a mechanism for the government
                    to provide the most benefits to medium and small-scale firms and industries in India that are registered
                    through MSME using their Aadhar Card Number. The entity's owner, director,or proprietor must supply his
                    or her 12-digit Aadhar Number. <br /><br />

                    Whether the business or entity is a sole proprietorship, an LLP, a private limited company, or something else,
                    this is a legal need. It should have a certificate of recognition obtained through the MSME registration process. <br /><br />

                    According to RBI guidelines, the government classified retail and wholesale commerce as MSME (micro,
                    small, and medium enterprises), making them eligible for priority sector lending frombanks and financial
                    institutions. Smaller retailers and wholesalers with annual sales of up to Rs 250 crore will benefit immediately
                    from the move, as they will be able to obtain short-term financing.The move would also allow them to
                    register on Udyam portal.</p>
                </div>
            </div>

            <div className="ub_container">
                <div className="ub_child">
                    <div className="ub_head"><h2>Types of Businesses (for Manufacturing or Service sector, Both)</h2></div>
                    <div className="ub_child2">
                        <div className="ub_left">
                            <p>• Micro enterprises with a budget of up to Rs 1 crore
                                and a turnover of up to Rs 5 crore <br /><br />

                                • Micro enterprises with a budget of up to Rs 1 crore
                                and a turnover of up to Rs 5 crore  <br /> <br />

                                • Medium-sized businesses with an investment of up to
                                Rs 50 crore and a turnover of up to Rs 250 crore</p>
                        </div>
                        <div className="ub_right"> <img src={ur} alt="" /></div>

                    </div>

                </div>

            </div>


            <div className="ub_container">
                <div className="ub_child">
                    <div className="ub_head"><h2>Document requirement for applying for Udyam?</h2></div>
                    <div className="ub_child3">
                        <div className="ub_left1">
                            <p>• The MSME registration process is entirely online, without the use
                                of paper, and is based on self-declaration.  <br /><br />

                                • For registration, only the Aadhaar Number will suffice.  <br /><br />

                                • PAN and GST-related information on investment and turnover of
                                businesses will be automatically retrieved from government databases.  <br /><br />

                                • According to April 1, 2021, having a PAN and a GST number is necessary.</p>
                        </div>
                        <div className="ub_right1"> <img src={ur1} alt="" /></div>

                    </div>

                </div>

            </div>

            <div className="faq">
                <div className="faq_head"><h2>FAQ'S</h2></div>
                <div className="faq_child">
                    <div className="faq_para1" onClick={() => setShow(!show)}> <p>Q1.Is MSME registration and udyog Aadhar registration is same?</p>{show ? <img src={vector} /> : <img src={vector2} />}</div>
                    {show && <div className="faq_para2">  <p> Ans : Yes, MSME registration becomes Udyog Aadhar registration.</p></div>}

                    <div className="paq_para3" onClick={() => setShow1(!show1)}> <p>Q2. Who qualifies for udyog Aadhar?</p>  {show1 ? <img src={vector} /> : <img src={vector2}></img>}</div>
                    {show1 && <div className="faq_para2">  <p> Ans: Every type of business entity, such as a sole proprietorship, a partnership firm,
                        a manufacturer, a producer, a limited company, a private limited company, a limited
                        liability partnership firm, co-operative societies, any association of individuals,
                        retailors, a Hindu Undivided Family, or any other undertaking, should register for
                        Udyog Aadhar.</p></div>}

                    <div className="paq_para3" onClick={() => setShow2(!show2)} > <p>Q3.How long does it take to register for Udyam?</p>  {show2 ? <img src={vector} /> : <img src={vector2}></img>} </div>
                    {show2 && <div className="faq_para2">  <p> Ans.The issuing of the UDYAM Registration Certificate usually takes four to five days
                        after the application is submitted. You will receive an email alert containing the
                        UDYAM Registration Number that is registered in your certificate.</p></div>}


                    <div className="paq_para3" onClick={() => setShow3(!show3)}> <p>Q4.What are the advantages of registering with Udyam?</p> {show3 ? <img src={vector} /> : <img src={vector2}></img>} </div>
                    {show3 && <div className="faq_para2">  <p> Ans.The following are some of the advantages of getting Udyam Registration: <br />
                        • According to state laws, the business owner can obtain octroi and tax consultation. <br />
                        • Request a waiver of stamp duty and registration fees. <br />
                        • Overdrafts are exempt from a 1% interest charge. <br />
                        • Can get NSIC and credit rating subsidies, and is eligible for IPS subsidies. <br />
                        • Reimbursement for the cost of getting the ISO certificate. <br />
                        • MSME and SSI have reserved items for exclusive production. <br />
                        • Enjoy the benefits of Excise Exemption Scheme. <br />
                        • Keep hold of the exemption while applying for government bids. <br />
                        • Exemption from direct taxation. <br />
                        • Take advantage of ease bank mortgages and bank business loans.</p></div>}

                </div>


            </div>

            <div className="u_form">
                <div className="uf_container">
                    <div className="uf_head"><h2>Hire a Thought!</h2></div>
                    <form action="">
                        <input type="text" placeholder="*Fullname" className="fname" /> <br />
                        <input type="text" placeholder="*Email" className="fname" /> <br />
                        <input type="text" placeholder="*Phone" className="fname" /> <br />
                        <textarea name="" id="" cols="30" rows="10" placeholder="*Message" className="text1"></textarea>
                        <div className="uf_btn"><button>Submit</button></div>
                    </form>

                </div>

            </div>

            <div className="u_contact">
                <div className="u_c1"><h2>Contact</h2> <p>We are always there to help you.</p></div>
                <div className="u_mail"><p>info@earlyfilings.com, +91 9111010801</p></div>
            </div>
        </div>
    </>)
}