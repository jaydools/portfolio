import React from "react";
import "./Projects.scss";
import builder from "../../assets/builder.png";
import mocktop from "../../assets/mocktop.png";
import mockbottom from "../../assets/mockbottom.png";
import vearthytop from "../../assets/vearthytop.png";
import vearthybottom from "../../assets/vearthybottom.png";

function Projects() {
    return (
        <div className="projects-container">
            <h2 className="projects-container__header">Projects</h2>
            <div className="projects-card">
                <div className="projects-card__builder">
                    <h3 className="projects-card__header">Build A Bouq</h3>
                    <p className="projects-card__body">
                        This is the capstone project I created for my software engineering course
                        through Brainstation. It is a fullstack application, that is designed for
                        small business owners (specifically in the flower business) to increase
                        engagement and drive sales
                    </p>
                    <div className="projects-card__img-wrapper">
                        <img
                            src={builder}
                            alt="Build a Bouq preview"
                            className="projects-card__img"
                        />
                    </div>
                </div>
                <div className="projects-card__vearthy-mock">
                    <h3 className="projects-card__header">Vearthy Mock Site</h3>
                    <p className="projects-card__body">
                        This is a mock website that I use to come up with new ideas for layouts,
                        styles and possabilities for what I could make my current Shopify store
                        into.
                    </p>
                </div>

                <div className="projects-card__img-wrapper-half">
                    <div className="projects-card__img-wrapper">
                        <img
                            src={mocktop}
                            alt="Vearthy mock preview top"
                            className="projects-card__img-half"
                        />
                    </div>
                    <div className="projects-card__img-wrapper">
                        <img
                            src={mockbottom}
                            alt="Vearthy mock preview bottom"
                            className="projects-card__img-half"
                        />
                    </div>
                </div>

                <div className="projects-card__vearthy">
                    <h3 className="projects-card__header">Vearthy.com</h3>
                    <p className="projects-card__body">
                        This is Vearthy.com, an Ecommerce store that I founded and currently run.
                    </p>

                    <div className="projects-card__img-wrapper-half">
                        <div className="projects-card__img-wrapper">
                            <img
                                src={vearthytop}
                                alt="Vearthy mock preview top"
                                className="projects-card__img-half"
                            />
                        </div>
                        <div className="projects-card__img-wrapper">
                            <img
                                src={vearthybottom}
                                alt="Vearthy mock preview bottom"
                                className="projects-card__img-half"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
