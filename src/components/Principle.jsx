import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Change to "free-solid-svg-icons"

function Principle(props) {
    console.log(props)
    return (
        <div className="principleItems">
            <div className="principle-heading">
                <FontAwesomeIcon icon={faUser} style={{fontSize:26,color:'#313645'}} />
                <h4>{props.title}</h4>
            </div>

            <p>{props.description}</p>
        </div>
    );
}
export default Principle;
