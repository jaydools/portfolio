import React from "react";
import "./Hero.scss";

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-text">
                <h1 className="hero-text__header">Hello, my name is Jordan Dooley 👋</h1>
                <h2 className="hero-text__subhead">And I'm a fullstack software engineer</h2>
                <p className="hero-text__body">You've landed on my portolio page, welcome! </p>
                <p className="hero-text__body">
                    A website is one of the first points of contact for your customers. If it's not
                    the first point of contact, it's where your customers will return to after they
                    find you. Convince them you're worth an investment.
                </p>
            </div>
        </section>
    );
}

export default Hero;
