import "./App.scss";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Burger from "./components/NavHamburg/Burger";
import Projects from "./components/Projects/Projects";
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
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
