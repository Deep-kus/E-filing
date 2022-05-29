import react from "react";
import "./GstReturn.css";
import women from "./women3.png"
import double from "./doubletick.png"
import form from "./form.png"
import blue from "./blue.png"
import vector from "./Vector1.png"
import vector2 from "./Vector2.png"
import { useState } from "react";



export default function GstReturn() {
    const [click, getClicked] = useState(false);
    const [click1, getClicked1] = useState(false);
    const [click2, getClicked2] = useState(false);
    const [click3, getClicked3] = useState(false);
    const [click4, getClicked4] = useState(false);
    const [click5, getClicked5] = useState(false);
    const [click6, getClicked6] = useState(false);

    return (<>
        <div className="gst_container">
            <div className="gst_child1">
                <div className="gst_left"><h1>India's <br />
                    <span> Most Trusted</span> <br />
                    GST Filing Platform</h1></div>
                <div className="gst_right"><img src={women} alt="" /></div>
            </div>


            <div className="gst_get">
                <div className="get_left">
                    <div className="tick_div">
                        <span> <img src={double} alt="" /></span><p>97% of users get their GST Registration Number  in a one time Application </p>
                    </div>


                    <div className="tick_div">
                        <span><img src={double} alt="" /></span> <p>98.4% of our clients don't receive any GST notice
                        </p>
                    </div>
                    <div className="tick_div">
                        <span><img src={double} alt="" /></span> <p>4.5 Google rating with 3500+ reviews</p>
                    </div>
                </div>
                <div className="get_right">
                    <h3>Contact an expert</h3>
                    <form action="">
                        <input type="text" placeholder="Full Name" className="gfullname" />   <br />
                        <input type="text" placeholder="Email" className="gfullname" />   <br />
                        <input type="text" placeholder="Phone" className="gfullname" />
                        <div className="g_btn"><button>GET STARTED</button></div>

                    </form>

                </div>
            </div>
            <div className="gst_first">
                <div className="gst_fchild">
                    <div className="gst_head"><h2>GST  Return Filing
                    </h2></div>
                    <div className="gst_btn1">
                        <a href="https://www.incometax.gov.in"> <button>Apply Yourself</button></a></div>
                    <div className="gst_btn2"><a href="/fillform"> <button>Need expert</button></a></div>
                </div>
            </div>

            <div className="return_registration">
                <div className="return_head"><h2>GST Return Filing</h2></div>
                <div className="gst_filing"><h3>What is GST return filing?</h3></div>
                <div className="return_para"><p>Businesses that are registered under GST have to file the GST returns monthly, quarterly, and
                    annually based on the business. Here it is necessary to provide the details of the sales or
                    purchases of the goods and services along with the tax that is collected and paid.
                    Implementation of a comprehensive Income Tax System like GST in India has ensured that
                    taxpayer services such as registration, returns, and compliance are in range and perfectly aligned. <br /><br />

                    An individual taxpayer filing the GST returns has to file 4 forms for filing the GST returns such as
                    the returns for the supplies, returns for the purchases made, monthly returns, and the
                    annual returns.  <br /> <br />

                    GST return filing in India is mandatory for all the entities that have a valid GST registration
                    irrespective of the business activity or the sales or the profitability during the period of filing
                    the returns. Hence, even a dormant business that has a valid GST registration must file
                    the GST returns.  <br /> <br />

                    GST return is a document that contains the details of all the income or the expenses that a
                    taxpayer is required to file with the tax administrative authorities.</p>
                </div>
            </div>

            <div className="eligibility">
                <div className="eligibility_head"><h2>Eligibility Criteria</h2></div>
                <div className="eligibility_child">
                    <div className="eligibility_left">
                        <div className="gst_filing"><h3>Who should file the GST returns?</h3></div>

                        <div className="eli_div"><p>GST Return filing in India is to be done by the following:</p></div>
                        <div className="eli_div">

                            <span> <img src={double} alt="" /></span><p>A person having a valid GSTIN has to compulsorily file
                                the GST returns. </p>
                        </div>


                        <div className="eli_div1">
                            <span><img src={double} alt="" /></span> <p>Also, a person whose annual turnover is crossing
                                Rs. 20 lakh has to obtain a GST registration and file the
                                GST returns mandatorily.

                            </p>
                        </div>
                        <div className="eli_div">
                            <span><img src={double} alt="" /></span> <p>In the cases of Special states, the limit for the annual
                                turnover is Rs.10 lakh.

                            </p>
                        </div>
                    </div>
                    <div className="eligibility_right">
                        <div className="blue_img"></div>

                        {/* <img src={blue} alt="" /> */}

                        <div className="form_img"><img src={form} alt="" /></div>
                    </div>


                </div>
            </div>


            <div className="ty_registration">
                <div className="eligibility_head"><h2>Types of GST Registration</h2></div>
                <div className="tor_h3"><h3>What are the different types of GST registration in India?</h3></div>

                <div className="tor_div">
                    <div className="tor_child1">
                        <div className="tor_sec1"> GSTR 1</div>
                        <div className="tor_sec2"> Details of the outward supplies of the taxable goods and or services</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 3B</div>
                        <div className="tor_sec2"> Simple returns in which a summary of the outward supplies along with
                            the input tax credit that is declared and the payment of the tax is affected
                            by the taxpayer.</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">CMP 08</div>
                        <div className="tor_sec2"> Statement cum challan to make a tax payment by a taxpayer registered
                            under the composition scheme under Section 10 of the CGST Act.</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 4</div>
                        <div className="tor_sec2"> Returns to be filed by the taxpayer that is registered under the composition
                            scheme under Section 10 of the CGST Act</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 5</div>
                        <div className="tor_sec2"> Returns to be filed by a Non-resident taxable person</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 6</div>
                        <div className="tor_sec2">To be filed by the input service distributor to distribute the eligible input
                            tax credit</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 7</div>
                        <div className="tor_sec2">Is filed by the government authorities</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 8</div>
                        <div className="tor_sec2"> Details of supplies that are affected through the e-commerce operators
                            and the amount of tax that is collected at the source by them.</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 9</div>
                        <div className="tor_sec2">Annual return for a normal taxpayer</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 9C</div>
                        <div className="tor_sec2">Certified reconciliation statement</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 10</div>
                        <div className="tor_sec2">Is filed by the taxpayer whose GST registration is canceled</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>
                    <div className="tor_child1">
                        <div className="tor_sec1">GSTR 11</div>
                        <div className="tor_sec2">Details of the inward supplies are furnished by a person who has UIN and
                            also claims a refund.</div>
                        <div className="tor_sec3">
                            <div className="tor_sec4"> Monthly</div>
                            <div className="tor_sec5">Quarterly </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="penalties">
                <div className="eligibility_head"><h2>Penalties</h2></div>
                <div className="tor_h3"><h3>What are the penalties, late fees, and interest rates?</h3></div>
                <div className="penalties1">
                    <div className="pealties_para">

                        <p> <h4>Late filing</h4>
                            Late filing of the GST returns can attract a penalty called a late fee. And according to the Goods and Service Tax
                            can attract a penalty which is Rs. 100 under CGST and Rs.100 under SGST that accounts for Rs.200 a day. <br /><br />

                            With the late fee, an interest of 18% has to be paid per annum. It is calculated on the tax to be paid. <br /><br />
                            <h4>Non-compliance</h4>
                            In case if the taxpayer is not filing the GST returns then the subsequent returns cannot be filed. Hence, to avoid
                            heavy fines and penalties it is better to file the GST returns on time as it will lead to a cascading effect.  <br /> <br />
                            <h4>For 21 offenses with no intention of fraud or tax evasion </h4>
                            An offender who is not paying taxes or is making short payments must pay a penalty of 10% of the amount of
                            tax due subject to a minimum of Rs.10,000.  <br /> <br />
                            <h4>For 21 offenses with the intention of fraud or tax evasion

                            </h4>
                            An offender is subject to a penalty amount of tax evasion or short deducted.</p>
                    </div>
                </div>
            </div>

            <div className="paq">
                <div className="paq_head"><h2>FAQ'S  ABOUT  GST RETURNS</h2></div>
                <div className="paq_child">
                    <div className="paq_para1" onClick={() => getClicked(!click)}> <p>Q1. How will the services be delivered?</p>  {click ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click && <div className="paq_para2"> <p>You will have a dedicated GST Accountant assigned to your business. Each month, the
                        Accountant will collect all the information and file your GST returns.</p>  </div>}

                    <div className="paq_para3" onClick={() => getClicked1(!click1)}> <p>Q2 How will the information or document be collected?
                    </p> {click1 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click1 && <div className="paq_para2"> <p>You can send us the information through email in any platform or upload the information. We
                        also accept soft copy of invoices and purchase data.</p>  </div>}

                    <div className="paq_para3" onClick={() => getClicked2(!click2)}> <p>Q3. What returns will be filed?</p> {click2 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click2 && <div className="paq_para2"> We will file GSTR-3B return and GSTR-1 return for regular taxpayers registered under GST. For
                        composition dealers we will assist in filing GSTR-4 return.
                        Q4. What  </div>}

                    <div className="paq_para3" onClick={() => getClicked3(!click3)}> <p> Q4. What will be my responsibilty?
                    </p> {click3 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click3 && <div className="paq_para2"> <p>You will only be responsible for providing the information or documents required to prepare your GST
                        return. Once we have prepared the filing, you can verify the calculation and confirm the filing.</p>  </div>}

                    <div className="paq_para3" onClick={() => getClicked4(!click4)}> <p>Q5.Will you provide supports for gst input tax credit?</p> {click4 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click4 && <div className="paq_para2"> <p>Yes, we will provide you input tax credit reconciliation. You can use the same to verify the input tax credit
                        receivable for your business.</p>  </div>}
                    <div className="paq_para3" onClick={() => getClicked5(!click5)}> <p>Q6.Will you provide supports for  GST refund ?</p>   {click5 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click5 && <div className="paq_para2"> <p>Yes, for clients who subscribe to our GST return filing annual package, we provide support for GST refund
                        processing.</p>  </div>}
                    <div className="paq_para3" onClick={() => getClicked6(!click6)}> <p>Q7.Will you provides support for GST payment?</p>  {click6 ? <img src={vector} /> : <img src={vector2} />}</div>
                    {click6 && <div className="paq_para2"> <p> Yes, for clients who subscribe to our GST return filing package, we provide support for GST payment
                        challan generation. </p></div>}


                </div>
            </div>

        </div>
    </>)

}