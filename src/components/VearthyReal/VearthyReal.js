import React, { useState } from "react";
import "../Builda/Builda.scss";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import vearthytop from "../../assets/vearthytop.png";
import vearthybottom from "../../assets/vearthybottom.png";

function VearthyReal() {
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
                        This is Vearthy.com, an Ecommerce store that I founded and currently run.
                    </p>
                    <div className="dropdown__wrapper">
                        <img
                            src={vearthytop}
                            alt="Vearthy mock preview top"
                            className="dropdown__img-half"
                        />
                        <img
                            src={vearthybottom}
                            alt="Vearthy mock preview top"
                            className="dropdown__img-half"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VearthyReal;
