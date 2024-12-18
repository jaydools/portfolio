import React from "react";
import "./Projects.scss";

import pint1 from "../../assets/pint-1.png";
import buildaImage1 from "../../assets/builder.png";
import vearthyImage1 from "../../assets/vearthytop.png";
import rezbuddy from "../../assets/rezbuddy.png";

const projects = [
    {
        title: "RezBuddy",
        body: `RezBuddy.ca is a full-stack web application connecting Canadians with First Nation gas stations and Indigenous-owned businesses. Built with React, Express, MySQL, and Google Maps API, it features an interactive map for gas stations, a directory of Indigenous businesses, and supports user accounts for various features. Fully responsive and user-friendly, RezBuddy.ca empowers community connections and supports economic growth.`,
        link: "https://www.rezbuddy.ca",
        images: [
            {
                src: rezbuddy,
                alt: "Rezbuddy.ca Canada's indigenous gas station finder and indigenous business directory",
            },
        ],
        tech: ["React", "SCSS", "Node", "Express", "NPM", "API's", "FullStack"],
    },
    {
        title: "Pint Picker",
        body: `Pint Picker is an interactive beer recommendation app designed to enhance the selection experience for beer enthusiasts. It integrates OpenAI's ChatGPT 3.5 Turbo to offer personalized suggestions based on user preferences. After completing a user-friendly quiz, the backend uses the OpenAI API to return tailored beer options.`,
        link: "https://pintpicker.netlify.app/",
        images: [{ src: pint1, alt: "Pint Picker preview 1" }],
        tech: ["React", "Open-AI", "SCSS", "Node", "Express", "NPM", "API's", "FullStack"],
    },
    {
        title: "Build A Bouq",
        body: `Build A Bouq helps users create custom bouquets from a selection of flowers. The application allows users to pick various flowers, view a live preview, and save or share their creations. With a clean design and intuitive interface, it's perfect for florists and enthusiasts alike.`,
        link: "https://665d1ff50761dde33bb9b19c--gorgeous-tulumba-42d5c3.netlify.app/",
        images: [{ src: buildaImage1, alt: "Build A Bouq preview 1" }],
        tech: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Npm",
            "SCSS",
            "Axios",
            "Node",
            "Express",
            "Cors",
            "Dotenv",
            "API's",
            "Cloudinary",
            "FullStack",
        ],
    },
    {
        title: "Vearthy.com",
        body: `Vearthy.com is a platform showcasing earth-friendly products and tips. Built for sustainability enthusiasts, it features product listings, user reviews, and a blog section. The responsive design ensures a great user experience on any device.`,
        link: "https://vearthy.com/",
        images: [{ src: vearthyImage1, alt: "Vearthy preview 1" }],
        tech: ["Shopify", "Klaviyo", "Google Analytics", "Liquid", "CSS"],
    },
];

function Projects() {
    return (
        <section id="projects">
            <h2 className="project-title">Projects</h2>
            <p className="project-title__body">(Click Image To View)</p>
            {projects.map((project, index) => (
                <article className="projects-container" key={index}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-container__link"
                    >
                        <div className="projects-container__image-container">
                            {project.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img.src}
                                    alt={img.alt}
                                    className="projects-container__image"
                                />
                            ))}
                        </div>
                    </a>

                    <h2 className="projects-container__title">{project.title}</h2>

                    <div className="projects-container__body">
                        <p className="projects-container__body">{project.body}</p>
                    </div>

                    <div className="tech-icon-container">
                        {project.tech.map((techItem, i) => (
                            <div key={i} className="tech-icon-container__icon">
                                <p className="tech-icon-container__icon--flair">{techItem}</p>
                            </div>
                        ))}
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Projects;
