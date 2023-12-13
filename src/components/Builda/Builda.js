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
                        This is the capstone project I created for my software engineering diploma
                        program through<span> </span>
                        <a href="https://brainstation.io/" target="blank" className="link">
                            Brainstation.
                        </a>
                        <span> </span>
                        It is a fullstack application, that is designed for small business owners
                        (specifically in the flower business) to increase engagement and drive
                        sales. This application was created with React, uses an Express server on
                        the backend and a SQL database.
                    </p>
                    <a
                        href="https://build-a-bouq-client-873c8fc72a2f.herokuapp.com/"
                        target="blank"
                    >
                        <img src={builder} alt="Build a Bouq preview" className="dropdown__img" />
                    </a>
                </div>
            )}
        </div>
    );
}

export default Builda;
