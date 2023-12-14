import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import ux from "../../assets/icons/ux.png";

function About() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const abilitiesRef = useRef(null);
    const [visibility, setVisibility] = useState({
        frontend: false,
        backend: false,
        ux: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibility((prevVisibility) => ({
                            ...prevVisibility,
                            [entry.target.dataset.card]: true,
                        }));
                    }
                });
            },
            { threshold: [0.5] }
        );
        const cards = abilitiesRef.current.querySelectorAll(".abilities__card");
        cards.forEach((card) => observer.observe(card));

        return () => cards.forEach((card) => observer.unobserve(card));
    }, []);

    return (
        <section className="about-container" id="about">
            <div className="about-card">
                <h2 className="about-card__header">Background</h2>
                <h4 className="about-card__subhead">Park Ranger turned Software Engineer</h4>

                {isExpanded ? (
                    <div>
                        <p className="about-card__body--closed">
                            Jordan moved from Ontario to British Columbia in 2015 to attend a post
                            secondary program from College of the Rockies, where he had ambitions of
                            becoming a backcountry tour guide. Shortly after completeing this
                            program, he moved to Jasper, Alberta where he worked as a boat tour
                            guide and captain doing interpretive tours on Maligne Lake, and his
                            career in tourism accelerated.
                        </p>
                        <p className="about-card__body--closed">
                            After being a tour guide throughout the Canadian Rockies, Jordan moved
                            to Sechelt, BC in 2018, where he bagan working as a Park Ranger with BC
                            Parks. For 5 years, he maintained the infrastucture and ecological
                            values of the backcountry of the Lower Sunshine Coast, as well as in the
                            Sea to Sky, where he worked as a Ranger based out of Squamish/Pemberton.
                        </p>

                        <p className="about-card__body--closed">
                            At the height of the pandemic, Jordan started<span> </span>
                            <a
                                href="https://www.vearthy.com"
                                target="_blank"
                                className="vearthy"
                                rel="noopener noreferrer"
                            >
                                Vearthy.com
                            </a>
                            <span> </span>- an Ecommerece business that creates high quality and
                            sustainibly made everyday essentials. This is where he combined his
                            passion for graphic design with his ever growing love for web
                            development and entrepreneurship.
                        </p>
                        <p className="about-card__body--closed">
                            Jordan brings strong coding skills, an eye for design, excellent
                            communication skills and an understanding of small business to the
                            table. His interest in coding and aim for continual growth should
                            inspire you that he will genuienly want to, and will, do a steller job.
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
            <section className="abilities" ref={abilitiesRef}>
                <div
                    data-card="frontend"
                    className={`abilities__card ${
                        visibility.frontend ? "abilities__card--visible" : ""
                    }`}
                >
                    <p className="abilities__text">Frontend</p>
                    <img src={frontend} alt="frontend icon" className="abilities__icon" />
                </div>
                <div
                    data-card="backend"
                    className={`abilities__card ${
                        visibility.backend ? "abilities__card--visible" : ""
                    }`}
                >
                    <p className="abilities__text">Backend</p>
                    <img src={backend} alt="frontend icon" className="abilities__icon" />
                </div>
                <div
                    data-card="ux"
                    className={`abilities__card ${visibility.ux ? "abilities__card--visible" : ""}`}
                >
                    <p className="abilities__text">Ux Design</p>
                    <img src={ux} alt="frontend icon" className="abilities__icon" />
                </div>
            </section>
        </section>
    );
}

export default About;
