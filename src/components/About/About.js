import React, { useState } from "react";
import "./About.scss";

function About() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="about-container" id="about">
            <div className="about-card">
                <h2 className="about-card__header">Background</h2>
                <h4 className="about-card__subhead">Park Ranger turned Software Engineer</h4>

                {isExpanded ? (
                    <div className="about-card__container">
                        <p className="about-card__body">
                            Jordan moved from Ontario to British Columbia in 2015 to attend a post
                            -secondary program at College of the Rockies, where he had ambitions of
                            becoming a backcountry tour guide. Shortly after completing this
                            program, he moved to Jasper, Alberta where he worked as a boat tour
                            guide and captain doing interpretive tours on Maligne Lake, and his
                            career in tourism accelerated.
                        </p>
                        <p className="about-card__body">
                            After being a tour guide throughout the Canadian Rockies, Jordan moved
                            to Sechelt, BC in 2018, where he began working as a Park Ranger with BC
                            Parks. For 5 years, he maintained the infrastructure and ecological
                            values of the backcountry of the Lower Sunshine Coast, as well as in the
                            Sea to Sky, where he worked as a Ranger based out of Squamish/Pemberton.
                        </p>
                        <p className="about-card__body">
                            At the height of the pandemic, Jordan started<span> </span>
                            <a
                                href="https://www.vearthy.com"
                                target="_blank"
                                className="vearthy"
                                rel="noopener noreferrer"
                            >
                                Vearthy.com
                            </a>
                            <span> </span>- an E-commerce business that creates high-quality and
                            sustainably made everyday essentials. This is where he combined his
                            passion for graphic design with his ever-growing love for web
                            development and entrepreneurship.
                        </p>
                        <p className="about-card__body">
                            Jordan brings strong coding skills, an eye for design, excellent
                            communication skills and an understanding of small business. His
                            interest in coding and aim for continual growth should inspire you that
                            he will genuinely want to, and will, do a stellar job.
                        </p>
                        <button className="card-button" onClick={toggleExpand}>
                            Show Less
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="about-card__body">
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
        </section>
    );
}

export default About;
