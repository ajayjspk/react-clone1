import React from "react";

function OurteamImages(props) {
    return (
        <div className="pics">
            <img className={props.className} src={props.src} alt={props.alt} />
        </div>
    );
}

function Pattern() {
    return (
        <div className="pattern">
            <p>. . . . . . . . . . . . . . . . . . .</p>
            <p>. . . . . . . . . . . . . . . . . . .</p>
            <p>. . . . . . . . . . . . . . . . . . .</p>
            <p>. . . . . . . . . . . . . . . . . . .</p>
        </div>
    );
}

export default { OurteamImages, Pattern };
