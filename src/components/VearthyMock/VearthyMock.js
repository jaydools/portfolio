import React, { useState } from "react";
import "../Builda/Builda.scss";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import mocktop from "../../assets/mocktop.png";
import mockbottom from "../../assets/mockbottom.png";

function VearthyMock() {
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
                        This is a mock website that I use to come up with new ideas for layouts,
                        styles and possabilities for what I could make my current Shopify store
                        into.
                    </p>
                    <div className="dropdown__wrapper">
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default VearthyMock;
