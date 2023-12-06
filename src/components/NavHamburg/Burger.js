import React from "react";
import "./Burger.scss";
function Burger() {
    return (
        <div className="burger-container">
            <label className="burger-menu">
                <input type="checkbox" />
            </label>
            <aside className="sidebar">
                <nav>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </nav>
            </aside>
        </div>
    );
}

export default Burger;
