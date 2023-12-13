import React from "react";
import "./Nav.scss";
import logo from "../../assets/icons/logo.png";

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="leftside">
                    <img src={logo} alt="Dooley logo" className="leftside__logo" />
                </div>
                <div className="rightside">
                    <ul className="rightside__list-parent">
                        <li className="rightside__list-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="rightside__list-item">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="rightside__list-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
