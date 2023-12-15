import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Burger from "./components/NavHamburg/Burger";
import ProjectsDropdown from "./components/ProjectsDropdown/ProjectsDropdown";
import TechStack from "./components/TechStack/TechStack";
import upArrow from "./assets/icons/up-arrow.svg";
import Abilities from "./components/Abilities/Abilities";
import Timeline from "./components/Timeline/Timeline";

function App() {
    const scrollToSection = (sectionId, event) => {
        event.preventDefault();

        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="App" id="top">
            <Burger />
            <Nav />
            <main>
                <Hero />
                <About />
                <Timeline />
                <TechStack />
                <Abilities />
                <ProjectsDropdown />
                <Contact />
            </main>
            <img
                src={upArrow}
                alt="Dropdown Arrow"
                className="top-button"
                href="#top"
                onClick={(e) => scrollToSection("top", e)}
            />
            <Footer />
        </div>
    );
}

export default App;
