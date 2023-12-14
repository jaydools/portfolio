import React from "react";
import "./Contact.scss";

function Contact() {
    const openPDF = () => {
        window.open("/Jordan_Dooley_resume.pdf", "_blank");
    };

    return (
        <section className="contact-container">
            <h2>Contact Me</h2>
            <div>Create a card container here and center</div>
            <button onClick={openPDF}>See My Resume</button>
        </section>
    );
}

export default Contact;
