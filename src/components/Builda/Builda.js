import React, { useState } from "react";
import "./Builda.scss";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import builder from "../../assets/builder.png";

function Builda() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown__button">
                {isOpen ? (
                    <img src={upArrow} alt="Dropdown Arrow" className="dropdown__arrow" />
                ) : (
                    <img src={downArrow} alt="Dropdown Arrow" className="dropdown__arrow" />
                )}
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    <p className="dropdown__body">
                        This is the capstone project I created for my software engineering course
                        through Brainstation. It is a fullstack application, that is designed for
                        small business owners (specifically in the flower business) to increase
                        engagement and drive sales
                    </p>
                    <img src={builder} alt="Build a Bouq preview" className="dropdown__img" />
                </div>
            )}
        </div>
    );
}

export default Builda;
