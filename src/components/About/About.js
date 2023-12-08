import React, { useState } from "react";
import "./About.scss";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import ux from "../../assets/icons/ux.png";

function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="about-container">
            <div className="about-card">
                <h2 className="about-card__header">Background</h2>
                <h4 className="about-card__subhead">Park Ranger turned Software Engineer</h4>

                {isExpanded ? (
                    <div>
                        <p className="about-card__body">
                            Jordan moved from Ontario to British Columbia in 2015 to attend a post
                            secondary program from College of the Rockies, where he had ambitions of
                            becoming a backcountry tour guide. Shortly after completeing this
                            program, he moved to Jasper, Alberta where he worked as a boat tour
                            guide and captain doing interpretive tours on Maligne Lake, and his
                            career in tourism really accelerated.
                        </p>
                        <p className="about-card__body">
                            After being a tour guide throughout the Canadian Rockies, Jordan moved
                            to Sechelt, BC in 2018, where he bagan working as a Park Ranger with BC
                            Parks. For 5 years, he maintained the infrastucture and ecological
                            values of the backcountry of the Lower Sunshine Coast, as well as in the
                            Sea to Sky, where he worked as a Ranger based out of Squamish/Pemberton.
                        </p>

                        <p className="about-card__body">
                            At the height of the pandemic, Jordan started<span> </span>
                            <a href="https://www.vearthy.com" target="_blank" className="vearthy">
                                Vearthy.com
                            </a>
                            <span> </span>- an Ecommerece business that creates high quality and
                            sustainibly made everyday essentials. This is where he combined his
                            passion for graphic design with his ever growing love for web
                            development.
                        </p>
                        <p className="about-card__body">
                            As someone with strong coding skills, an eye for design, excellent
                            communication skills and an understanding of small business, you could
                            consider Jordan a valuable team member.
                        </p>
                        <button className="card-button" onClick={toggleExpand}>
                            Show Less
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="about-card__body--closed">
                            Jordan moved from Ontario to British Columbia in 2015 to attend a post
                            secondary program from College of the Rockies, where he had ambitions of
                            becoming a backcountry tour guide...
                        </p>
                        <button className="card-button" onClick={toggleExpand}>
                            Show More
                        </button>
                    </div>
                )}
            </div>
            <div className="abilities">
                <div className="abilities__frontend">
                    <p className="abilities__text">Frontend</p>
                    <img src={frontend} alt="frontend icon" className="abilities__icon" />
                </div>
                <div className="abilities__backend">
                    <p className="abilities__text">Backend</p>
                    <img src={backend} alt="frontend icon" className="abilities__icon" />
                </div>
                <div className="abilities__ux">
                    <p className="abilities__text">Ux Design</p>
                    <img src={ux} alt="frontend icon" className="abilities__icon" />
                </div>
            </div>
        </div>
    );
}

export default About;
