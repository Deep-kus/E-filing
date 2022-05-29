import react from "react";
import "./GstForm.css";
import pan1 from "./pan1.png";
import pan2 from "./pan2.png";
import done from "./Done.png";
import cross from "./Multiply.png";
import aa1 from "./aa1.png";
import aa2 from "./aa2.png";

import form from "./apform.png"

import women from "./women.png"

export default function Gstform() {
    return (<>
        <div className="gstform">
            {/* <div className="gstf_child1">
                <div className="gstf_left"><h1>Fill your <br />
                    <span> GST return</span> <br />
                    before    <span> Due date</span> </h1></div>
                <div className="gstf_right"><img src={women} alt="" /></div>
            </div> */}

            <div className="af_child">
                <div className="af_child1">

                    <div className="af_left"><img src={form} alt="" /></div>
                    <div className="af_right">
                        <div className="af_right_h2"><h2>Complete your profile</h2></div>

                        <form action="">
                            <input type="text" placeholder="FIRST NAME" className="gstfname" />  <input type="text" placeholder="LAST NAME" className="gstfname1" /> <br />
                            <input type="mail" placeholder="EMAIL" className="gstmail" /> <br />
                            <input type="number" placeholder="PHONE" className="gstmail" />  <br />
                            <input type="text" placeholder="ADDRESS" className="gstmail" /> <br />
                            <input type="text" placeholder="PAN NUMBER" className="gstmail" />

                            <div className="file">
                                <div className="upload"> <p>Drop file here to</p>  <input type="file" placeholder="upload" /></div>

                                <div className="img_upload">
                                    <div className="iupload2"><img src={done} alt="" /></div>
                                    <div className="iupload3"><img src={pan1} alt="" /></div>
                                    <div className="iupload4"><img src={cross} alt="" /></div>
                                    <div className="iupload1"><img src={pan2} alt="" /></div>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>jpg or png format</span> </p></div>

                            <input type="text" placeholder="AADHAR NUMBER" className="gstmail" />
                            <div className="file">
                                <div className="upload"> <p>Drop file here to</p>  <input type="file" placeholder="upload" /></div>

                                <div className="img_upload">
                                    <div className="iupload6"><img src={done} alt="" /></div>
                                    <div className="iupload3"><img src={aa1} alt="" /></div>
                                    <div className="iupload5"><img src={cross} alt="" /></div>
                                    <div className="iupload1"><img src={aa2} alt="" /></div>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>jpg or png format</span> </p></div>

                            <p className="f16">FORM 16 (Taxpayers having salary income)</p>
                            <div className="file">
                                <div className="upload"> <p>Drop file here to</p>  <input type="file" placeholder="upload" /></div>

                                <div className="click_here">
                                    <p>What is FORM 16 <a href="">click here</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>


                            <p className="f16">BANK STATEMENT</p>
                            <div className="file">
                                <div className="upload"> <p>Drop file here to</p>  <input type="file" placeholder="upload" /></div>

                                <div className="click_here">
                                    <p>What is BANK STATEMENT  <a href="">click here</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>


                            <p className="f16">Details of INVESTMENT (Optional)</p>
                            <div className="file">
                                <div className="upload"> <p>Drop file here to</p>  <input type="file" placeholder="upload" /></div>

                                <div className="click_here">
                                    <p>What is Details of INVESTMENT  <a href="">click here</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>


                            <p className="f16">Details of INSURANCE & LOANS (Optional)</p>
                            <div className="file">
                                <div className="upload"> <p>Drop file here to</p>  <input type="file" placeholder="upload" /></div>

                                <div className="click_here">
                                    <p>What is details of INSURANCE <a href="">click here</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>

                            <div className="save_btn"><button>Save</button></div>


                        </form>



                    </div>

                </div>

            </div>
        </div>


    </>)
}