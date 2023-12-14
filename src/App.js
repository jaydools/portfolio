import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Burger from "./components/NavHamburg/Burger";
import ProjectsDropdown from "./components/ProjectsDropdown/ProjectsDropdown";
import TechStack from "./components/TechStack/TechStack";

function App() {
    return (
        <div className="App">
            <Burger />
            <Nav />
            <main>
                <Hero />
                <About />
                <TechStack />
                <ProjectsDropdown />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
