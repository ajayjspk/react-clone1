import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.svg";
import SocicalIcons from "./SocialIcons";

function Footer() {
    const socialStyle={
        color:'#fff'
    }
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-logo" style={{ width: "25%" }}>
                    <img src={logo} style={{width:260}}/>
                    <p>
                        Interview School is mock-interview software that
                        provides you with up-to-date interview questions and
                        AI-assisted feedback.
                    </p>
                </div>
                <div className="information">
                    <h3>Information</h3>
                    <p>Interview</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Support</p>
                </div>
                <div className="popular-ind">
                    <h3>Popular Industries</h3>

                    <p>Accouting & Finance</p>
                    <p>Customer Service</p>
                </div>
                <div className="popular-ques">
                    <h3>Popular Questions</h3>
                    <p>Tell me about yourself</p>
                    <p>Why should we hire you?</p>
                    <p>Why do you want to work?</p>
                    <p>What is Your Greatest Strength</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p style={{fontWeight:600,fontSize:18}}>Copyright © 2023 InterviewSchool.</p>
                <SocicalIcons style={socialStyle}/>
                <div className="mis">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Disclaimer</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
