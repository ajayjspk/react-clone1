import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function NavBar() {
    const [hover,setHover]=useState(false)
    function handleEnter() {
        setHover(true)
    }
    function handleLeave(){
        setHover(false)
    }

    const signUpStyle = {
        backgroundColor: "#3eb96f",
        color: "white",
        fontWeight: "600",
    };
    return (
        <div className="navbar">
            <div className="nav-brand">
                <img src={logo} />
            </div>
            <div>
                <BrowserRouter>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">
                            About
                        </Link>
                        <Link to="/" className="nav-link">
                            Pricing
                        </Link>
                        <Link to="/" className="nav-link">
                            Reports
                        </Link>
                        <Link to="/" className="nav-link">
                            Features
                        </Link>
                        <Link to="/" className="nav-link">
                            Instutions{" "}
                        </Link>
                        <Link to="/" className="nav-link">
                            Blog
                        </Link>
                    </div>
                </BrowserRouter>
            </div>
            <div className="auth-btns">
                <button
                    className="auth-btn"
                    style={{ backgroundColor: "white" }}
                >
                    Sign in
                </button>
                <button
                    className="auth-btn"
                    style={
                        hover
                            ? { ...signUpStyle, backgroundColor: "#2df883" }
                            : { ...signUpStyle, backgroundColor: "#3eb96f" }
                    }
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    Start for Free
                </button>
            </div>
        </div>
    );
}
export default NavBar;
