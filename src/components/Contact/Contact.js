import React from "react";
import "./Contact.scss";

function Contact() {
    const mailTo = () => {
        window.open("mailto:jaydools@hotmail.com", "_blank");
    };

    const openPDF = () => {
        window.open("/Jordan_Dooley_resume.pdf", "_blank");
    };

    return (
        <section className="contact-container" id="contact">
            <h2 className="contact-container__header">Lets work together!</h2>
            <div className="contact-card">
                <h3 className="contact-card__subhead">🚀 Ready to Dive into Your Next Project?</h3>
                <p className="contact-card__body">
                    You've seen my journey, my skills, and my projects – now let's bring{" "}
                    <strong>your</strong> vision to life!
                </p>
                <h3 className="contact-card__subhead">Why should you reach out to me?</h3>
                <p className="contact-card__body">
                    ✅ Passion for Excellence: My commitment to excellence is not just a
                    professional stance but a personal one. Your project is not just a job for me;
                    it's an opportunity to create something we can both be proud of.
                </p>
                <p className="contact-card__body">
                    ✅ Diverse Skill Set: From front-end polish to back-end stability and everything
                    in between, my wide range of technical skills (HTML, CSS, JavaScript, React,
                    etc.) ensures a comprehensive approach to problem-solving.
                </p>
                <p className="contact-card__body">
                    ✅ Proven Track Record: The projects showcased here are a testament to my
                    ability to deliver on a time limit. Whether it's building a full-stack solution,
                    crafting a visually stunning front-end, or scaling an e-commerce platform, I've
                    can do it with flair and efficiency.
                </p>
                <p className="contact-card__body">
                    ✅ Dynamic Adaptability: My journey as a visual learner and pragmatic software
                    engineer has honed my ability to quickly grasp and apply new concepts. This
                    agility in learning ensures that your project will not only meet expectations,
                    but they will also uncover new avenues for excellence and creativity.
                </p>
                <div className="contact-container__button-wrapper">
                    <button onClick={mailTo} className="contact-container__button1">
                        Send me a message
                    </button>
                    <button onClick={openPDF} className="contact-container__button2">
                        See My Resume
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
