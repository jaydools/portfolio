import React, { useState } from "react";
import "./Burger.scss";
import logo from "../../assets/icons/logo.png";

function Burger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (sectionId, event) => {
        event.preventDefault();

        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };

    const handleBothAbout = (event) => {
        toggleMenu();
        scrollToSection("about", event);
    };

    const handleBothProjects = (event) => {
        toggleMenu();
        scrollToSection("projects", event);
    };
    const handleBothContact = (event) => {
        toggleMenu();
        scrollToSection("contact", event);
    };

    return (
        <header className="burger-container">
            <div className="burger-left">
                <img src={logo} alt="Dooley logo" className="burger-left__logo" />
            </div>
            <nav className="burger-menu" onClick={toggleMenu}>
                <div className="burger-menu__bar"></div>
                <div className="burger-menu__bar"></div>
                <div className="burger-menu__bar"></div>
            </nav>

            {isOpen && (
                <div className="burger-nav">
                    <div className="burger-nav__link">
                        <a href="#about" onClick={handleBothAbout}>
                            About
                        </a>
                    </div>
                    <div className="burger-nav__link">
                        <a href="#projects" onClick={handleBothProjects}>
                            Projects
                        </a>
                    </div>
                    <div className="burger-nav__link">
                        <a href="#contact" onClick={handleBothContact}>
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Burger;
