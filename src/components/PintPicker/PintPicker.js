import React, { useState } from "react";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import pint1 from "../../assets/pint-1.png";
import pint2 from "../../assets/pint-2.png";

function PintPicker() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="dropdown">
            <button className="dropdown__button">
                {isOpen ? (
                    <img src={upArrow} alt="Dropdown Arrow" className="dropdown__arrow" />
                ) : (
                    <img src={downArrow} alt="Dropdown Arrow" className="dropdown__arrow" />
                )}
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    <p className="dropdown__body">
                        Pint Picker is an interactive beer recommendation app designed to enhance
                        the selection experience for beer enthusiasts or be a helpful tool for
                        someone who just isn't sure what they want. It uniquely integrates OpenAI's
                        ChatGPT 3.5 Turbo to offer personalized suggestions based on user
                        preferences. It does this through a user-friendly quiz that inquires about a
                        users preferred flavor choices, beer types, bitterness levels, and other
                        taste preferences. It also captures the user's current mood to add an extra
                        layer of personalization. Upon completion, the backend, built with
                        Express.js, processes these preferences using the OpenAI API and returns
                        tailored beer options.
                    </p>
                    <p className="dropdown__body">
                        Tech used: HTML, CSS, Javascript, React, Npm, Sass, Axios, Node, Express,
                        Cors, Dotenv.
                        <br />
                        (Click on the image to open the application)
                    </p>
                    <div className="dropdown__wrapper">
                        <a href="https://pintpicker.netlify.app/" target="blank">
                            <img
                                src={pint1}
                                alt="Vearthy mock preview top"
                                className="dropdown__img-half"
                            />
                            <img
                                src={pint2}
                                alt="Vearthy mock preview top"
                                className="dropdown__img-half"
                            />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PintPicker;
