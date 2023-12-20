import React, { useState } from "react";
import "../Builda/Builda.scss";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import mocktop from "../../assets/mocktop.png";
import mockbottom from "../../assets/mockbottom.png";

function VearthyMock() {
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
                        This is a brainstorm website that I use to come up with new ideas for
                        layouts, styles and new features for the main Vearthy website.
                    </p>
                    <p className="dropdown__body">
                        Tech used: HTML, CSS, Javascript, React, Npm, Sass, React Router.
                        <br />
                        (Click on the image to open the application)
                    </p>
                    <div className="dropdown__wrapper">
                        <a
                            href="https://vearthy-brainpad-3f4347efaeb2.herokuapp.com/"
                            target="blank"
                        >
                            <img
                                src={mocktop}
                                alt="Vearthy mock preview top"
                                className="dropdown__img-half"
                            />
                            <img
                                src={mockbottom}
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

export default VearthyMock;
