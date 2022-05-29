import react from "react";
import "./fillform.css";
import women from "./itrwomen.png"
import form from "./apform.png"

export default function fillform()
{
    return(<>
          <div className="gstform">
            <div className="gstf_child1">
                <div className="gstf_left"><h1>Fill your <br />
                    <span> Income Tax Return </span> <br />
                    before    <span> Due date</span> </h1></div>
                <div className="gstf_right"><img src={women} alt="" /></div>
            </div>

            <div className="af_child">
                <div className="af_child1">

                    <div className="af_left"><img src={form} alt="" /></div>
                    <div className="af_right">
                        <div className="af_right_h2"><h2>Income Tax Return Filing</h2></div>

                        <form action="">
                            <div className="label_div"><label htmlFor="">First Name</label> <label htmlFor="">Last Name</label><br /></div> 
                            <input type="text" placeholder="FIRST NAME" value="Pranay"className="gstfname" />  <input type="text" placeholder="LAST NAME" value ="Shukla"className="gstfname1" /> <br />
                            <div className="label_div"><label htmlFor="">Email</label> <br /></div>
                            <input type="mail" placeholder="EMAIL" className="gstmail"  value="pranayshukla@gmail.com"/> <br />
                            <div className="label_div"><label htmlFor="">Phone</label> <br /></div>
                            <input type="number" placeholder="PHONE" className="gstmail" value="6307739829"/>  <br />
                            <div className="label_div"><label htmlFor="">Adddres</label> <br /></div>
                            <input type="text" placeholder="ADDRESS" className="gstmail" value="H.No 012/b JK colony kanpur"/> <br />
                            <div className="label_div"><label htmlFor="">PAN Number</label> <br /></div>
                            <input type="text" placeholder="PAN NUMBER" value="XXXXXXXXXXXX" className="gstmail" />

                            <div className="file">
                                <div className="upload"> <p>Document Upload Sucessfully</p></div>

                                <div className="img_upload">
                                    
                                </div>

                            </div>
                            <div className="jpg"><p>file in <span>jpg or png format</span> </p></div>
                            <div className="label_div"><label htmlFor="">Aadhar Number</label> <br /></div>
                            <input type="text" placeholder="AADHAR NUMBER" value="XXXXXXXXXXXX" className="gstmail" />
                            <div className="file">
                                <div className="upload"> <p>Document Upload Sucessfully</p>  </div>

                                <div className="img_upload">
                                   
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>jpg or png format</span> </p></div>

                            <p className="f16">FORM 16 (Taxpayers having salary income)</p>
                            <div className="file">
                                <div className="upload"> <p>Document Upload Sucessfully</p></div>

                                <div className="click">
                                    <p> <a href="">Edit</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>


                            <p className="f16">BANK STATEMENT</p>
                            <div className="file">
                                <div className="upload"> <p>Document Upload Sucessfully</p></div>

                                <div className="click">
                                <p> <a href="">Edit</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>


                            <p className="f16">Details of INVESTMENT (Optional)</p>
                            <div className="file">
                                <div className="upload"><p>Document Upload Sucessfully</p></div>

                                <div className="click">
                                <p> <a href="">Edit</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>


                            <p className="f16">Details of INSURANCE & LOANS (Optional)</p>
                            <div className="file">
                                <div className="upload"> <p>Document Upload Sucessfully</p></div>

                                <div className="click">
                                <p> <a href="">Edit</a> </p>
                                </div>

                            </div>
                            <div className="jpg"> <p>file in <span>PDF format</span> </p></div>

                            <div className="save_btn"><button> <a href="/submit">Submit</a> </button></div>


                        </form>



                    </div>

                </div>

            </div>
        </div>
    </>)
}