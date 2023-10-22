import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";



function SocicalIcons(props) {
    console.log(props)
    return (
        <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} style={props.style}/>
            <FontAwesomeIcon icon={faInstagram} style={props.style}/>
            <FontAwesomeIcon icon={faTwitter} style={props.style}/>
            <FontAwesomeIcon icon={faLinkedin} style={props.style}/>
        </div>
    );
}


export default SocicalIcons
