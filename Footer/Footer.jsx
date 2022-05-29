import React from "react";
import "./Footer.css"

export default function Footer() {
    return (<>
        <div className="footer">
            <div className="footer_child">
                <div className="f_card1">
                    <div className="f_h"><h3>Early Fillings</h3></div>
                    <ul className="f_early">
                        <li> <a href="/"> Home</a></li>
                        <li> <a href=""> Bussiness Incorporation</a></li>
                        <li><a href=""> E-Return and Compliances</a></li>
                        {/* <li><a href=""> Audit</a></li> */}
                        <li><a href=""> Accounting</a></li>
                        {/* <li><a href="">Notice Reply Compliances</a>   </li> */}
                        <li><a href=""> e-Compliances</a></li>
                        <li><a href=""> More</a></li>
                        <li><a href="">Contact Us</a> </li>
                    </ul>

                </div>

                <div className="f_card2">
                <div className="f_h"><h3>Platforms</h3></div>
                    <ul className="f_early">
                        <li> <a href="">Business Search</a></li>
                        <li> <a href="">Trademark Search</a></li>
                        <li><a href=""> Client Portal</a></li>
                        <li><a href="">Support Portal</a></li>
                       
                    </ul>
                </div>
                <div className="f_card3"> <div className="f_h"><h3>Usage</h3></div>
                    <ul className="f_early">
                        <li> <a href="">Terms&Conditions</a></li>
                        <li> <a href="">Privacy Policy</a></li>
                        <li><a href=""> Refund Policy</a></li>
                        <li><a href="">Data Confidentially</a></li>
                        <li><a href=""> Early FIlling Reviews</a></li>
                       
                    </ul></div>
                <div className="f_card4"> <div className="f_h"><h3>Website Policies</h3></div>
                    <ul className="f_early">
                        <li> <a href="">Website terms&Conditions</a></li>
                        <li> <a href="">Website Privacy Policy</a></li>
                        <li><a href=""> Website Disclaimer Policy</a></li>
                        
                       
                    </ul></div>



            </div>
        </div>
    </>)
}