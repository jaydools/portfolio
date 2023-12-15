import React from "react";
import "./Hero.scss";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-text">
                <h1 className="hero-text__header">Hello, my name is Jordan Dooley 👋</h1>
                <h2 className="hero-text__subhead">And I'm a full-stack Software Engineer</h2>
                <p className="hero-text__body">You've landed on my portfolio page, welcome! </p>
                <p className="hero-text__body">
                    A website is one of the first points of contact for your customers. If it's not
                    the first point of contact, it's where your customers will return to after they
                    find you. Convince them you're worth an investment.
                </p>
                <a href="https://www.linkedin.com/in/jordan-dooley-/" target="blank">
                    <img src={linkedin} alt="linkedin logo" className="hero-container__icon1" />
                </a>
                <a href="https://github.com/jaydools" target="blank">
                    <img src={github} alt="linkedin logo" className="hero-container__icon2" />
                </a>
            </div>
        </section>
    );
}

export default Hero;
