import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import { useState } from "react";
import logo from "./EFLogo.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobilemenu = () => setClick(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);
 


  const onMouseEnter = () => { setDropdown(true); };
  const onMouseLeave = () => { setDropdown(false); };

  const onMouseEnter1 = () => { setDropdown1(true); };
  const onMouseLeave1 = () => { setDropdown1(false); };

  
  const onMouseEnter2 = () => { setDropdown2(true); };
  const onMouseLeave2 = () => { setDropdown2(false); };

  
  const onMouseEnter3 = () => { setDropdown3(true); };
  const onMouseLeave3 = () => { setDropdown3(false); };

  
  const onMouseEnter4 = () => { setDropdown4(true); };
  const onMouseLeave4 = () => { setDropdown4(false); };

  
  const onMouseEnter5 = () => { setDropdown5(true); };
  const onMouseLeave5 = () => { setDropdown5(false); };

  const onMouseEnter6 = () => { setDropdown6(true); };
  const onMouseLeave6 = () => { setDropdown6(false); };




  // const onMouseEnter1 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown1(false);
  //   } else {
  //     setDropdown1(true);
  //   }
  // };

  // const onMouseLeave1 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown1(false)
  //   } else {
  //     setDropdown1(false);
  //   }
  // };


  return (<>

    <nav className="navbar">
      <div className="nav_child">
        <a href="/" className="navbar-logo"><img src={logo} alt="" /></a>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" onMouseEnter={onMouseEnter}onMouseLeave={onMouseLeave}><a href="/bussiness" className="nav-links" onClick={closeMobilemenu}>Bussiness Incorporation <i className="fas fa-caret-down" /></a> {dropdown && <Dropdown />}</li>

          <li className="nav-item" onMouseEnter={onMouseEnter1}onMouseLeave={onMouseLeave1}><a href="/bussiness" className="nav-links" onClick={closeMobilemenu}>Registration Compliance <i className="fas fa-caret-down" /></a> {dropdown1 && <Dropdown1 />}</li>
          <li className="nav-item" onMouseEnter={onMouseEnter6}onMouseLeave={onMouseLeave6}><a href="/bussiness" className="nav-links " onClick={closeMobilemenu}>E-Return and Compliances <i className="fas fa-caret-down" /></a> {dropdown6 && <Dropdown2 />}</li> 
          <li className="nav-item"  onMouseEnter={onMouseEnter3}onMouseLeave={onMouseLeave3}><a href="/bussiness" className="nav-links " onClick={closeMobilemenu}>Accounting <i className="fas fa-caret-down" /></a> {dropdown3 && <Dropdown />}</li>
          <li className="nav-item"  onMouseEnter={onMouseEnter5}onMouseLeave={onMouseLeave5}><a href="/bussiness" className="nav-links " onClick={closeMobilemenu}>e-Compliances <i className="fas fa-caret-down" /></a> {dropdown5 && <Dropdown />}</li>
          <li className="nav-item"  onMouseEnter={onMouseEnter4}onMouseLeave={onMouseLeave4}><a href="/bussiness" className="nav-links " onClick={closeMobilemenu}>More<i className="fas fa-caret-down" /></a> {dropdown4 && <Dropdown />}</li>
          <li className="nav-item"><a href="/" className="nav-links" onClick={closeMobilemenu}>Contact Us</a></li>
          <li className="nav-item"><a href="/" className="nav-button" onClick={closeMobilemenu}>login</a></li>
          <li className="nav-item"><a href="/" className="nav-button" onClick={closeMobilemenu}>Sign up</a></li>
        </ul>
        {/* <div className="search"><input type="text" placeholder="Search"  className="s_input"/></div> */}
      </div>
    </nav>
  </>);
}