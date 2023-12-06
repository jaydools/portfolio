import React from "react";
import "./Nav.scss";
import logo from "../../assets/icons/logo.png";

function Header() {
    return (
        <span>
            <nav className="navbar">
                <div className="leftside">
                    <img src={logo} alt="Dooley logo" className="leftside__logo" />
                </div>
                <div className="rightside">
                    <ul className="rightside__list-parent">
                        <li className="rightside__list-item">About</li>
                        <li className="rightside__list-item">Projects</li>
                        <li className="rightside__list-item">Contact</li>
                    </ul>
                </div>
            </nav>
        </span>
    );
}

export default Header;
