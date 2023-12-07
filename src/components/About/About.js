import React from "react";
import "./About.scss";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import ux from "../../assets/icons/ux.png";

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h2 className="about-card__header">Background</h2>
                <h4 className="about-card__subhead">Here's a litle about about me</h4>
                <p className="about-card__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus eget augue
                    ut fringilla. Aenean in placerat sem, et interdum ligula. Nulla venenatis quis
                    nulla quis lacinia. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Fusce eget odio pharetra, congue eros at,
                    pretium tortor. In sodales purus id euismod dignissim. Mauris eget nisi ut ipsum
                    facilisis maximus a sed turpis. Nulla imperdiet in sapien eu sodales. Aenean
                    mollis elit vel ante dignissim porta. Morbi mauris leo, placerat eget massa eu,
                    maximus tristique nulla. Mauris arcu tellus, rhoncus vehicula congue non,
                    bibendum ac sem.
                </p>

                <p>
                    Aenean vitae neque sed tellus consectetur molestie. Morbi dignissim lorem vel
                    ipsum consectetur, ac vehicula enim euismod. Integer ut pulvinar eros, ac
                    pharetra tellus. In cursus tortor sit amet dapibus posuere. Curabitur et dolor
                    vel ex semper egestas. Phasellus hendrerit metus nec gravida venenatis. Nulla
                    euismod nisi a leo eleifend, nec dapibus risus ultrices.
                </p>
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
