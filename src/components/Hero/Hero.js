import React from "react";
import "./Hero.scss";
import me from "../../assets/jordanDooley.png";

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-text__header">Hello, my name is Jordan Dooley 👋</h1>
                <h2 className="hero-text__subhead">And I'm a fullstack software engineer</h2>
                <p className="hero-text__body">You've landed on my portolio page, welcome! </p>
                <p className="hero-text__body">
                    Please take a look at some of the projects I've worked on and please get in
                    touch with me
                </p>
            </div>
        </div>
    );
}

export default Hero;
