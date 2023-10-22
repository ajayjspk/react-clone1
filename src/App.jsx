import React from "react";
import NavBar from "./components/NavBar";
import Mission from "./components/Misson";
import Hero from "./components/Hero";
import { contents } from "./components/PrincipleData";
import Principle from "./components/Principle";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Ourteam from "./components/Ourteam";

function ready(contents) {
    return (
        <Principle
            logo={contents.logo}
            title={contents.title}
            description={contents.description}
        />
    );
}

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Mission />
            <div className="principleContainer">
                <div className="principle-sec-heading">
                    <h3>OUR VALUES</h3>
                    <h2> The principles that guide us</h2>
                </div>

                <div className="principleContainerItems">
                    {contents.map(ready)}
                </div>
            </div>
            <Ourteam.Ourteam />
            <Ourteam.Always />
            <Getstarted />
            <Footer />
        </div>
    );
}

export default App;
