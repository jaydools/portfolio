import "./App.scss";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Burger from "./components/NavHamburg/Burger";
import TechStack from "./components/TechStack/TechStack";

function App() {
    return (
        <div className="App">
            <Burger />
            <Nav />
            <Hero />
            <About />
            <TechStack />
        </div>
    );
}

export default App;
