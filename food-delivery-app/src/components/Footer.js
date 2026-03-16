import React from 'react'
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsYoutube }  from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <FaLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>

            <div className="footer-section">
                <span>+94 71 234 5679 </span>
                <span>hello@fooddelivery.com</span>
                <span>press@fooddelivery.com</span>
                <span>contact@fooddelivery.com</span>
            </div>

            <div className="footer-section">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
