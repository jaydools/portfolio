import React from "react";
import "./TechStack.scss";
import html from "../../assets/icons/tech/6.png";
import css from "../../assets/icons/tech/7.png";
import javascript from "../../assets/icons/tech/8.png";
import react from "../../assets/icons/tech/9.png";
import sass from "../../assets/icons/tech/10.png";
import node from "../../assets/icons/tech/11.png";
import express from "../../assets/icons/tech/12.png";
import axios from "../../assets/icons/tech/13.png";
import npm from "../../assets/icons/tech/14.png";
import mysql from "../../assets/icons/tech/15.png";
import knex from "../../assets/icons/tech/16.png";
import routerdom from "../../assets/icons/tech/17.png";

function TechStack() {
    return (
        <div className="tec-container">
            <h2 className="tec-container__header">MY SKILLS</h2>
            <h3 className="tec-container__subhead">Technologies</h3>
            <div className="tec-card">
                <img src={html} alt="html icon" className="tec-card__icon" />
                <img src={css} alt="css icon" className="tec-card__icon" />
                <img src={javascript} alt="javascript icon" className="tec-card__icon" />
                <img src={react} alt="react icon" className="tec-card__icon" />
                <img src={sass} alt="sass icon" className="tec-card__icon" />
                <img src={node} alt="node icon" className="tec-card__icon" />
                <img src={express} alt="express icon" className="tec-card__icon" />
                <img src={axios} alt="axios icon" className="tec-card__icon" />
                <img src={npm} alt="npm icon" className="tec-card__icon" />
                <img src={mysql} alt="MySQL icon" className="tec-card__icon" />
                <img src={knex} alt="knex icon" className="tec-card__icon" />
                <img src={routerdom} alt="react router icon" className="tec-card__icon" />
            </div>
        </div>
    );
}

export default TechStack;
