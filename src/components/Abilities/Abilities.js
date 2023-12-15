import React, { useEffect, useRef, useState } from "react";
import "./Abilities.scss";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import ux from "../../assets/icons/ux.png";

function Abilities() {
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
    );
}

export default Abilities;
