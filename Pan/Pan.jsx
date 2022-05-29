import react from "react";
import vector from "./Vector1.png"
import vector2 from "./Vector2.png"
import "./Pan.css";
import mobile from "./mobile.png";
import { useState } from "react";
import bgimg from "./image 6.png"


export default function Pan() {
    const [clicked, getClick] = useState(false);
    const [clicked1, getClick1] = useState(false);
    const [clicked2, getClick2] = useState(false);
    const [clicked3, getClick3] = useState(false);
    const [clicked4, getClick4] = useState(false);

    return (<>
        <div className="pan_conatiner">
            <div className="p_first" >
                <div className="p_fchild">
                    <div className="pfc_head"><h2>PAN Card Application</h2></div>
                    <div className="p_btn1"><a href="https://www.incometax.gov.in"><button>Apply Yourself</button></a></div>
                    <div className="p_btn2"><a href="/itrfillform"><button>Need expert</button></a></div>
                </div>
            </div>
        </div>

        <div className="p_registration">
            <div className="pr_head"><h2>What is PAN card</h2></div>
            <div className="pr_para"><p>PAN (Permanent Account Number) is a unique number assigned to all Indian taxpayers. It has a ten-character
                alphanumeric identifier issued by the Indian Income Tax Department in the shape of a laminated "PAN card" to
                any "person"   who pertains for it or to whom the department allots the number without an application.

            </p>
            </div>

            <div className="pr_head"><h2>REQUIRED DOCUMENTS</h2></div>
            <div className="pr_para"><p>
                Regardless of whether the application is made online or offline, the following documents are required in order to
                obtain a PAN card. These are some of them: Voter ID cards, passports, Aadhaar cards, and driver's liscences are
                examples of address or identity proofs.
            </p>
            </div>

            <div className="p_head3">
                <h3>Documents to be added:</h3>
            </div>
            <div className="p_para"><p>1. PAN applications for businesses require a Registration Certificate from the Registrar of Companies, along
                with proofs of identity and address.  <br /> <br />

                2. Partnership firms must disclose a partnership deed as well as identity and address proofs when going to
                apply for a PAN.  <br /> <br />

                3. A certificate of registration, along with proofs of identity and address, are required for cooperative society
                PAN applications
            </p></div>

            <div className="paq">
                <div className="paq_head"><h2>FAQ'S  ABOUT PAN</h2></div>
                <div className="paq_child">
                    <div className="paq_para1" onClick={() => getClick(!clicked)}> <p> Q1.How do I get a PAN?</p>  {clicked ? <img src={vector} /> : <img src={vector2} />}</div>
                    {clicked && <div className="paq_para2"> <p>PAN applications are available in the following formats:  <br />
                        1. Fill out Form 49A (for Indian Citizens)  <br />
                        2. 49AA Form (for Foreign Citizens)</p> </div>}
                    <div className="paq_para3" onClick={() => getClick1(!clicked1)}> <p>Q2.What is the purpose of a PAN card?</p>  {clicked1 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {clicked1 && <div className="paq_para2"> <p>1. A PAN card assists the Income-tax Authority in keeping track of all financial
                        transactions that are necessary for estimating an individual's or company's tax
                        liability, as well as reducing tax evasion. <br />
                        2. Every entity that owns a PAN card has its own PAN number. As a result, the risk
                        of abuse is low.  <br />
                        3. A minor account can be easily opened using his or her guardian's PAN card. <br />
                        4. It is a useful tool for forecasting the total tax revenue generated in India. <br />
                        5. It aids in determining the tax rate based on earnings.</p> </div>}
                    <div className="paq_para3" onClick={() => getClick2(!clicked2)}> <p> Q3.When is a PAN card issued? Is it Possible for a Student to Apply for a PAN Card?</p>  {clicked2 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {clicked2 && <div className="paq_para2"> <p>To apply for a PAN card, you must be at least 18 years old. As long as they are over
                        the age of 18, students can apply for a PAN card.</p> </div>}
                    <div className="paq_para3" onClick={() => getClick3(!clicked3)}> <p>Q4.How long is the validity of the PAN card?</p>  {clicked3 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {clicked3 && <div className="paq_para2"> <p>The PAN is valid for the rest of your life.</p> </div>}
                    <div className="paq_para3" onClick={() => getClick4(!clicked4)}> <p>Q5.How do I link my Aadhaar number to my PAN number?</p>  {clicked4 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {clicked4 && <div className="paq_para2"> <p>You can link your Aadhaar number to your PAN in one of two ways: <br />
                        1. Making use of the SMS service <br />
                        2. Using the e-Filing facility available at <a href="https://incometaxindiaefiling.gov.in">https://incometaxindiaefiling.gov.in</a>  </p> </div>}

                </div>
            </div>

            <div className="sub_container">
                <div className="paq_head"><h2>SUBMIT YOUR DETAILS</h2></div>
                <div className="sub_child">
                    <div className="an"> <p>
                        Do you have Aadhar Card with mobile number ?</p>
                        <input type="text" placeholder="Please Select" className="pselect" />
                    </div>
                    <div className="mob_no"><img src={mobile} alt="" /></div>

                </div>
            </div>

            <div className="u_contact">
                <div className="u_c1"><h2>Contact</h2> <p>We are always there to help you.</p></div>
                <div className="u_mail"><p>info@earlyfilings.com, +91 9111010801</p></div>
            </div>

        </div>
    </>)
}