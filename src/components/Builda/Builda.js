import React, { useState } from "react";
import "./Builda.scss";
import upArrow from "../../assets/icons/up-arrow.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import builder from "../../assets/builder.png";

function Builda() {
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
                        Build A Bouq is an interactive and dynamic bouquet building application,
                        that aims to drive sales for small business owners by increasing engagement
                        with their customers. It checks the stores inventory and will display images
                        of flowers that are in stock. Customers can then add their selection to
                        their cart and checkout easily. This project was created as my capstone
                        project for my Software Engineering program at<span> </span>
                        <a href="https://brainstation.io/" target="blank" className="link">
                            Brainstation.
                        </a>
                        <span> </span>
                        This is a deployed full stack app that uses a React frontend, an Express
                        backend and a database built with MySQL.
                    </p>
                    <p className="dropdown__body">
                        Tech used: HTML, CSS, Javascript, React, Npm, Sass, Axios, React Router,
                        Node.js, Express.js, MySQL, Knex, .ENV.
                        <br />
                        (Click on the image to open the application)
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
