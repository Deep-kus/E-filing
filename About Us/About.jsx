import React from "react";
import "./About.css";
import logo from "./india.png";

export default function About() {
    return (<>
        <div className="about_page">
            <div className="ap_h1"><h1>About The Firm</h1></div>
            <div className="ab_child">
                <div className="ap_left">
                    <p>S B C J & Associates (Formerly Known as Jitendra Tiwari & Co.) was set up in
                        the year 1994. The Firm’s name Jitendra Tiwari & Co. has been charged  w.e.f.
                        24.05.2018  with the prior approval vide letter no. 5-CA/M& CMSS/
                        FC180000812/007051C dt. 27/06/2018 of ICAI, New Dehli without effecting
                        seniority, experience and existence. <br /> <br />


                        After modest beginning, the firm has grown many folds. It is now among
                        the leading practicing CA firms in Bhopal. The firm has a large clientele in
                        and around Bhopal, Indore, Mumbai, Dhar, Ujjain, Puri (Orisa), Jabalpur, Raipur
                        and Chittograh ( Rajsthan). Our firm is a multidisciplinary firm of Chartered
                        Accountants. The Firm’s team comprises of highly qualified and experienced
                        professionals offering wide range of services.


                    </p>
                    <div className="rm_btn"><button>Read More</button></div>
                </div>
                <div className="ap_right">
                    <div className="apr_p">
                        <p># 1 GST plateform for Enterprises</p>
                        <p># 1 tax platform for tax experts</p>
                        <p># 1 tax platform for tax experts</p></div>
                        <div className="r_btn"><button> More</button></div>

                    <div className="apr_img"><img src={logo} alt="" /></div>

                </div>


            </div>
          
        </div>
    </>)
}