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
                        <a href="https://vearthy.com" target="blank" className="link">
                            Vearthy.com
                        </a>
                        <span> </span>
                        is a fully functional store that has automated newsletters, order messages,
                        upsell features, analytics and customer accounts with rewards. It is an
                        Ecommerece that I created and oversee, which has everything essential for
                        running an online store. We even have a great warranty.
                    </p>
                    <div className="dropdown__wrapper">
                        <a href="https://vearthy.com/" target="blank">
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
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VearthyReal;
