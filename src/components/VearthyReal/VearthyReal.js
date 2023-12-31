import React, { useState } from "react";
import "../Builda/Builda.scss";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import vearthytop from "../../assets/vearthytop.png";
import vearthybottom from "../../assets/vearthybottom.png";

function VearthyReal() {
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
                        <a href="https://vearthy.com" target="blank" className="link">
                            Vearthy.com
                        </a>
                        <span> </span>
                        is a fully functional Ecommerece store, that runs automated newsletters and
                        order messages, has upsell features, analytics and customer accounts with
                        rewards. Created in 2021, Vearthy is a passion project of mine and has given
                        me a lot of small business insight. Vearthy is all about providing High
                        Quality, Low Impact everyday essentials, you should check it out!
                    </p>
                    <p className="dropdown__body">
                        Tech used: Shopify, Google Analytics, Meta Pixel, Klaviyo, Fera, Smile.io,
                        Lucky Orange, Adobe Photoshop, Canva.
                        <br />
                        (Click on the image to open the store)
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
