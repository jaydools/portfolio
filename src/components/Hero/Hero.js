import React from "react";
import "./Hero.scss";

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-text__header">Hello, my name is Jordan Dooley 👋</h1>
                <h2 className="hero-text__subhead">And I'm a fullstack software engineer</h2>
                <p className="hero-text__body">You've landed on my portolio page, welcome! </p>
                <p className="hero-text__body">
                    A website is one of the first points of contact for your customers, and if not
                    the first point of contact, it's where your customers will return to after they
                    find you. Convince them you're worth an investment with something that will
                    impress them.
                </p>
            </div>
        </div>
    );
}

export default Hero;
