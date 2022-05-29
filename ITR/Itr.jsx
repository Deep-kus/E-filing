import react from "react";
import "./Itr.css";
import itr from "./itrwomen.png"
import double from "./doubletick.png"
import document from "./document.png"

export default function Itr() {

    return (<>
        <div className="itr_container">
            <div className="itr_child1">
                <div className="itrh_left"><h1>India's <br />
                    <span> Most Trusted</span> <br />
                    Income TAX  Filing Platform</h1></div>
                <div className="itrh_right"><img src={itr} alt="" /></div>
            </div>


            <div className="itr_get">
                <div className="itrget_left">
                    <div className="itrtick_div">
                        <span> <img src={double} alt="" /></span><p>97% of users filing Income Tax Application </p>
                    </div>


                    <div className="itrtick_div">
                        <span><img src={double} alt="" /></span> <p>98.4% of our clients don't receive any tax notice
                        </p>
                    </div>
                    <div className="itrtick_div">
                        <span><img src={double} alt="" /></span> <p>4.5 Google rating with 3500+ reviews</p>
                    </div>
                </div>
                <div className="itrget_right">
                    <h3>Contact an expert</h3>
                    <form action="">
                        <input type="text" placeholder="Full Name" className="itrfullname" />   <br />
                        <input type="text" placeholder="Email" className="itrfullname" />   <br />
                        <input type="text" placeholder="Phone" className="itrfullname" />
                        <div className="itr_btn"><button>GET STARTED</button></div>

                    </form>

                </div>


            </div>
            <div className="itrgst_first">
                <div className="itrgst_fchild">
                    <div className="itrgst_head"><h2>Income TAX filling
                    </h2></div>
                    <div className="itrgst_btn1">
                        <a href="https://www.incometax.gov.in"> <button>Apply Yourself</button></a></div>
                    <div className="itrgst_btn2"><a href="/itrfillform"> <button>Need expert</button></a></div>
                </div>
            </div>

            <div className="itr_document">
                <div className="itr_left">
                    <div className="itrgst_filing"><h3>Documents required for tax filing</h3></div>

                    {/* <div className="eli_div"><p>GST Return filing in India is to be done by the following:</p></div> */}
                    <div className="eli_div">

                        <span> <img src={double} alt="" /></span><p>Form 16 (Taxpayers having salary income) </p>
                    </div>


                    <div className="eli_div">
                        <span><img src={double} alt="" /></span> <p>Bank Statements



                        </p>
                    </div>
                    <div className="eli_div">
                        <span><img src={double} alt="" /></span> <p>Details of Investments (Optional)


                        </p>
                    </div>

                    <div className="eli_div">
                        <span><img src={double} alt="" /></span> <p>Details of Insurance & Loans (Optional)


                        </p>
                    </div>
                    <div className="eli_div">
                        <span><img src={double} alt="" /></span> <p>PAN Copy (Optional)



                        </p>
                    </div>
                    <div className="eli_div">
                        <span><img src={double} alt="" /></span> <p>Aadhaar Copy (Optional)



                        </p>
                    </div>

                </div>
                <div className="itr_right"><img src={document} alt="" /></div>

            </div>

            <div className="itrreturn_registration">
                {/* <div className="return_head"><h2>File Letter of Undertaking (LUT) in GST</h2></div> */}
                <div className="gst_filing"><h3>Penalty for Late Filing Income Tax Return</h3></div>
                <div className="return_para"><p>Taxpayers who do not file their income tax return on time are subject to penalty and charged an
                    interest on the late payment of income tax. Also, the penalty for late filing income tax return on
                    time has been increased recently. The penalty for late filing income tax return is now as follows: <br /><br />


                    <div className="gst_filing"><h3>Income Tax Return Due Date</h3></div>
                    The due date for income tax return filing is 31st July of every year for individual taxpayers. The due
                    date for income tax return filing for companies and taxpayer requiring tax audit is 30th
                    September. Section 44AD of the Income Tax Act deals with tax audit under Income Tax Act.

                    <br /> <br />

                    <div className="gst_filing"><h3>Business</h3></div>
                    In case of a business, tax audit would be required if the total sales turnover or gross receipts in
                    the business exceeds Rs.1 crore in any previous year.

                    <br /> <br />

                    <div className="gst_filing"><h3>Professional</h3></div>
                    In case of a profession or professional, tax audit would be required if gross receipts in the
                    profession exceeds Rs.50 lakhs in any of the previous year.



                    <br /> <br />



                    <div className="gst_filing"><h3>Presumptive Taxation Scheme</h3></div>
                    If a person is enrolled under the presumptive taxation scheme under section 44AD​ and total
                    sales or turnover is more than Rs. 2 crores, then tax audit would be required.

                    <br /> <br />


                </p>
                </div>
            </div>

            {/* <div className="itr_app">
                <div className="itrapp_child">
                <div className="itrapp_child1"><p>Return Type</p> </div>
                    <div className="itrapp_child2"><p>Applicability</p>  </div>
                        
                   


                </div>


            </div> */}

        </div>

    </>)
}