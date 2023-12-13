import React from "react";
import "./ProjectsDropdown.scss";
import Builda from "../Builda/Builda";
import VearthyReal from "../VearthyReal/VearthyReal";
import VearthyMock from "../VearthyMock/VearthyMock";

function ProjectsDropdown() {
    return (
        <section className="dropdown-container">
            <h2 className="dropdown-container__header">Projects</h2>
            <article className="dropdown-one">
                <h3 className="dropdown-container__subheader">Build A Bouq</h3>
                <Builda />
            </article>
            <article className="dropdown-two">
                <h3 className="dropdown-container__subheader">Vearthy.com</h3>
                <VearthyReal />
            </article>
            <article className="dropdown-three">
                <h3 className="dropdown-container__subheader">Vearthy Mock</h3>
                <VearthyMock />
            </article>
        </section>
    );
}

export default ProjectsDropdown;
