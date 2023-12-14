import React from "react";
import "./Nav.scss";
import logo from "../../assets/icons/logo.png";

function Header() {
    const scrollToSection = (sectionId, event) => {
        event.preventDefault();

        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header>
            <nav className="navbar">
                <div className="leftside">
                    <img src={logo} alt="Dooley logo" className="leftside__logo" />
                </div>
                <div className="rightside">
                    <ul className="rightside__list-parent">
                        <li className="rightside__list-item">
                            <a href="#about" onClick={(e) => scrollToSection("about", e)}>
                                About
                            </a>
                        </li>
                        <li className="rightside__list-item">
                            <a href="#projects" onClick={(e) => scrollToSection("projects", e)}>
                                Projects
                            </a>
                        </li>
                        <li className="rightside__list-item">
                            <a href="#contact" onClick={(e) => scrollToSection("contact", e)}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
